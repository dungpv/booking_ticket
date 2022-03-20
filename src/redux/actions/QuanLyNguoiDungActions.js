import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDungService";
import {
  DANG_NHAP_ACTION,
  GET_DANH_SACH_NGUOI_DUNG,
  GET_LOAI_NGUOI_DUNG,
  SET_THONG_TIN_NGUOI_DUNG,
} from "./types/QuanLyNguoiDungType";
import { history } from "../../App";
import { ThongTinNguoiDung } from "../../_core/models/ThongTinNguoiDung";
import { displayLoadingAction, hideLoadingAction } from "./LoadingActions";
import { GROUPID } from "../../util/settings/config";

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

export const themNguoiDungAction = (
  thongTinNguoiDung = new ThongTinNguoiDung()
) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.themNguoiDung(
        thongTinNguoiDung
      );
      alert("Thêm mới người dùng thành công.");
      console.log("result", result);
      history.push("/admin/users");
    } catch (error) {
      console.log("error", error);
      console.log("error", error.response?.data);
    }
  };
};

export const xoaNguoiDungAction = (taiKhoan) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.xoaNguoiDung(taiKhoan);
      alert("Xóa người dùng thành công!");
      dispatch(layDanhSachNguoiDungAction(GROUPID, ""));
      history.push("/admin/users");
    } catch (errors) {
      alert(errors.response?.data.content);
      console.log(errors.response?.data);
    }
  };
};

export const capNhatThongTinNguoiDungAction = (
  thongTinNguoiDung = new ThongTinNguoiDung()
) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.capNhatThongTinNguoiDung(
        thongTinNguoiDung
      );
      alert("Cập nhật người dùng thành công.");
      console.log("result", result);
      history.push("/admin/users");
    } catch (error) {
      console.log("error", error);
      console.log("error", error.response?.data);
    }
  };
};

export const capNhatProfileNguoiDungAction = (
  thongTinNguoiDung = new ThongTinNguoiDung()
) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.capNhatThongTinNguoiDung(
        thongTinNguoiDung
      );
      if (result.data.statusCode === 200) {
        alert("Cập nhật thông tin người dùng thành công.");

        history.push("/profile");
      }
    } catch (error) {
      console.log("error", error);
      console.log("error", error.response?.data);
    }
  };
};
