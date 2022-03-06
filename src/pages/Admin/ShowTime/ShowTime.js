import React, { useEffect, useState } from "react";
import { Form, InputNumber, Button, Select, DatePicker } from "antd";
import { quanLyRapService } from "../../../services/QuanLyRapService";
import { useFormik } from "formik";
import moment from "moment";
import { quanLyDatVeService } from "../../../services/QuanLyDatVeService";

export default function Showtime(props) {
  const formik = useFormik({
    initialValues: {
      maPhim: props.match.params.id,
      ngayChieuGioChieu: "",
      maRap: "",
      giaVe: "",
    },
    onSubmit: async (values) => {
      console.log("values", values);
      try {
        const result = await quanLyDatVeService.taoLichChieu(values);
        alert(result.data.content);
      } catch (error) {
        console.log("error", error.response?.data);
      }
    },
  });

  const [state, setState] = useState({
    heThongRapChieu: [],
    cumRapChieu: [],
  });

  useEffect(async () => {
    try {
      let result = await quanLyRapService.layThongTinHeThongRap();
      setState({
        ...state,
        heThongRapChieu: result.data.content,
      });
    } catch (error) {
      console.log("error", error.response?.data);
    }
  }, []);

  const handleChangeHeThongRap = async (values) => {
    // console.log("maHeThongRap", values);
    try {
      let result = await quanLyRapService.layThongTinCumRap(values);
      setState({
        ...state,
        cumRapChieu: result.data.content,
      });
    } catch (error) {
      console.log("error", error.response?.data);
    }
  };

  const handleChangeCumRap = (value) => {
    formik.setFieldValue("maRap", value);
  };

  function onChange(value) {
    formik.setFieldValue(
      "ngayChieuGioChieu",
      moment(value).format("DD/MM/YYYY hh:mm:ss")
    );
    // console.log(
    //   "ngayChieuGioChieu: ",
    //   moment(value).format("DD/MM/YYYY hh:mm:ss")
    // );
  }

  function onOk(value) {
    formik.setFieldValue(
      "ngayChieuGioChieu",
      moment(value).format("DD/MM/YYYY hh:mm:ss")
    );
    // console.log(
    //   "ngayChieuGioChieu: ",
    //   moment(value).format("DD/MM/YYYY hh:mm:ss")
    // );
  }

  const onChangeInputNumber = (value) => {
    formik.setFieldValue("giaVe", value);
  };

  const convertSelectHTR = () => {
    // state.heThongRapChieu?.map((htr, index) => ({ label: htr.tenHeThongRap, value: htr.tenHeThongRap }))
    return state.heThongRapChieu?.map((htr, index) => {
      return { label: htr.tenHeThongRap, value: htr.maHeThongRap };
    });
  };

  let film = {};
  if (localStorage.getItem("filmParams")) {
    film = JSON.parse(localStorage.getItem("filmParams"));
  }

  return (
    <div className="container">
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        onSubmitCapture={formik.handleSubmit}
      >
        <h3>Tạo lịch chiếu - {props.match.params.tenphim}</h3>
        <img src={film.hinhAnh} alt="..." width={200} height={100} />
        <Form.Item label="Hệ thống rạp">
          <Select
            style={{ width: "100%" }}
            onChange={handleChangeHeThongRap}
            placeholder="Chọn hệ thống rạp"
            options={convertSelectHTR()}
          />
        </Form.Item>
        <Form.Item label="Cụm rạp">
          <Select
            onChange={handleChangeCumRap}
            placeholder="Chọn cụm rạp"
            options={state.cumRapChieu?.map((cumRap, index) => ({
              label: cumRap.tenCumRap,
              value: cumRap.maCumRap,
            }))}
          />
        </Form.Item>
        <Form.Item label="Ngày - giờ chiếu">
          <DatePicker
            showTime
            onChange={onChange}
            onOk={onOk}
            placeholder="Chọn ngày - giờ chiếu"
            format="DD/MM/YYYY hh:mm:ss"
          />
        </Form.Item>
        <Form.Item label="Giá vé">
          <InputNumber
            min={75000}
            max={150000}
            onChange={onChangeInputNumber}
          />
        </Form.Item>
        <Form.Item label="Chức năng">
          <Button type="primary" htmlType="submit">
            Tạo lịch chiếu
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
