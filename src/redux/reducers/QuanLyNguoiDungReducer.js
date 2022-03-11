import { TOKEN, USER_LOGIN } from "../../util/settings/config";
import {
  DANG_NHAP_ACTION,
  GET_DANH_SACH_NGUOI_DUNG,
  GET_LOAI_NGUOI_DUNG,
  SET_THONG_TIN_NGUOI_DUNG,
} from "../actions/types/QuanLyNguoiDungType";

let user = {};
if (localStorage.getItem(USER_LOGIN)) {
  user = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const stateDefault = {
  userLogin: user,
  thongTinNguoiDung: {},
  danhSachNguoiDung: [],
  arrLoaiNguoiDung: [],
};

export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case DANG_NHAP_ACTION: {
      const { thongTinDangNhap } = action;
      localStorage.setItem(USER_LOGIN, JSON.stringify(thongTinDangNhap));
      localStorage.setItem(TOKEN, thongTinDangNhap.accessToken);
      return { ...state, userLogin: thongTinDangNhap };
    }
    case SET_THONG_TIN_NGUOI_DUNG: {
      state.thongTinNguoiDung = action.thongTinNguoiDung;
      return { ...state };
    }
    case GET_DANH_SACH_NGUOI_DUNG: {
      state.danhSachNguoiDung = action.danhSachNguoiDung;
      return { ...state };
    }
    case GET_LOAI_NGUOI_DUNG: {
      state.arrLoaiNguoiDung = action.arrLoaiNguoiDung;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
