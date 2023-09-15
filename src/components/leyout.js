import { NavLink, Outlet } from "react-router-dom";
import { AdminPage } from "./admin";
import { Button, Radio, Space, Divider, Select, Input } from "antd";
const { Option } = Select;

export const Leyout = ({ setSearch, setFilter }) => {
  const handleChange = (value) => {
    setFilter(value);
  };
  return (
    <div div className="container mx-auto">
      <AdminPage />
      <div className="flex items-center  mx-auto mb-3">
        <div className="container mx-auto mt-3 text-xs">
          <Radio.Group>
            <Radio.Button className="px-10">
              <NavLink to={"dashboard"}>DASHBOARD</NavLink>
            </Radio.Button>
            <Radio.Button className="px-10">
              <NavLink to={"sponsors"}>HOMIYLAR</NavLink>
            </Radio.Button>
            <Radio.Button className="px-10">
              <NavLink to={"students"}>TALABALAR</NavLink>
            </Radio.Button>
          </Radio.Group>
        </div>

        <div className="mt-3 flex items-center gap-3 ">
          <Input
            placeholder="izlash"
            onChange={(e) => setSearch(e.target.value)}
          />

          <Select
            defaultValue="Filter"
            style={{ width: 200 }}
            onChange={handleChange}
            placeholder="Filter"
          >
            <Option value="Yangi">Yangi</Option>
            <Option value="Tasdiqlangan">Tasdiqlangan</Option>
            <Option value="Bekor qilingan">Bekor qilingan</Option>
            <Option value="Moderatsiyada">Moderatsiyada</Option>
          </Select>
        </div>
      </div>
      <Outlet />
    </div>
  );
};
