import React from "react";
import { useNavigate } from "react-router-dom";
import image5 from "../Assets/image_processing20210903-16890-gqy7t.gif";
interface Info {
  Salary: any;
  Saving: any;
}
export default function Salary() {
  const [salary, setSalary] = React.useState<Info>({
    Salary: "",
    Saving: "",
  });
  const nav = useNavigate();
  const Add = () => {
    const sum: any = salary.Salary - salary.Saving;
    localStorage.setItem("rest", sum);
    localStorage.setItem("salary", salary.Salary);
    localStorage.setItem("saving", salary.Saving);

    nav("/Overview");
  };
  return (
    <div className=" h-screen bg-[#B2E0E0] flex justify-center items-center">
      <div className="lg:h-[45rem] lg:w-[90rem] max-sm:h-auto max-sm:w-[35rem] bg-white justify-center flex flex-col items-center">
        <div className=" lg:w-4/12 mt-5">
          <img src={image5} alt="" />
        </div>

        <div className="lg:w-9/12  justify-center flex flex-row lg:gap-40 max-sm:flex-col max-sm:gap-10 items-center">
          <div className="lg:w-1/2 transform mb-5 border-b-2 bg-transparent flex flex-col text-lg duration-300 focus-within:border-black">
            <label className="lg:text-2xl sm:text-lg font-bold mb-10 max-sm:mb-4 text-center">
              Salary
            </label>
            <input
              className="w-full border-noneml-2 mb-5 bg-transparent outline-none placeholder:italic focus:outline-none text-center"
              onChange={(e) => {
                setSalary({ ...salary, Salary: e.target.value });
              }}
              placeholder=" ex: 10000"
              type="number"
            />
          </div>

          <div className="lg:w-1/2 transform  mb-5 border-b-2 bg-transparent flex flex-col text-lg duration-300 focus-within:border-black">
            <label className="lg:text-2xl sm:text-lg font-bold mb-10 max-sm:mb-4 text-center">
              Saving Amount
            </label>
            <input
              className="w-full border-noneml-2 mb-5 bg-transparent outline-none placeholder:italic focus:outline-none text-center"
              onChange={(e) => {
                setSalary({ ...salary, Saving: e.target.value });
              }}
              placeholder=" ex: 500"
              type="number"
            />
          </div>
        </div>
        <button
          onClick={Add}
          className="bg-[#B2E0E0] hover:bg-teal-600 hover:scale-90 lg:w-40 lg:h-10 max-sm:rounded-full max-sm:text-lg max-sm:w-2/5 max-sm:mt-10 max-sm:mb-5 lg:rounded-3xl mt-20  lg:text-lg font-bold text-white"
        >
          Lets Start
        </button>
      </div>
    </div>
  );
}
