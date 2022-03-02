import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Checkout.module.css";
import "./Checkout.css";
import { layChiTietPhongVeAction } from "../../redux/actions/QuanLyDatVeActions";

export default function Checkout(props) {
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);

  const { chiTietPhongVe } = useSelector((state) => state.QuanLyDatVeReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    const action = layChiTietPhongVeAction(props.match.params.id);
    dispatch(action);
  }, []);

  return (
    <div className="container min-h-screen">
      <div className="grid grid-cols-12">
        <div className="col-span-9">
          <div className="flex flex-col items-center mt-5">
            <div
              className="bg-black"
              style={{ width: "80%", height: "10px" }}
            ></div>
            <div className={`${style["trapezoid"]} text-center`}>
              <h3 className="mt-3 text-black">Màn hình</h3>
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <h3 className="text-green-400 text-center text-2xl">0 đ</h3>
          <hr></hr>
          <h3 className="text-xl mt-2">Black Windows</h3>
          <p>Địa điểm: BHD Star - Vincom 3/2</p>
          <p>Ngày chiếu: 25/04/2021 - 12:05 Rạp 5</p>
          <hr></hr>
          <div className="flex flex-row my-5">
            <div className="w-4/5">
              <span className="text-red-400 text-lg">Ghế</span>
            </div>
            <div className="text-right">
              <span className="text-green-800 text-lg">0 đ</span>
            </div>
          </div>
          <hr></hr>
          <div className="my-5">
            <i>Email</i>
            <br></br>
            {userLogin.email}
          </div>
          <hr></hr>
          <div className="my-5">
            <i>Phone</i>
            <br></br>
            {userLogin.soDT == null ? "0934332185" : userLogin.soDT}
          </div>
          <hr></hr>
          <div
            className="mb-0 h-full flex flex-col justify-end items-center"
            style={{ marginBottom: 0 }}
          >
            <div className="bg-green-500 text-white w-full text-center py-3 font-bold text-2xl">
              ĐẶT VÉ
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
