import React from 'react';
import profile from "../../../Assests/fb-img/profile-img.jpg";

const Myday = () => {
    return (
        <div className="mt-2 grid grid-flow-col grid-cols-5 gap-2 md:justify-start justify-center md:p-0 p-2">
            <div className=" rounded-lg h-48 overflow-hidden bg-[#242526] flex flex-col">
                <div className=" overflow-hidden z-10 ">
                    {/* <div className=" h-48 z-0"> */}
                    <img
                        src={profile}
                        alt=""
                        className=" hover:transform h-48 md:pb-10 pb-14 hover:scale-105 duration-200 opacity-80"
                    />
                    {/* </div> */}

                </div>

                <div className=" z-10">
                    <p className=" text-2xl bg-[#3982E4] text-white font-bold mx-auto hover:bg-[#4271af] duration-150 -mt-5 border-2 border-[#242526] w-10 h-10 rounded-full text-center -bottom-5 left-12">
                        +
                    </p>
                </div>
                <p className=" my-auto mb-3 text-white font-bold text-center">
                    Create Story
                </p>
            </div>
            <div className=" rounded-lg relative overflow-hidden h-48">

                <div className="absolute top-2 left-2 z-10 border-2 border-[#3982E4] bg-gray-300 rounded-full overflow-hidden p-[2px]">
                    <img src={profile} alt="" className=" w-8 rounded-full hover:scale-95 duration-200 hover:opacity-90" />
                </div>

                <div className="">

                    <img
                        src={profile}
                        alt=""
                        className=" hover:transform hover:scale-105 duration-200 z-0 h-48"
                    />


                </div>
                <p className=" text-sm text-white pointer-events-none font-bold absolute bottom-2 left-2 z-10">Phyo Thu Kha</p>
            </div>
            <div className=" rounded-lg relative overflow-hidden h-48">
                <div className=" absolute top-2 left-2 z-10 border-[3px] border-[#3982E4] rounded-full">
                    <img src={profile} alt="" className=" w-8 rounded-full" />
                </div>

                <div className="">

                    <img
                        src={profile}
                        alt=""
                        className=" hover:transform hover:scale-105 duration-200 z-0 h-48"
                    />


                </div>
                <p className=" text-white text-sm pointer-events-none font-bold absolute bottom-2 left-2 z-10">Phyo Thu Kha</p>
            </div>
            <div className=" rounded-lg relative overflow-hidden h-48">
                <div className=" absolute top-2 left-2 z-10 border-[3px] border-[#3982E4] rounded-full">
                    <img src={profile} alt="" className=" w-8 rounded-full" />
                </div>

                <div className="">

                    <img
                        src={profile}
                        alt=""
                        className=" hover:transform hover:scale-105 duration-200 z-0 h-48"
                    />


                </div>
                <p className=" text-white text-sm pointer-events-none font-bold absolute bottom-2 left-2 z-10">Phyo Thu Kha</p>
            </div>
            <div className=" rounded-lg relative overflow-hidden h-48">
                <div className=" absolute top-2 left-2 z-10 border-[3px] border-[#3982E4] rounded-full">
                    <img src={profile} alt="" className=" w-8 rounded-full" />
                </div>

                <div className="">

                    <img
                        src={profile}
                        alt=""
                        className=" hover:transform hover:scale-105 duration-200 z-0 h-48"
                    />


                </div>
                <p className=" text-white text-sm pointer-events-none font-bold absolute bottom-2 left-2 z-10">Phyo Thu Kha</p>
            </div>


        </div>
    );
};

export default Myday;