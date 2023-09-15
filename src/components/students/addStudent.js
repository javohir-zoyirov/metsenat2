import {
  EditOutlined,
  EyeOutlined,
  InfoCircleOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import { Typography } from "antd";
import { AdminPage } from "../admin";
import { Button, Row, Col, Modal, Form, Input, Tag, Radio, Select } from "antd";
import { useNavigate } from "react-router-dom";
import { useStudents } from "../ahooks/usestudents";
import { useDispatch, useSelector } from "react-redux";
import { addNewStudent, editStudent } from "../store/slice/student";
export const AddStudent = () => {
  const student = useSelector((state) => state?.studentD?.students);

  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const navigate = useNavigate();
  console.log(student, "student");
  const addStudent = (values) => {
    console.log(values, "value");
    dispatch(addNewStudent({ values }));
  };

  const institut = [
    {
      label: "TDTU",
      value: "TDTU",
    },
    {
      label: "TATU",
      value: "TATU",
    },
    {
      label: "TMI",
      value: "TMI",
    },
    {
      label: "ToshDTU",
      value: "ToshDTU",
    },
  ];
  const typeStudent = [
    {
      label: "bakalavr",
      value: "bakalavr",
    },
    {
      label: "magistr",
      value: "magistr",
    },
  ];

  return (
    <div div className="bg-[#f5f5f7] container mx-auto">
      <AdminPage />
      <div className="container mx-auto bg-white py-5">
        <div
          className="flex items-center  gap-4  py-3 cursor-pointer"
          onClick={() => {
            navigate("/admin/students");
          }}
        >
          <ArrowLeftOutlined />
          <span className="text-2xl font-bold p-0 m-0">Talaba qo'shish</span>
        </div>
      </div>

      <div className=" h-screen  flex justify-center mt-20">
        <div className="">
          <Form
            form={form}
            layout="vertical"
            className="w-[790px] h-[350px]  bg-[white] p-5 rounded-xl mx-auto"
            initialValues={{
              ...student,
            }}
            onFinish={addStudent}
          >
            <div className="flex align-center justify-between">
              <Form.Item
                name={"name"}
                label="F.I.O"
                placeholder={student?.name}
                className="w-[48%]"
                rules={[
                  {
                    required: true,
                    message:
                      "F.I.Sh. (Familiya Ism Sharifingiz) ni kiritishingiz kerak",
                  },
                ]}
                tooltip="F.I.Sh. (Familiya Ism Sharifingiz) ni kiritishingiz kerak"
              >
                <Input placeholder="input placeholder" />
              </Form.Item>
              <Form.Item
                label="Telefon raqam kiriting"
                placeholder={student?.phone}
                className="w-[48%]"
                name={"phone"}
                tooltip={{
                  title: "Telefon raqam kiritishingiz kerak",
                  icon: <InfoCircleOutlined />,
                }}
                rules={[
                  {
                    required: true,
                    message: "Telefon raqam kiritishingiz kerak",
                  },
                ]}
              >
                <Input placeholder="input placeholder" />
              </Form.Item>
            </div>
            <Form.Item
              tooltip={{
                title: "O.T.M kiritilmadi",
                icon: <InfoCircleOutlined />,
              }}
              name={"universitet"}
              label="O.T.M"
              placeholder={student.universitet}
              rules={[{ required: true, message: "O.T.M kiritilmadi" }]}
            >
              <Select placeholder="" allowClear options={institut} />
            </Form.Item>
            <div className="flex align-center justify-between">
              <Form.Item
                name={"typeStudent"}
                className="w-[48%]"
                label="Talabalik turi"
                rules={[
                  { required: true, message: "Talabalik turi kiritilmadi" },
                ]}
              >
                <Select placeholder="" allowClear options={typeStudent} />
              </Form.Item>
              <Form.Item
                label="Kontrakt summa"
                className="w-[48%]"
                name={"contractAmount"}
                tooltip={{
                  title: "Kontrakt summa kiritishingiz kerak",
                  icon: <InfoCircleOutlined />,
                }}
                rules={[
                  {
                    required: true,
                    message: "Kontrakt summa kiritishingiz kerak",
                  },
                ]}
              >
                <Input placeholder="input placeholder" />
              </Form.Item>
            </div>

            <div className="text-right mt-7">
              <Button
                className="bg-blue-500 text-white font-bold"
                htmlType="submit"
              >
                + Qo'shish
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};
