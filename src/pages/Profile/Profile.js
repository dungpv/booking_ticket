import React, { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  capNhatProfileNguoiDungAction,
  layThongTinNguoiDungAction,
} from "../../redux/actions/QuanLyNguoiDungActions";
import moment from "moment";
import _ from "lodash";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ThongTinNguoiDung } from "../../_core/models/ThongTinNguoiDung";
import { GROUP_KHACH_HANG_TEXT } from "../../util/settings/config";

export default function Profile(props) {
  const dispatch = useDispatch();
  const { thongTinNguoiDung } = useSelector(
    (state) => state.QuanLyNguoiDungReducer
  );

  useEffect(() => {
    const action = layThongTinNguoiDungAction();
    dispatch(action);
  }, []);

  //console.log("thongTinNguoiDung", thongTinNguoiDung);

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      taiKhoan: thongTinNguoiDung?.taiKhoan,
      matKhau: thongTinNguoiDung?.matKhau,
      email: thongTinNguoiDung?.email,
      soDT: thongTinNguoiDung?.soDT,
      maLoaiNguoiDung: thongTinNguoiDung?.loaiNguoiDung,
      hoTen: thongTinNguoiDung?.hoTen,
    },
    validationSchema: Yup.object({
      matKhau: Yup.string()
        .min(6, "Nhập ít nhất 6 ký tự")
        .required("Thông tin bắt buộc nhập!"),
      email: Yup.string()
        .email("Email sai định dạng")
        .required("Thông tin bắt buộc nhập!"),
      soDT: Yup.string()
        .matches(phoneRegExp, "Số điện thoại không hợp lệ")
        .required("Thông tin bắt buộc nhập!"),
      hoTen: Yup.string()
        .min(2, "Nhập ít nhất 2 ký tự")
        .max(30, "Nhập nhiều nhất 30 ký tự")
        .required("Thông tin bắt buộc nhập!"),
    }),
    onSubmit: (values) => {
      const editThongTinNguoiDung = new ThongTinNguoiDung();
      editThongTinNguoiDung.taiKhoan = values.taiKhoan;
      editThongTinNguoiDung.matKhau = values.matKhau;
      editThongTinNguoiDung.email = values.email;
      editThongTinNguoiDung.soDt = values.soDT;
      editThongTinNguoiDung.maNhom = thongTinNguoiDung.maNhom;
      editThongTinNguoiDung.maLoaiNguoiDung =
        thongTinNguoiDung.loaiNguoiDung === null ||
        thongTinNguoiDung.loaiNguoiDung === undefined
          ? GROUP_KHACH_HANG_TEXT
          : thongTinNguoiDung.loaiNguoiDung;
      editThongTinNguoiDung.hoTen = values.hoTen;

      //console.log("editThongTinNguoiDung", editThongTinNguoiDung);

      dispatch(capNhatProfileNguoiDungAction(editThongTinNguoiDung));
    },
  });

  const renderNguoiDung = () => {
    return (
      <form onSubmitCapture={formik.handleSubmit}>
        <div className="flex flex-wrap -m-2">
          <div className="p-2 w-full">
            <div className="relative">
              <label className="leading-7 text-sm text-gray-600">
                Tài khoản
              </label>
              <input
                disabled={true}
                type="text"
                id="taiKhoan"
                name="taiKhoan"
                onChange={formik.handleChange}
                value={formik.values.taiKhoan || ""}
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="relative">
              <label className="leading-7 text-sm text-gray-600">
                Mật khẩu
              </label>
              <input
                disabled={true}
                type="password"
                id="matKhau"
                name="matKhau"
                onChange={formik.handleChange}
                value={formik.values.matKhau || ""}
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              {formik.errors.matKhau && formik.touched.matKhau && (
                <div className="text-red-600 text-sm">
                  {formik.errors.matKhau}
                </div>
              )}
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="relative">
              <label className="leading-7 text-sm text-gray-600">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email || ""}
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              {formik.errors.email && formik.touched.email && (
                <div className="text-red-600 text-sm">
                  {formik.errors.email}
                </div>
              )}
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="relative">
              <label className="leading-7 text-sm text-gray-600">
                Điện thoại
              </label>
              <input
                type="text"
                id="soDT"
                name="soDT"
                onChange={formik.handleChange}
                value={formik.values.soDT || ""}
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              {formik.errors.soDt && formik.touched.soDt && (
                <div className="text-red-600 text-sm">{formik.errors.soDt}</div>
              )}
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="relative">
              <label className="leading-7 text-sm text-gray-600">Họ tên</label>
              <input
                type="text"
                id="hoTen"
                name="hoTen"
                onChange={formik.handleChange}
                value={formik.values.hoTen || ""}
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              {formik.errors.hoTen && formik.touched.hoTen && (
                <div className="text-red-600 text-sm">
                  {formik.errors.hoTen}
                </div>
              )}
            </div>
          </div>

          <div className="p-2 w-full">
            <button
              type="submit"
              className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Cập nhật
            </button>
          </div>
        </div>
      </form>
    );
  };

  const renderTicketItem = function () {
    return thongTinNguoiDung.thongTinDatVe?.map((ticket, index) => {
      const seats = _.first(ticket.danhSachGhe);

      return (
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full" key={index}>
          <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
            <img
              alt="team"
              className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
              src={ticket.hinhAnh}
            />
            <div className="flex-grow">
              <h2 className="text-pink-500 title-font font-medium text-2xl">
                {ticket.tenPhim}
              </h2>
              <p className="text-gray-500">
                <span className="font-bold">Giờ chiếu:</span>{" "}
                {moment(ticket.ngayDat).format("hh:mm A")} -{" "}
                <span className="font-bold">Ngày chiếu:</span>{" "}
                {moment(ticket.ngayDat).format("DD-MM-YYYY")} .
              </p>
              <p>
                <span className="font-bold">Địa điểm:</span>{" "}
                {seats.tenHeThongRap}{" "}
              </p>
              <p>
                <span className="font-bold">Tên rạp:</span> {seats.tenCumRap} -{" "}
                <span className="font-bold">Ghế:</span>{" "}
                {ticket.danhSachGhe.map((ghe, index) => {
                  return (
                    <span className="text-green-500 text-xl" key={index}>
                      {" "}
                      [ {ghe.tenGhe} ]{" "}
                    </span>
                  );
                })}
              </p>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 mt-5 text-gray-900">
            Thông tin người dùng
          </h1>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">{renderNguoiDung()}</div>
      </div>
      <div className="container px-5 py-8 mx-auto">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-12 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-purple-600 ">
                Lịch sử đặt vé
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Xem lại lịch sử đặt vé xem phim tại các rạp chiếu.
              </p>
            </div>
            <div className="flex flex-wrap -m-2"> {renderTicketItem()}</div>
          </div>
        </section>
      </div>
    </section>
  );
}
