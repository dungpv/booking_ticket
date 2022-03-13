import React, { useEffect, useState } from "react";
import { Form, Input, Select, Radio } from "antd";
import { useFormik } from "formik";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import {
  GROUPID,
  GROUP_KHACH_HANG_TEXT,
} from "../../../../util/settings/config";
import {
  layDanhSachLoaiNguoiDungAction,
  themNguoiDungAction,
} from "../../../../redux/actions/QuanLyNguoiDungActions";
import { ThongTinNguoiDung } from "../../../../_core/models/ThongTinNguoiDung";
import * as Yup from "yup";

export default function AddUser() {
  const [componentSize, setComponentSize] = useState("default");

  const { arrLoaiNguoiDung } = useSelector(
    (state) => state.QuanLyNguoiDungReducer
  );

  const loaiNguoiDungOption = arrLoaiNguoiDung.map((item, index) => {
    return { value: item.maLoaiNguoiDung, label: item.tenLoai };
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(layDanhSachLoaiNguoiDungAction());
  }, []);

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: "",
      maLoaiNguoiDung: "",
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
      maLoaiNguoiDung: Yup.string().required("Thông tin bắt buộc nhập!"),
      hoTen: Yup.string()
        .min(2, "Nhập ít nhất 2 ký tự")
        .max(30, "Nhập nhiều nhất 30 ký tự")
        .required("Thông tin bắt buộc nhập!"),
    }),
    onSubmit: (values) => {
      const thongTinNguoiDung = new ThongTinNguoiDung();
      thongTinNguoiDung.taiKhoan = values.taiKhoan;
      thongTinNguoiDung.matKhau = values.matKhau;
      thongTinNguoiDung.email = values.email;
      thongTinNguoiDung.soDt = values.soDt;
      thongTinNguoiDung.maNhom = GROUPID;
      thongTinNguoiDung.maLoaiNguoiDung = values.maLoaiNguoiDung;
      thongTinNguoiDung.hoTen = values.hoTen;
      //console.log("thongTinNguoiDung", thongTinNguoiDung);

      dispatch(themNguoiDungAction(thongTinNguoiDung));
    },
  });

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const handleChangeSelect = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };

  return (
    <Form
      onSubmitCapture={formik.handleSubmit}
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
      }}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
    >
      <h3>Thêm mới người dùng</h3>
      <Form.Item label="Form Size" name="size">
        <Radio.Group>
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Tài khoản">
        <Input name="taiKhoan" onChange={formik.handleChange} />
        {formik.errors.taiKhoan && formik.touched.taiKhoan && (
          <div style={{ color: "red" }}>{formik.errors.taiKhoan}</div>
        )}
      </Form.Item>
      <Form.Item label="Mật khẩu">
        <Input.Password name="matKhau" onChange={formik.handleChange} />
        {formik.errors.matKhau && formik.touched.matKhau && (
          <div style={{ color: "red" }}>{formik.errors.matKhau}</div>
        )}
      </Form.Item>
      <Form.Item label="Email">
        <Input name="email" onChange={formik.handleChange} />
        {formik.errors.email && formik.touched.email && (
          <div style={{ color: "red" }}>{formik.errors.email}</div>
        )}
      </Form.Item>
      <Form.Item label="Điện thoại">
        <Input name="soDt" onChange={formik.handleChange} />
        {formik.errors.soDt && formik.touched.soDt && (
          <div style={{ color: "red" }}>{formik.errors.soDt}</div>
        )}
      </Form.Item>
      <Form.Item label="Loại người dùng">
        <Select
          style={{ width: "100%" }}
          options={loaiNguoiDungOption}
          onChange={handleChangeSelect("maLoaiNguoiDung")}
        ></Select>
      </Form.Item>
      <Form.Item label="Họ tên">
        <Input name="hoTen" onChange={formik.handleChange} />
        {formik.errors.hoTen && formik.touched.hoTen && (
          <div style={{ color: "red" }}>{formik.errors.hoTen}</div>
        )}
      </Form.Item>
      <Form.Item label="Tác vụ">
        <button type="submit" className="bg-blue-300 text-white p-2">
          Thêm người dùng
        </button>
      </Form.Item>
    </Form>
  );
}
