import { quanLyDatVeService } from "../../services/QuanLyDatVeService";
import { ThongTinDatVe } from "../../_core/models/ThongTinDatVe";
import { displayLoadingAction, hideLoadingAction } from "./LoadingActions";
import { DISPLAY_LOADING, HIDE_LOADING } from "./types/LoadingType";
import {
  CHUYEN_TAB,
  DAT_VE,
  DAT_VE_HOAN_TAT,
  SET_CHI_TIET_PHONG_VE,
} from "./types/QuanLyDatVeType";
import { connection } from "../../index";

export const layChiTietPhongVeAction = (maLichChieu) => {
  return async (dispatch) => {
    try {
      const result = await quanLyDatVeService.layChiTietPhongVe(maLichChieu);

      // console.log('result',result);
      if (result.status === 200) {
        dispatch({
          type: SET_CHI_TIET_PHONG_VE,
          chiTietPhongVe: result.data.content,
        });
      }
    } catch (error) {
      console.log("error", error);
      console.log("error", error.response?.data);
    }
  };
};

export const datVeAction = (thongTinDatVe = new ThongTinDatVe()) => {
  return async (dispatch, getState) => {
    try {
      dispatch(displayLoadingAction);

      const result = await quanLyDatVeService.datVe(thongTinDatVe);

      console.log("result", result);

      await dispatch(layChiTietPhongVeAction(thongTinDatVe.maLichChieu));

      await dispatch({ type: DAT_VE_HOAN_TAT });

      let userLogin = getState().QuanLyNguoiDungReducer.userLogin;
      connection.invoke(
        "datGheThanhCong",
        userLogin.taiKhoan,
        thongTinDatVe.maLichChieu
      );

      dispatch(hideLoadingAction);

      dispatch({ type: CHUYEN_TAB });
    } catch (error) {
      dispatch(hideLoadingAction);
      console.log("error", error);
      console.log("error", error.response?.data);
    }
  };
};

export const datGheAction = (ghe, maLichChieu) => {
  return async (dispatch, getState) => {
    await dispatch({
      type: DAT_VE,
      gheDuocChon: ghe,
    });

    // call api ve back end
    let danhSachGheDangDat = getState().QuanLyDatVeReducer.danhSachGheDangDat;
    let taiKhoan = getState().QuanLyNguoiDungReducer.userLogin.taiKhoan;

    console.log("danhSachGheDangDat", danhSachGheDangDat);
    console.log("taiKhoan", taiKhoan);
    console.log("maLichChieu", maLichChieu);
    //Biến mảng thành chuỗi
    danhSachGheDangDat = JSON.stringify(danhSachGheDangDat);
    // call signal r
    connection.invoke("datGhe", taiKhoan, danhSachGheDangDat, maLichChieu);
  };
};
