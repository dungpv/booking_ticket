import React, { useEffect, useState } from "react";
import { Form, Input, Select, Radio } from "antd";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { GROUPID } from "../../../../util/settings/config";
import {
  capNhatThongTinNguoiDungAction,
  layDanhSachLoaiNguoiDungAction,
  layDanhSachNguoiDungAction,
  themNguoiDungAction,
} from "../../../../redux/actions/QuanLyNguoiDungActions";
import { ThongTinNguoiDung } from "../../../../_core/models/ThongTinNguoiDung";
import * as Yup from "yup";

export default function EditUser(props) {
  const [componentSize, setComponentSize] = useState("default");

  const { arrLoaiNguoiDung, danhSachNguoiDung } = useSelector(
    (state) => state.QuanLyNguoiDungReducer
  );

  const loaiNguoiDungOption = arrLoaiNguoiDung.map((item, index) => {
    return { value: item.maLoaiNguoiDung, label: item.tenLoai };
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(layDanhSachLoaiNguoiDungAction());
    dispatch(layDanhSachNguoiDungAction(GROUPID, ""));
  }, []);

  let { user } = props.match.params;

  const thongTinUser = danhSachNguoiDung.find(
    (nguoiDung) => nguoiDung.taiKhoan === user
  );
  console.log(thongTinUser);

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      taiKhoan: thongTinUser?.taiKhoan,
      matKhau: thongTinUser?.matKhau,
      email: thongTinUser?.email,
      soDt: thongTinUser?.soDt,
      maLoaiNguoiDung: thongTinUser?.maLoaiNguoiDung,
      hoTen: thongTinUser?.hoTen,
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
      const thongTinNguoiDung = new ThongTinNguoiDung();
      thongTinNguoiDung.taiKhoan = values.taiKhoan;
      thongTinNguoiDung.matKhau = values.matKhau;
      thongTinNguoiDung.email = values.email;
      thongTinNguoiDung.soDt = values.soDt;
      thongTinNguoiDung.maNhom = GROUPID;
      thongTinNguoiDung.maLoaiNguoiDung = values.maLoaiNguoiDung;
      thongTinNguoiDung.hoTen = values.hoTen;
      //console.log("thongTinNguoiDung", thongTinNguoiDung);

      dispatch(capNhatThongTinNguoiDungAction(thongTinNguoiDung));
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
      <h3>Cập nhật người dùng</h3>
      <Form.Item label="Form Size" name="size">
        <Radio.Group>
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Tài khoản">
        <Input
          name="taiKhoan"
          onChange={formik.handleChange}
          value={formik.values.taiKhoan}
        />
        {formik.errors.taiKhoan && formik.touched.taiKhoan && (
          <div style={{ color: "red" }}>{formik.errors.taiKhoan}</div>
        )}
      </Form.Item>
      <Form.Item label="Mật khẩu">
        <Input.Password
          name="matKhau"
          onChange={formik.handleChange}
          value={formik.values.matKhau}
        />
        {formik.errors.matKhau && formik.touched.matKhau && (
          <div style={{ color: "red" }}>{formik.errors.matKhau}</div>
        )}
      </Form.Item>
      <Form.Item label="Email">
        <Input
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email && formik.touched.email && (
          <div style={{ color: "red" }}>{formik.errors.email}</div>
        )}
      </Form.Item>
      <Form.Item label="Điện thoại">
        <Input
          name="soDt"
          onChange={formik.handleChange}
          value={formik.values.soDt}
        />
        {formik.errors.soDt && formik.touched.soDt && (
          <div style={{ color: "red" }}>{formik.errors.soDt}</div>
        )}
      </Form.Item>
      <Form.Item label="Loại người dùng">
        <Select
          style={{ width: "100%" }}
          value={formik.values.maLoaiNguoiDung}
          options={loaiNguoiDungOption}
          onChange={handleChangeSelect("maLoaiNguoiDung")}
        ></Select>
      </Form.Item>
      <Form.Item label="Họ tên">
        <Input
          name="hoTen"
          onChange={formik.handleChange}
          value={formik.values.hoTen}
        />
        {formik.errors.hoTen && formik.touched.hoTen && (
          <div style={{ color: "red" }}>{formik.errors.hoTen}</div>
        )}
      </Form.Item>
      <Form.Item label="Tác vụ">
        <button type="submit" className="bg-blue-300 text-white p-2">
          Cập nhật người dùng
        </button>
      </Form.Item>
    </Form>
  );
}
