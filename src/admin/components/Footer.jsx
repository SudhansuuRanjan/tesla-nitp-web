import { Link } from "react-router-dom";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="bg-[#0b0b0b] text-sm w-[100%] mt-[10rem]  ">
      <div className="mb-10 w-[90%] grid gap-2 md:gap-4 lg:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 m-[auto] items-start justify-items-center "></div>

      <div className="w-[90%] m-[auto] bg-gray-800 h-[1px]"></div>
      <div className="m-[auto] pb-8 pt-5 text-gray-600 font-medium text-sm flex flex-col md:flex-row lg:flex-row justify-between items-center w-[90%]">
        <p>© {year} T.E.S.L.A NITP. All Rights Reserved.</p>
        <p>
          Designed & Developed by{" "}
          <a
            style={{ textDecoration: "none" }}
            className="font-medium text-blue-500"
            href="#"
          >
            <span className="text-sky-500">Sudhanshu Ranjan</span>
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Footer;
