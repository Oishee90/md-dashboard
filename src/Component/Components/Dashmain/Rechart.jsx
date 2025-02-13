/* eslint-disable react/no-unknown-property */
import { LuUsersRound } from "react-icons/lu";
import { BiTrendingUp } from "react-icons/bi";
import { CiBag1 } from "react-icons/ci";
import { BarChart, Bar, XAxis, YAxis, Tooltip, AreaChart, Area, ResponsiveContainer } from "recharts";

const Rechart = () => {
    return (
        <div className="grid grid-cols-3 gap-4">
            {/* card-1 */}
            <div className=" px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
                <div className="flex items-center justify-around">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                        <path d="M26.8315 16.3456C28.924 16.0516 30.535 14.2576 30.5395 12.0841C30.5395 9.94208 28.978 8.16608 26.9305 7.83008" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M29.5928 21.376C31.6193 21.679 33.0338 22.3885 33.0338 23.851C33.0338 24.8575 32.3678 25.5115 31.2908 25.9225" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M17.8299 21.9961C13.0089 21.9961 8.89136 22.7266 8.89136 25.6441C8.89136 28.5601 12.9834 29.3116 17.8299 29.3116C22.6509 29.3116 26.7669 28.5886 26.7669 25.6696C26.7669 22.7506 22.6764 21.9961 17.8299 21.9961Z" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M17.8299 17.832C20.9934 17.832 23.5584 15.2685 23.5584 12.1035C23.5584 8.94 20.9934 6.375 17.8299 6.375C14.6664 6.375 12.1014 8.94 12.1014 12.1035C12.0894 15.2565 14.6349 17.8215 17.7879 17.832H17.8299Z" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M8.82714 16.3456C6.73314 16.0516 5.12364 14.2576 5.11914 12.0841C5.11914 9.94208 6.68064 8.16608 8.72814 7.83008" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M6.06576 21.376C4.03926 21.679 2.62476 22.3885 2.62476 23.851C2.62476 24.8575 3.29076 25.5115 4.36776 25.9225" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <div className="flex flex-col items-center gap-3">
                        <h1 className="text-xl open-sns font-bold">10</h1>
                        <p className="text-base open-sns text-[#8CAB91] ">Total user</p>
                    </div>

                </div>

            </div>

            {/* card-2 */}
            <div className=" px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
                <div className="flex items-center justify-around">
                    <LuUsersRound className="w-8 h-7" />

                    <div className="flex flex-col items-center gap-3">
                        <h1 className="text-[14px] open-sns font-regular text-[#8CAB91] "><span className="text-2xl text-[#364636] font-bold">$1k </span>  70%</h1>

                        <p className="text-base open-sns text-[#8CAB91] ">Total  subscriber</p>
                    </div>

                </div>

            </div>
            {/* card-3 */}
            <div className=" px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
                <div className="flex items-center justify-around">
                    <CiBag1 className="w-8 h-7" />

                    <div className="flex flex-col items-center gap-3">

                        <div className="relative"><h1 className="text-[14px] open-sns font-regular text-[#8CAB91] "><span className="text-2xl text-[#364636] font-bold">$1k </span> 70%</h1>
                            <BiTrendingUp className="absolute top-[-14%] right-[-5%] w-[43px] h-[22px] text-[#34C759]" /></div>
                        <p className="text-base open-sns text-[#8CAB91] ">Total  subscriber</p>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Rechart;
