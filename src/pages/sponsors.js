import { Container } from "../components/mini-components/container";
import React, { useEffect, useMemo, useState } from "react";
import { Radio, Button, Table, Badge, Tag } from "antd";
import { SponsorsData } from "../data/sponsors";
import dayjs from "dayjs";
import { StyledTab } from "../components/mini-components/tab";
import { useSelector } from "react-redux";
import { EyeOutlined } from "@ant-design/icons";
import { SecondaryHeader } from "../components/project-components/secondary-header";
import { useNavigate } from "react-router-dom";

export const Sponsors = () => {
  const navigate = useNavigate();
  const sponsors = useSelector((state) => state.sponsors.sponsors);

  const columnsSponsors = useMemo(
    () => [
      {
        title: "#",
        dataIndex: "id",
        key: "id",
        render: (value, row) => <span className={"font-bold"}>{value}</span>,
      },
      {
        title: "F.I.SH.",
        dataIndex: "fullName",
        key: "fullName",
      },
      {
        title: "Tel.Raqami",
        dataIndex: "phone",
        key: "phone",
      },
      {
        title: "Homiylik summasi",
        dataIndex: "sponsorSum",
        key: "sponsorSum",
      },
      {
        title: "Sarflangan summa",
        dataIndex: "paid",
        key: "paid",
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
        render: (value, row) => <Tag color="success">{value}</Tag>,
      },
      {
        title: "Amallar",
        dataIndex: "id",
        key: "id",
        render: (value, row) => (
          <Button onClick={() => navigate(`/admin/sponsors/${value}`)}>
            <EyeOutlined />
          </Button>
        ),
      },
    ],
    [navigate]
  );

  return (
    <>
      <SecondaryHeader tab={"sponsors"} />
      <Container>
        <Table
          dataSource={sponsors}
          columns={columnsSponsors}
          pagination={{
            pageSize: 5,
          }}
        />
      </Container>
    </>
  );
};
