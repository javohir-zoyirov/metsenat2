import { Typography } from "antd";
import { RechartsExample } from "./RechartsExample";
import img1 from "./img/$1.png";
import img2 from "./img/$2.png";
import img3 from "./img/$3.png";
import { useSelector } from "react-redux";

export const Dashboard = () => {
  const student = useSelector((state) => state.studentD.students);
  const sponsor = useSelector((state) => state.sponsors.sponsors);

  let studentSumma = 0;
  let sponsorSumma = 0;

  student.map((item) => {
    studentSumma += item.contractAmount;
  });

  sponsor.map((item) => {
    sponsorSumma += item.sponsorSum;
  });

  return (
    <div className="bg-[#f5f5f7] pb-10">
      <div className="flex align-center  justify-between w-[1000px] mx-auto my-7">
        <div className="flex align-center gap-4 bg-white p-3 mt-3 rounded-[8px] ps-6  pe-20">
          <div className="w-[48px] h-[48px]">
            <img src={img1} className="object-cover" />
          </div>

          <div>
            <Typography className="text-xs  text-[#7A7A9D]">
              Jami to'langan summa
            </Typography>
            <Typography>
              <span className="text-[#2E384D] text-xl font-bold">
                {sponsorSumma}
              </span>{" "}
              <span className="text-[#B2B7C1] text-xl font-bold">UZS</span>
            </Typography>
          </div>
        </div>

        <div className="flex align-center gap-4 bg-white p-3 mt-3 rounded-[8px] ps-6  pe-20">
          <div className="w-[48px] h-[48px]">
            <img src={img2} className="object-cover" />
          </div>

          <div>
            <Typography className="text-xs  text-[#7A7A9D]">
              Jami so'ralgan summa
            </Typography>
            <Typography>
              <span className="text-[#2E384D] text-xl font-bold">
                {studentSumma}
              </span>{" "}
              <span className="text-[#B2B7C1] text-xl font-bold">UZS</span>
            </Typography>
          </div>
        </div>

        <div className="flex align-center gap-4 bg-white p-3 mt-3 rounded-[8px] ps-6  pe-20">
          <div className="w-[48px] h-[48px]">
            <img src={img3} className="object-cover" />
          </div>

          <div>
            <Typography className="text-xs  text-[#7A7A9D]">
              To'lanishi kerak summa
            </Typography>
            <Typography>
              <span className="text-[#2E384D] text-xl font-bold">
                {studentSumma - sponsorSumma}
              </span>{" "}
              <span className="text-[#B2B7C1] text-xl font-bold">UZS</span>
            </Typography>
          </div>
        </div>
      </div>
      <RechartsExample />
    </div>
  );
};
