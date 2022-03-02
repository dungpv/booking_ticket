import { quanLyDatVeService } from "../../services/QuanLyDatVeService";
import { SET_CHI_TIET_PHONG_VE } from "./types/QuanLyDatVeType";

export const layChiTietPhongVeAction = (maLichChieu) => {
  return async (dispatch) => {
    try {
      //Sử dụng tham số thamSo
      const result = await quanLyDatVeService.layChiTietPhongVe(maLichChieu);

      if (result.statusCode == 200) {
        dispatch({
          type: SET_CHI_TIET_PHONG_VE,
          chiTietPhongVe: result.data.content,
        });
      }
    } catch (errors) {
      console.log("errors", errors);
    }
  };
};
