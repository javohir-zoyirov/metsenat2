import { Container } from "../components/mini-components/container";
import React, { useMemo, useState } from "react";
import {
  Radio,
  Button,
  Table,
  Badge,
  Tag,
  Row,
  Col,
  Typography,
  Modal,
  Form,
  Input,
} from "antd";
import { SponsorsData } from "../data/sponsors";
import dayjs from "dayjs";
import { StyledTab } from "../components/mini-components/tab";
import { useDispatch, useSelector } from "react-redux";
import {
  EditOutlined,
  EyeOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import { SecondaryHeader } from "../components/project-components/secondary-header";
import { CrudHeader } from "../components/project-components/crud-header";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useSponsor } from "../hooks/use-sponsor";
import { editSponsor } from "../store/slices/sponsors";
const { Title } = Typography;

const EditSponsorModal = () => {
  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { sponsor, sponsorIndex } = useSponsor();
  const [form] = Form.useForm();

  const handleOk = () => {
    setSearchParams({ edit: "" });
  };

  const handleCancel = () => {
    setSearchParams({ edit: "" });
  };

  const onFinish = (values) => {
    console.log("success", values);
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
        <Form.Item label="" name="type">
          <Radio.Group>
            <Radio.Button value="jismoniy">Jismoniy shaxs</Radio.Button>
            <Radio.Button value="yuridik">Yuridik shaxs</Radio.Button>
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
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export const Sponsor = () => {
  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();
  const { sponsor, sponsorIndex } = useSponsor();

  return (
    <>
      <EditSponsorModal />
      <CrudHeader
        onBack={() => navigate("/admin/sponsors")}
        title={
          <div className={"flex items-center"}>
            <Typography className={"mr-2 text-xl font-bold"}>
              {sponsor?.fullName}
            </Typography>
            <Tag color={"success"}>Tasdiqlangan</Tag>
          </div>
        }
      />
      <Container className={"py-10 bg-[#f5f5f7] min-h-[400px]"}>
        <Row>
          <Col
            xs={{ span: 24 }}
            md={{ span: 16, offset: 4 }}
            xl={{ span: 12, offset: 6 }}
          >
            <div className={"py-7 px-3 bg-white shadow "}>
              <div className={"flex items-center justify-between"}>
                <Title level={5} className={"m-0"}>
                  Homiy haqida
                </Title>
                <Button
                  type={"primary"}
                  onClick={() => {
                    setSearchParams({ edit: true });
                  }}
                >
                  <EditOutlined /> Tahrirlash
                </Button>
              </div>
              <div>
                <Typography>{sponsor?.fullName}</Typography>
                <Typography>{sponsor?.phone}</Typography>
                <Typography>
                  {Intl.NumberFormat("ru-RU").format(sponsor?.sponsorSum)} so'm
                </Typography>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
