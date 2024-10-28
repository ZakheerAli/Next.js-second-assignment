export default function Home() {
  return (
    <div className="w-screen h-full relative flex justify-center  bg-darkBlue ">
      <nav className="w-[1200px] h-[91px] flex items-center   bg-darkBlue justify-evenly absolute left-24">
        <div className="w-[187px] h-[58px] flex justify-center items-center  bg-darkBlue">
          <h3 className="text-[#FFFFFF] font-montserrat text-2xl font-bold">BrandName</h3>
        </div>
        <div className="w-[815px] h-[58px] flex items-center justify-between  bg-darkBlue">
          <div className="w-[275px] h-[24px] flex items-center justify-evenly  bg-darkBlue">
            <a href="#" className="text-[#FFFFFF] text-sm font-bold font-montserrat  hover:border-b-4 hover:border-[#23A6F0] ">Home</a>
            <a href="#" className="text-[#FFFFFF] text-sm font-bold font-montserrat  hover:border-b-4 hover:border-[#23A6F0]">Product</a>
            <a href="#" className="text-[#FFFFFF] text-sm font-bold font-montserrat  hover:border-b-4 hover:border-[#23A6F0]">Pricing</a>
            <a href="#" className="text-[#FFFFFF] text-sm font-bold font-montserrat  hover:border-b-4 hover:border-[#23A6F0]">Contact</a>
          </div>
          <div className="w-[189px] h-[52px] flex items-center justify-between  bg-darkBlue">
            <button className="text-[#FFFFFF] text-sm font-bold font-montserrat hover:text-[#23A6F0] hover:font-extrabold">Login</button>
            <button className="text-[#FFFFFF] text-sm font-bold rounded-md font-montserrat w-[110px] h-[52px] bg-[#23A6F0] hover:bg-[#FFFFFF] hover:text-[#23A6F0] hover:font-extrabold ">JOIN US</button>
          </div>
        </div>
      </nav>
      <div className="h-[900px] w-[1046px] flex items-center justify-center  flex-col relative top-[75px]   gap-5  bg-darkBlue">
        <div className="w-[699px]  bg-darkBlue h-[496px] relative top-0 gap-10 flex justify-center flex-col items-center ">
          <div className="w-[77px] h-[24px]  bg-darkBlue flex justify-center items-center ">
            <h5 className="text-[#23A6F0]  font-montserrat text-base font-bold">Welcome</h5>
          </div>
          <div className="w-[542px] h-[160px] flex items-center text-center  bg-darkBlue">
            <h1 className=" text-[#FFFFFF] text-[58px] font-montserrat font-bold tracking-wide ">Selling on the internet like a pro</h1>
          </div>
          <div className="w-[536px] h-[60px] flex items-center text-center  bg-darkBlue">
            <h3 className="text-xl text-[#FFFFFF] font-medium font-montserrat tracking-wide">We know how large objects will act, but things on a
              small scale just do not act that way.</h3>
          </div>
          <div className="w-[365px] h-[52px]  bg-darkBlue flex items-center justify-evenly gap-[10px]">
            <button className="w-[193px] h-[52px]  text-[#FFFFFF] rounded-md bg-[#23A6F0] font-montserrat text-sm font-bold hover:bg-[#FFFFFF] hover:text-[#23A6F0] hover:font-extrabold hover:border-2 hover:border-[#23A6F0]">Get Quote Now</button>
            <button className="w-[193px] h-[52px] rounded-md text-[#23A6F0] font-montserrat text-sm font-bold  bg-darkBlue border-2 border-[#23A6F0] hover:font-extrabold hover:border-2 hover:border-[#FFFFFF] hover:text-[#FFFFFF]">Learn More</button>
          </div>
        </div>
        <div className="w-[1046px] h-[292px] flex justify-between bg-darkBlue ">
          <div className="w-[328px] h-[292px] cursor-pointer px-[35px] flex flex-col py-[40px] gap-5 bg-white hover:h-[300px] hover:w-[335]">
            <div className="w-[70px] h-[76px] px-[22px] py-[19px] rounded-md bg-[#FFDCD1]"></div>
            <div className="w-[135px] h-[24px]">
              <h5 className="text-base font-bold font-montserrat">training Courses</h5>
            </div>
            <div className="w-[50px] h-[2px] bg-[#E74040]"></div>
            <div className="w-[222px] h-[60px]">
              <p className="text-sm font-normal font-montserrat text-[#737373]">The gradual accumulation of information about atomic and small-scale behaviour...</p>
            </div>
          </div>
          <div className="w-[328px] h-[292px] px-[35px] py-[40px] flex flex-col gap-5 bg-[#FFFFFF] cursor-pointer hover:h-[300px] hover:w-[335]">
            <div className="w-[70px] h-[76px] bg-[#B9EAA8]  px-[22px] py-[19px] rounded-md"></div>
            <div className="w-[168px] h-[24px]">
              <h5 className="text-base font-bold font-montserrat">2,769 online courses</h5>
            </div>
            <div className="w-[50px] h-[2px] bg-[#E74040]"></div>
            <div className="w-[222px] h-[60px]">
              <p className="text-sm font-normal font-montserrat text-[#737373]">The gradual accumulation of information about atomic and small-scale behaviour...</p>
            </div>
          </div>
          <div className="w-[328px] h-[292px] px-[35px] py-[40px] gap-5 flex flex-col bg-[#23A6F0] cursor-pointer hover:h-[300px] hover:w-[335]">
            <div className="w-[70px] h-[76px] bg-[#FFFFFF] px-[22px] py-[19px]  rounded-md"></div>
            <div className="w-[135px] h-[24px]">
              <h5 className="text-base font-bold font-montserrat text-[#FFFFFF]">training Courses</h5>
            </div>
            <div className="w-[50px] h-[2px] bg-[#FFFFFF]"></div>
            <div className="w-[222px] h-[60px]">
              <p className="text-sm font-normal font-montserrat text-[#FFFFFF]">The gradual accumulation of information about atomic and small-scale behaviour...</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
