import { quanLyRapService } from "../../services/QuanLyRapService";
import { SET_HE_THONG_RAP_CHIEU } from "./types/QuanLyRapType";

export const layThongTinLichChieuHeThongRapAction = () => {
  return async (dispatch) => {
    try {
      //Sử dụng tham số thamSo
      const result = await quanLyRapService.layThongTinLichChieuHeThongRap();

      //Sau khi lấy dữ liệu từ api về => redux (reducer)
      dispatch({
        type: SET_HE_THONG_RAP_CHIEU,
        heThongRapChieu: result.data.content,
      });
    } catch (errors) {
      console.log("errors", errors);
    }
  };
};
