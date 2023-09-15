import React, { useState } from "react";
import { Radio, Button, Table, Badge, Tag } from "antd";
import eye from "./img/eye 1.png";
import dayjs from "dayjs";
import { ModalSponsor } from "./sponsor";
import { useLocation, useNavigate, NavLink, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export const Sponsors = ({ search, filter }) => {
  let homiylarData = useSelector((state) => state.sponsors.sponsors);
  console.log(homiylarData);
  const params = useParams();
  const navigate = useNavigate();

  const location = useLocation();

  const columnsSponsors = [
    {
      title: "#",
      dataIndex: "id",
      key: "id",
      render: (value, row) => {
        return (
          <span
            style={{ color: "#1D1D1F", fontSize: "15px", fontWeight: "bold" }}
          >
            {value}
          </span>
        );
      },
    },
    {
      title: "F.I.SH.",
      dataIndex: "fullName",
      key: "fullName",
      render: (value, row) => {
        return (
          <span
            style={{ color: "#1D1D1F", fontWeight: "bold", fontSize: "15px" }}
          >
            {value}
          </span>
        );
      },
    },
    {
      title: "Tel.Raqami",
      dataIndex: "phone",
      key: "phone",
      render: (value, row) => {
        return (
          <span style={{ fontSize: "14px", color: "#1D1D1F", fontWeight: "" }}>
            {value}
          </span>
        );
      },
    },
    {
      title: "Homiylik summasi",
      dataIndex: "sponsorSum",
      key: "sponsorSum",
      render: (value, row) => {
        return (
          <span
            style={{ fontSize: "14px", color: "#1D1D1F", fontWeight: "bold" }}
          >
            {value}{" "}
            <span
              style={{ color: "#B2B7C1", fontSize: "14px", fontWeight: "bold" }}
            >
              {" "}
              UZS
            </span>
          </span>
        );
      },
    },
    {
      title: "Sarflangan summa",
      dataIndex: "paid",
      key: "paid",
      render: (value, row) => {
        return (
          <span
            style={{ fontSize: "14px", color: "#1D1D1F", fontWeight: "bold" }}
          >
            {value}
            <span
              style={{ color: "#B2B7C1", fontSize: "14px", fontWeight: "bold" }}
            >
              {" "}
              UZS
            </span>
          </span>
        );
      },
    },
    {
      title: "Sana",
      dataIndex: "date",
      key: "date",
      render: (value, row) => dayjs(row.date).format("DD.MM.YYYY"),
    },
    {
      title: "Holati",
      dataIndex: "status",
      key: "status",
      render: (value, row) => (
        <Tag
          color={
            (value == "Yangi" && "processing") ||
            (value == "Moderatsiyada" && "warning") ||
            (value == "Bekor qilingan" && "error") ||
            (value == "Tasdiqlangan" && "success")
          }
        >
          {value}
        </Tag>
      ),
    },
    {
      title: "Amallar",
      dataIndex: "",
      key: "id",
      render: (value, row) => (
        <button onClick={() => navigate(`/sponsors/${value.id}`)}>
          <img src={eye} />
        </button>
      ),
    },
  ];

  const searchData = homiylarData.filter((item) =>
    search === ""
      ? item
      : item.fullName.toLowerCase().includes(search.toLowerCase())
  );

  const filterData = searchData.filter((item) =>
    filter === ""
      ? true
      : item.status.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <>
      <div className="container mt-5">
        <Table
          dataSource={filterData}
          columns={columnsSponsors}
          pagination={{
            pageSize: 10,
          }}
        />
      </div>
    </>
  );
};
