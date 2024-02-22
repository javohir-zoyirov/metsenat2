import metsenatImage from "./img/Group (2).png";
import clubImage from "./img/Frame 4.png";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Input, Space } from "antd";
import React, { useEffect, useState } from "react";
import checkImage from "./img/Group 18784.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useLocalStorageState } from "ahooks";
export const LoginPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activAdmin, setActivAdmin] = useLocalStorageState("login", {
    defaultValue: false,
  });
  const [parol, setParol] = useState("");
  const [login, setLogin] = useState("");

  const submit = () => {
    if (login === "javoh" && parol === "javoh003") {
      setActivAdmin(true);
    }
  };

  useEffect(() => {
    if (activAdmin == true) {
      navigate("/admin");
    } else {
      navigate("/login");
    }
  }, [activAdmin]);

  return (
    <>
      <div
        className="w-12/12 flex items-center justify-center bg-[#f5f5f5]"
        style={{ height: "100vh" }}
      >
        <div className="p-4  w-80  bg-white rounded-[12px] ">
          <div className=" items-center gap-3 flex justify-center">
            <div className="w-40 h-2">
              <img src={metsenatImage} className="w-full" alt="image" />
            </div>
            <div className="w-14 h-4">
              <img src={clubImage} className="w-full" alt="club" />
            </div>
          </div>
          <div className="mt-10 p-4">
            <h1 className="mb-6 text-[24px] font-semibold">Kirish</h1>
            <Space direction="vertical">
              <label>Log in</label>
              <Input
                onChange={(e) => setLogin(e.target.value)}
                placeholder="javoh"
                className="w-full"
              />
              <label>Parol</label>
              <Input
                onChange={(e) => setParol(e.target.value)}
                placeholder="javoh003"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </Space>
            <div className="w-60  mt-5 ">
              <img src={checkImage} className="w-full" />
            </div>
            <button
              onClick={() => {
                submit();
              }}
              class=" mt-5  bg-[#2E5BFF] rounded-[6px]  w-60  p-2 text-white"
            >
              Kirish
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
