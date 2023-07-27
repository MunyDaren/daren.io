import React from "react";
const ReportInfo = () => {
 const img =
   "https://tela.com.kh/wp-content/uploads/2019/05/logo-highres-vertical.png";
  return (
    <div>
      {/* head Logo/Name*/}
      <div className="w-[100%] h-[90px] bg-[#00a651] items-center justify-center flex gap-3 ">
        <img className="w-[70px] h-[80px]" src={img} alt="" />
        <h1 className="text-white font-bold text-[30px] py-3">
          តេប៉ូតេលាភ្នំក្រពើ
        </h1>
      </div>
      {/* Body */}
      <div className="w-[100%] h-[90.8vh] bg-[#1E8449] flex items-center justify-center">
        {/* Report table */}
        <div className="w-[410px] h-[440px] bg-[#76767625] border-2 border-black rounded-[30px] items-center">
          <h1 className="text-[25px] text-[#ffffff] font-bold py-2 text-center">
            របាយការណ៏ប្រចាំងថ្ងៃ
          </h1>
          <br />
          {/* ប្រេងសាំង */}
          <h1 className="text-[20px] text-[#ffffff] ml-2">ប្រេងសាំង</h1>
          <input
            type="text"
            className="w-[300px] h-[40px]  text-[20px] ml-12 mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1"
            placeholder="ចំនួន"
          />
         
          <br />
          {/* ប្រេងម៉ាស៊ូត */}
          <h1 className="text-[20px] text-[#ffffff] ml-2">ប្រេងម៉ាស៊ូត</h1>
          <input
            type="text"
            className="w-[300px] h-[40px]  text-[20px] ml-12 mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1"
            placeholder="ចំនួន"
          />
          <br />
          {/* ហ្គាស់ */}
          <h1 className="text-[20px] text-[#ffffff] ml-2">ហ្គាស់</h1>
          <input
            type="text"
            className="w-[300px] h-[40px]  text-[20px] ml-12 mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1"
            placeholder="ចំនួន"
          />
          <br />
          <button className="w-[100px] h-[40px] hover:bg-[#c91e1e]   bg-[#d21717] px-2 py-2 text-center text-white rounded-[10px] ml-36">
            បញ្ចូល
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportInfo;
