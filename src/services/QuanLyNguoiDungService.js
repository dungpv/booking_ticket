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
}

export const quanLyNguoiDungService = new QuanLyNguoiDungService();
