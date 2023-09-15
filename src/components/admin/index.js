import metsenatPro from "./img/Group (2).png";
import avatar from "./img/Avatar (5).png";
import logout from "./img/log-out 1.png";
import { useNavigate } from "react-router-dom";
import { useLocalStorageState } from "ahooks";
export const AdminPage = () => {
  const navigate = useNavigate();
  const [activAdmin, setActivAdmin] = useLocalStorageState("login", {
    defaultValue: false,
  });
  return (
    <>
      <div className="flex justify-between shadow-[0px 25px 40px 0px rgba(0, 0, 0, 0.03)] bg-[#fff]  p-2 container mx-auto items-center cursor-pointer">
        <div>
          <img src={metsenatPro} />
        </div>

        <div className="flex items-center gap-3 ">
          <div className="cursor-pointer">
            <img src={avatar} />
          </div>

          <div
            className="cursor-pointer"
            onClick={() => {
              navigate("/login");
              setActivAdmin(false);
            }}
          >
            <img src={logout} />
          </div>
        </div>
      </div>
    </>
  );
};
