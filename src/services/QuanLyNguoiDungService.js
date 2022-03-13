import { ThongTinNguoiDung } from "../_core/models/ThongTinNguoiDung";
import { baseService } from "./baseService";

export class QuanLyNguoiDungService extends baseService {
  constructor() {
    super();
  }

  dangNhap = (thongTinDangNhap) => {
    return this.post(`/QuanLyNguoiDung/DangNhap`, thongTinDangNhap);
  };

  layThongTinNguoiDung = () => {
    return this.post(`/QuanLyNguoiDung/ThongTinTaiKhoan`);
  };

  dangKy = (thongTinDangKy) => {
    return this.post(`/QuanLyNguoiDung/DangKy`, thongTinDangKy);
  };

  layDanhSachNguoiDung = (maNhom, tuKhoa = "") => {
    if (tuKhoa !== "") {
      return this.get(
        `/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${maNhom}&tuKhoa=${tuKhoa}`
      );
    }
    return this.get(`/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${maNhom}`);
  };

  layDanhSachLoaiNguoiDung = () => {
    return this.get(`/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung`);
  };

  themNguoiDung = (thongTinNguoiDung = new ThongTinNguoiDung()) => {
    return this.post(`/QuanLyNguoiDung/ThemNguoiDung`, thongTinNguoiDung);
  };
}

export const quanLyNguoiDungService = new QuanLyNguoiDungService();
