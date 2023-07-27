import { useState } from "react";
import { Link, useHref } from "react-router-dom";
import Home from "./Home";
import { useNavigate } from "react-router-dom";
import ReportInfo from "./ReportInfo";
const img =
  "https://tela.com.kh/wp-content/uploads/2019/05/logo-highres-vertical.png";
const Login = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleLogin = () => {
    if (password === "0987654321mnbvcxz" && name === "daren") {
  
      navigate("/home");
    } else if (password === "1122" && name === "dara") {
      navigate("/home")
    } else if (password === "1234") {
      navigate("/Report")
    } else {
      alert("Incorrect username or password");
    }
  };

  return (
    <div className="w-[100%] h-[100vh] bg-[#00a650] items-center flex justify-center">
      {/* LoginBox */}
      <div className="w-[470px] h-[470px] bg-[#ffffff9f] rounded-[30px] flex flex-col justify-center items-center ">
        <img className="w-[70px] h-[80px]" src={img} alt="" />
        <h1 className="text-[40px]">សូមស្វាគមន៏</h1> <br />
        {/* Name */}
        <h1 className="text-[20px] ">ឈ្មោះ</h1>
        <input
          type="text"
          className="w-[300px] h-[40px]  text-[20px] mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1"
          placeholder="បញ្ចូលឈ្មោះ"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        {/* password */}
        <h1 className="text-[20px]">លេខកូដ</h1>
        <input
          type="password"
          className="w-[300px] h-[40px]  text-[20px] mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1"
          placeholder="លេខសម្ងាត់"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        {/* Button */}
        <button
          className="w-[100px] h-[40px] bg-[#d21717] px-2 py-2 text-center text-white rounded-[10px]"
          onClick={handleLogin}
        >
          បញ្ចូល
        </button>
      </div>
    </div>
  );
};

export default Login;
