import React, { useState } from "react";
import { AdminPage } from "../admin";
import { useSponsor } from "../ahooks/usesponsor";
import {
  Button,
  Row,
  Col,
  Typography,
  Modal,
  Form,
  Input,
  Tag,
  Radio,
  Select,
} from "antd";
import {
  EditOutlined,
  EyeOutlined,
  InfoCircleOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import { useNavigate, useSearchParams } from "react-router-dom";
import user from "./img/Group 20057.png";
import footer from "./img/clip-work-searches 1.png";
import { useDispatch, useSelector } from "react-redux";
import { editSponsor } from "../store/slice/sponsors";
import "./sponsor.css";
import { StudentData } from "../data/studentData";
const { Option } = Select;
export const ModalSponsor = () => {
  const navigate = useNavigate();
  const { sponsor, sponsorIndex } = useSponsor();
  let [searchParams, setSearchParams] = useSearchParams();
  return (
    <div className="container mx-auto">
      <EditSponsorModal />
      <AdminPage />
      <div className="flex  items-center gap-6 p-3">
        <button
          className="text-[#28293D]"
          onClick={() => {
            navigate("/admin/sponsors");
          }}
        >
          <ArrowLeftOutlined />
        </button>
        <Typography className="m-0 text-[#28293D] text-[24px] font-bold">
          {sponsor.fullName}
        </Typography>
        <Tag
          className="m-0 "
          color={
            (sponsor.status == "Yangi" && "processing") ||
            (sponsor.status == "Moderatsiyada" && "warning") ||
            (sponsor.status == "Bekor qilingan" && "error") ||
            (sponsor.status == "Tasdiqlangan" && "success")
          }
        >
          {sponsor.status}
        </Tag>
      </div>
      <div className={"py-10 bg-[#f5f5f7] min-h-[400px] "}>
        <Row>
          <Col
            xs={{ span: 24 }}
            md={{ span: 16, offset: 4 }}
            xl={{ span: 12, offset: 6 }}
          >
            <div className={"py-7 px-3 bg-white shadow rounded-xl"}>
              <div className={"flex items-center justify-between"}>
                <Typography className="m-0 font-bold text-2xl text-[#28293D]">
                  Homiy haqida
                </Typography>
                <Button
                  className="bg-[#EDF1FD] text-[#3365FC]"
                  type={"primary"}
                  onClick={() => {
                    setSearchParams({ edit: true });
                  }}
                >
                  <EditOutlined /> Tahrirlash
                </Button>
              </div>
              <div className="">
                <div className="flex items-center gap-4 mt-7">
                  <img src={user} />
                  <Typography className="text-sm font-bold text-[#212121]">
                    {sponsor?.fullName}
                  </Typography>
                </div>
                <div className="flex items-center gap-x-32 mt-7">
                  <div>
                    <Typography className="text-[#B5B5C3] text-xs">
                      Telefon raqam
                    </Typography>
                    <Typography className="text-[#212121] mt-2">
                      {sponsor?.phone}
                    </Typography>
                  </div>
                  <div>
                    <Typography className="text-[#B5B5C3] text-xs">
                      Homiylik summasi
                    </Typography>
                    <Typography className="text-[#212121] mt-2">
                      {Intl.NumberFormat("ru-RU").format(sponsor?.sponsorSum)}{" "}
                      so'm
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <div className=" w-[820px] height-[614px] mt-20 mx-auto">
          <img src={footer} />
        </div>
      </div>
    </div>
  );
};

const EditSponsorModal = () => {
  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { sponsor, sponsorIndex } = useSponsor();
  const [form] = Form.useForm();

  const statusData = [
    {
      label: "Tasdiqlangan",
      value: "Tasdiqlangan",
    },
    {
      label: "Moderatsiyada",
      value: "Moderatsiyada",
    },
    {
      label: "Yangi",
      value: "Yangi",
    },
    {
      label: "Bekor qilingan",
      value: "Bekor qilingan",
    },
  ];

  const contract = [
    {
      label: 3000000,
      value: 3000000,
    },
    {
      label: 4000000,
      value: 4000000,
    },
    {
      label: 5000000,
      value: 5000000,
    },
    {
      label: 6000000,
      value: 6000000,
    },
  ];

  const payment = [
    {
      label: "Naqt",
      value: "Naqt",
    },
    {
      label: "Bank O'tkazmasi",
      value: "Bank O'tkazmasi",
    },
  ];
  const handleOk = () => {
    setSearchParams({ edit: "" });
  };

  const handleCancel = () => {
    setSearchParams({ edit: "" });
  };

  const onFinish = (values) => {
    dispatch(
      editSponsor({
        data: { ...sponsor, ...values },
        index: sponsorIndex,
      })
    );
  };
  return (
    <Modal
      title="Homiy"
      open={searchParams.get("edit")}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Form
        form={form}
        layout="vertical"
        initialValues={{
          ...sponsor,
        }}
        onFinish={onFinish}
      >
        <Form.Item className="w-full" name="condition">
          <Radio.Group>
            <Radio.Button className="px-[75px]" value="jismoniy">
              Jismoniy shaxs
            </Radio.Button>
            <Radio.Button className="px-[75px]" value="yuridik">
              Yuridik shaxs
            </Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="F.I.Sh. (Familiya Ism Sharifingiz)"
          rules={[
            {
              required: true,
              message:
                "F.I.Sh. (Familiya Ism Sharifingiz) ni kiritishingiz kerak",
            },
          ]}
          tooltip="F.I.Sh. (Familiya Ism Sharifingiz) ni kiritishingiz kerak"
          name={"fullName"}
        >
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item
          label="Telefon raqam"
          name={"phone"}
          tooltip={{
            title: "Telefon raqam kiritishingiz kerak",
            icon: <InfoCircleOutlined />,
          }}
          rules={[
            { required: true, message: "Telefon raqam kiritishingiz kerak" },
          ]}
        >
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item
          tooltip={{
            title: "Holati kiritilmadi",
            icon: <InfoCircleOutlined />,
          }}
          name={"status"}
          label="Holati"
          rules={[{ required: true, message: "Holat kiritilmadi" }]}
        >
          <Select
            placeholder={sponsor.status}
            allowClear
            options={statusData}
          ></Select>
        </Form.Item>
        <Form.Item
          name={"sponsorSum"}
          label="Homiylik summasi"
          rules={[{ required: true, message: "Homiylik summasi kiritilmadi" }]}
        >
          <Select
            placeholder={sponsor.sponsorSum}
            options={contract}
            allowClear
          ></Select>
        </Form.Item>
        <Form.Item
          name={"gender"}
          label="To'lov turi "
          rules={[{ required: true, message: "To'lov turi kiritilmadi" }]}
        >
          <Select placeholder="Naqt" options={payment} allowClear></Select>
        </Form.Item>
        <Form.Item>
          <Button
            className="bg-blue-500 text-white font-bold"
            htmlType="submit"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};
