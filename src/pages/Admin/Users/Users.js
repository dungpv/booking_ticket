import React, { Fragment, useEffect, useState } from "react";
import { Table, Button, Input, Select, Row, Col } from "antd";
import {
  EditOutlined,
  SearchOutlined,
  DeleteOutlined,
  CalculatorOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { history } from "../../../App";
import {
  layDanhSachLoaiNguoiDungAction,
  layDanhSachNguoiDungAction,
  xoaNguoiDungAction,
} from "../../../redux/actions/QuanLyNguoiDungActions";
import {
  GROUPID,
  GROUP_KHACH_HANG,
  GROUP_KHACH_HANG_TEXT,
  GROUP_QUAN_TRI,
} from "../../../util/settings/config";

const { Search } = Input;
const { Option } = Select;

export default function Users(props) {
  const { danhSachNguoiDung } = useSelector(
    (state) => state.QuanLyNguoiDungReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(layDanhSachNguoiDungAction(GROUPID, ""));
  }, []);

  const columns = [
    {
      title: "Tài khoản",
      dataIndex: "taiKhoan",
      sorter: (a, b) => {
        let taiKhoanA = a.taiKhoan.toLowerCase().trim();
        let taiKhoanB = b.taiKhoan.toLowerCase().trim();
        if (taiKhoanA > taiKhoanB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ["descend", "ascend"],
      width: "15%",
    },
    {
      title: "Họ tên",
      dataIndex: "hoTen",
      sorter: (a, b) => {
        let hoTenA = a.hoTen.toLowerCase().trim();
        let hoTenB = b.hoTen.toLowerCase().trim();
        if (hoTenA > hoTenB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ["descend", "ascend"],
      width: "25%",
    },
    {
      title: "Điện thoại",
      dataIndex: "soDt",
      sorter: (a, b) => {
        let soDtA = a.soDt.toLowerCase().trim();
        let soDtB = b.soDt.toLowerCase().trim();
        if (soDtA > soDtB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ["descend", "ascend"],
      width: "15%",
    },
    {
      title: "Loại người dùng",
      dataIndex: "maLoaiNguoiDung",
      sorter: (a, b) => {
        let maLoaiNguoiDungA = a.maLoaiNguoiDung.toLowerCase().trim();
        let maLoaiNguoiDungB = b.maLoaiNguoiDung.toLowerCase().trim();
        if (maLoaiNguoiDungA > maLoaiNguoiDungB) {
          return 1;
        }
        return -1;
      },
      render: (text, user) => {
        return (
          <Fragment>
            {user.maLoaiNguoiDung == GROUP_KHACH_HANG_TEXT
              ? "Khách hàng"
              : "Quản trị"}
          </Fragment>
        );
      },
      sortDirections: ["descend", "ascend"],
      width: "15%",
    },
    {
      title: "Hành động",
      dataIndex: "taiKhoan",
      render: (text, user) => {
        return (
          <Fragment>
            <NavLink
              key={1}
              className=" mr-2 text-2xl"
              to={`/admin/films/edit/${user.taiKhoan}`}
            >
              <EditOutlined style={{ color: "blue" }} />{" "}
            </NavLink>
            <span
              style={{ cursor: "pointer" }}
              key={2}
              className="text-2xl"
              onClick={() => {
                if (
                  window.confirm(
                    "Bạn có chắc muốn xóa tài khoản " + user.taiKhoan
                  )
                ) {
                  dispatch(xoaNguoiDungAction(user.taiKhoan));
                }
              }}
            >
              <DeleteOutlined style={{ color: "red" }} />{" "}
            </span>
          </Fragment>
        );
      },
      sortDirections: ["descend", "ascend"],
      width: "25%",
    },
  ];
  const data = danhSachNguoiDung;

  const onSearch = (value) => {
    let maNhom = GROUPID;
    dispatch(layDanhSachNguoiDungAction(maNhom, value));
  };

  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

  return (
    <div>
      <h3 className="text-4xl">Quản lý người dùng</h3>
      <Button
        className="mb-5"
        onClick={() => {
          history.push("/admin/users/addnew");
        }}
      >
        Thêm người dùng
      </Button>
      {/* <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} /> */}
      <Row>
        <Col span={12}>
          {" "}
          <Search
            className="mb-5"
            placeholder="Nhập từ khóa tìm kiếm"
            enterButton={<SearchOutlined />}
            onSearch={onSearch}
            size="large"
          />
        </Col>
      </Row>

      <Table
        columns={columns}
        dataSource={data}
        onChange={onChange}
        rowKey="taiKhoan"
      />
    </div>
  );
}
