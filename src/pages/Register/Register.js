import React from "react";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  dangKyAction,
  dangNhapAction,
} from "../../redux/actions/QuangLyNguoiDungActions";
import { GROUPID } from "../../util/settings/config";
import * as Yup from "yup";

export default function Register(props) {
  const dispatch = useDispatch();

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      hoTen: "",
    },
    validationSchema: Yup.object({
      taiKhoan: Yup.string()
        .min(2, "Nhập ít nhất 2 ký tự")
        .max(30, "Nhập nhiều nhất 30 ký tự")
        .required("Thông tin bắt buộc nhập!"),
      matKhau: Yup.string()
        .min(6, "Nhập ít nhất 6 ký tự")
        .required("Thông tin bắt buộc nhập!"),
      email: Yup.string()
        .email("Email sai định dạng")
        .required("Thông tin bắt buộc nhập!"),

      soDt: Yup.string()
        .matches(phoneRegExp, "Số điện thoại không hợp lệ")
        .required("Thông tin bắt buộc nhập!"),
      hoTen: Yup.string()
        .min(2, "Nhập ít nhất 2 ký tự")
        .max(30, "Nhập nhiều nhất 30 ký tự")
        .required("Thông tin bắt buộc nhập!"),
    }),
    onSubmit: (values) => {
      values.maNhom = GROUPID;
      const action = dangKyAction(values);
      dispatch(action);
      console.log("values", values);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="lg:w-1/2 xl:max-w-screen-sm"
    >
      <div className="py-12 bg-indigo-100 lg:bg-white flex justify-center lg:justify-start lg:px-12">
        <div className="cursor-pointer flex items-center">
          <div>
            <svg
              className="w-10 text-indigo-500"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Layer_1"
              x="0px"
              y="0px"
              viewBox="0 0 225 225"
              style={{ enableBackground: "new 0 0 225 225" }}
              xmlSpace="preserve"
            >
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html:
                    "\n                                    .st0{fill:none;stroke:currentColor;stroke-width:20;stroke-linecap:round;stroke-miterlimit:3;}\n                                ",
                }}
              />
              <g transform="matrix( 1, 0, 0, 1, 0,0) ">
                <g>
                  <path
                    id="Layer0_0_1_STROKES"
                    className="st0"
                    d="M173.8,151.5l13.6-13.6 M35.4,89.9l29.1-29 M89.4,34.9v1 M137.4,187.9l-0.6-0.4     M36.6,138.7l0.2-0.2 M56.1,169.1l27.7-27.6 M63.8,111.5l74.3-74.4 M87.1,188.1L187.6,87.6 M110.8,114.5l57.8-57.8"
                  />
                </g>
              </g>
            </svg>
          </div>
          <div className="text-2xl text-indigo-800 tracking-wide ml-2 font-semibold">
            CYBERLEARN
          </div>
        </div>
      </div>
      <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
        <h2
          className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
xl:text-bold"
        >
          Đăng ký
        </h2>
        <div className="mt-12">
          <div>
            <div>
              <div className="text-sm font-bold text-gray-700 tracking-wide">
                Tài khoản
              </div>
              <input
                name="taiKhoan"
                onChange={formik.handleChange}
                value={formik.values.taiKhoan}
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                placeholder="Nhập vào tài khoản"
              />
              {formik.errors.taiKhoan && formik.touched.taiKhoan && (
                <p style={{ color: "red" }}>{formik.errors.taiKhoan}</p>
              )}
            </div>
            <div className="mt-8">
              <div className="flex justify-between items-center">
                <div className="text-sm font-bold text-gray-700 tracking-wide">
                  Mật khẩu
                </div>
              </div>
              <input
                type="password"
                name="matKhau"
                onChange={formik.handleChange}
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                placeholder="Nhập vào mật khẩu"
              />
              {formik.errors.matKhau && formik.touched.matKhau && (
                <p style={{ color: "red" }}>{formik.errors.matKhau}</p>
              )}
            </div>
            <div className="mt-8">
              <div className="text-sm font-bold text-gray-700 tracking-wide">
                Email
              </div>
              <input
                type="email"
                name="email"
                onChange={formik.handleChange}
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                placeholder="Nhập vào email"
              />
              {formik.errors.email && formik.touched.email && (
                <p style={{ color: "red" }}>{formik.errors.email}</p>
              )}
            </div>
            <div className="mt-8">
              <div className="text-sm font-bold text-gray-700 tracking-wide">
                Điện thoại
              </div>
              <input
                name="soDt"
                onChange={formik.handleChange}
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                placeholder="Nhập vào điện thoại"
              />
              {formik.errors.soDt && formik.touched.soDt && (
                <p style={{ color: "red" }}>{formik.errors.soDt}</p>
              )}
            </div>
            <div className="mt-8">
              <div className="text-sm font-bold text-gray-700 tracking-wide">
                Họ tên
              </div>
              <input
                name="hoTen"
                onChange={formik.handleChange}
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                placeholder="Nhập vào họ tên"
              />
              {formik.errors.hoTen && formik.touched.hoTen && (
                <p style={{ color: "red" }}>{formik.errors.hoTen}</p>
              )}
            </div>
            <div className="mt-10">
              <button
                className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
          font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
          shadow-lg"
              >
                Đăng ký
              </button>
            </div>
          </div>
          <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
            Bạn đã có tài khoản ?
            <NavLink
              to="login"
              className="cursor-pointer text-indigo-600 hover:text-indigo-800"
            >
              Đăng nhập
            </NavLink>
          </div>
        </div>
      </div>
    </form>
  );
}
