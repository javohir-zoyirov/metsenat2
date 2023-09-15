import React, { useState } from "react";
import {
  Radio,
  Button,
  Table,
  Badge,
  Tag,
  Modal,
  Form,
  Input,
  Select,
} from "antd";
import dayjs from "dayjs";
import eye from "../sponsors/img/eye 1.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const Students = ({ search, filter }) => {
  // console.log(search);
  const navigate = useNavigate();
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
      dataIndex: "name",
      key: "name",
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
      title: "Talabalik turi",
      dataIndex: "typeStudent",
      key: "typeStudent",
    },
    {
      title: "O.T.M",
      dataIndex: "universitet",
      key: "universitet",
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
      title: "Ajratilingan summa",
      dataIndex: "allocatedAmount",
      key: "allocatedAmount",
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
      title: "Kontrakt miqdori",
      dataIndex: "contractAmount",
      key: "contractAmount",
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
      title: "Amallar",
      dataIndex: "",
      key: "id",
      render: (value, row) => (
        <Button
          className="border-none"
          onClick={() => {
            navigate(`/students/${value.id}`);
          }}
        >
          <img src={eye} />
        </Button>
      ),
    },
  ];

  const [modalOpen, setmodalOpen] = useState(false);

  const showModal = () => {
    setmodalOpen(true);
  };

  const handleOk = () => {
    setmodalOpen(false);
  };

  const handleCancel = () => {
    setmodalOpen(false);
  };
  const formRef = React.useRef(null);
  const onGenderChange = (value) => {
    switch (value) {
      case "male":
        formRef.current?.setFieldsValue({
          note: "Hi, man!",
        });
        break;
      case "female":
        formRef.current?.setFieldsValue({
          note: "Hi, lady!",
        });
        break;
      case "other":
        formRef.current?.setFieldsValue({
          note: "Hi there!",
        });
        break;
      default:
        break;
    }
  };

  let studentsData = useSelector((state) => state.studentD.students);

  const searchData = studentsData.filter((item) =>
    search === ""
      ? true
      : item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="text-end">
        <button
          onClick={() => navigate(`/addStudent`)}
          className="bg-blue-500 text-white px-5 py-2 rounded-md"
        >
          + Talaba qo'shish
        </button>
      </div>
      <div className="container mt-5">
        <Table
          dataSource={searchData}
          columns={columnsSponsors}
          pagination={{
            pageSize: 10,
          }}
        />
      </div>
    </>
  );
};
