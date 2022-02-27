import { GROUPID } from "../util/settings/config";
import { baseService } from "./baseService";

export class QuanLyPhimService extends baseService {
  constructor() {
    super();
  }
  layDanhSachBanner = () => {
    return this.get(`/QuanLyPhim/LayDanhSachBanner`);
  };

  layDanhSachPhim = () => {
    return this.get(`/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`);
  };
}

export const quanLyPhimService = new QuanLyPhimService();
