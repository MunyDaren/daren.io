import React from 'react'

const Home = () => {
const img =
  "https://tela.com.kh/wp-content/uploads/2019/05/logo-highres-vertical.png";
  return (
    <div>
      {/* Header */}
      <div className="w-[100%] h-[90px] bg-[#00a651] items-center justify-center flex gap-3">
        <img className="w-[70px] h-[80px]" src={img} alt="" />
        <h1 className="text-white font-bold text-[30px] py-3">
          តេប៉ូតេលាភ្នំក្រពើ
        </h1>
      </div>
      <div className="lg:w-[10%] w-[20%] h-[90.8vh] bg-slate-500">
        <button className="w-[100%] h-24 text-white py-2  bg-[#1E8449] hover:bg-[#229954] lg:text-[20px] md:text-[18px] text-[15px] ">
          របាយការណ៏ប្រចាំថ្ងៃ
        </button>
        <button className="w-[100%] h-24 text-white py-2  bg-[#1E8449] hover:bg-[#229954] lg:text-[20px]  md:text-[18px] text-[15px]">
          អតិថិជន
        </button>
        <button className="w-[100%] h-24 text-white py-2  bg-[#1E8449] hover:bg-[#229954] lg:text-[20px]  md:text-[18px] text-[15px]">
          បុគ្គលិក
        </button>
        <button className="w-[100%] h-24 text-white py-2  bg-[#1E8449] hover:bg-[#229954] lg:text-[20px]  md:text-[18px] text-[15px]">
          ស្តុកប្រេង
        </button>
      </div>
    </div>
  );
}

export default Home