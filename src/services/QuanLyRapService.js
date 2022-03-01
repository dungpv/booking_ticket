import { GROUPID } from "../util/settings/config";
import { baseService } from "./baseService";

export class QuanLyRapService extends baseService {
  constructor() {
    super();
  }

  layThongTinLichChieuHeThongRap = () => {
    return this.get(
      `/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`
    );
  };

  layThongTinLichChieuPhim = (maPhim) => {
    return this.get(`/QuanLyRap/LayThongTinLichChieuPhim?maPhim=${maPhim}`);
  };
}

export const quanLyRapService = new QuanLyRapService();
