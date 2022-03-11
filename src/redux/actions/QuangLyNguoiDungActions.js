import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDungService";
import {
  DANG_NHAP_ACTION,
  GET_DANH_SACH_NGUOI_DUNG,
  GET_LOAI_NGUOI_DUNG,
  SET_THONG_TIN_NGUOI_DUNG,
} from "./types/QuanLyNguoiDungType";
import { history } from "../../App";

export const dangNhapAction = (thongTinDangNhap) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap);

      if (result.data.statusCode === 200) {
        dispatch({
          type: DANG_NHAP_ACTION,
          thongTinDangNhap: result.data.content,
        });
        history.goBack(); // chuyen ve trang truoc do
      }

      console.log("result", result);
    } catch (errors) {
      console.log("errors", errors);
    }
  };
};

export const layThongTinNguoiDungAction = () => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.layThongTinNguoiDung();

      if (result.data.statusCode === 200) {
        dispatch({
          type: SET_THONG_TIN_NGUOI_DUNG,
          thongTinNguoiDung: result.data.content,
        });
      }
    } catch (errors) {
      console.log("errors", errors);
    }
  };
};

export const dangKyAction = (thongTinDangKy) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.dangKy(thongTinDangKy);

      if (result.data.statusCode === 200) {
        alert("Đăng ký thành công!");
        history.push("/login");
      }

      //console.log("result", result);
    } catch (errors) {
      console.log("errors", errors);
    }
  };
};

export const layDanhSachNguoiDungAction = (maNhom, tuKhoa) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.layDanhSachNguoiDung(
        maNhom,
        tuKhoa
      );

      if (result.data.statusCode === 200) {
        dispatch({
          type: GET_DANH_SACH_NGUOI_DUNG,
          danhSachNguoiDung: result.data.content,
        });
      }
    } catch (errors) {
      console.log("errors", errors);
    }
  };
};

export const layDanhSachLoaiNguoiDungAction = () => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.layDanhSachLoaiNguoiDung();

      if (result.data.statusCode === 200) {
        dispatch({
          type: GET_LOAI_NGUOI_DUNG,
          arrLoaiNguoiDung: result.data.content,
        });
      }
    } catch (errors) {
      console.log("errors", errors);
    }
  };
};
