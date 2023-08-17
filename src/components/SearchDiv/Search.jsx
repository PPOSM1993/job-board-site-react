import React from "react";
import { AiOutlineSearch, AiOutlineCloseCircle } from 'react-icons/ai';

import { BsHouseDoor } from 'react-icons/bs';

import { CiLocationOn } from 'react-icons/ci';

const Search = () => {
    return (
        <>
            <div className='searchDiv grid gap-10 bg-greyIsh rounded-[10px] p-[3rem]'>
                <form action='' method=''>

                    <div className="firstDiv flex justify-between items-center rounded-[8px]
                    gap-[10px] bg-white p-5 shadow-lg shadow-greyIsh-700">

                        <div className="flex gap-2 items-center">

                            <AiOutlineSearch className="text-[25px] icon" />
                            <input className="bg-transparent text-blue-500 focus:outline-none w-[100%] uppercase" placeholder="Search Job" />
                            <AiOutlineCloseCircle className="text-[30px] icon text-[#a5a6a6] 
                            hover:text-textColor" />
                        </div>

                        <div className="flex gap-2 items-center">

                            <BsHouseDoor className="text-[25px] icon" />
                            <input className="bg-transparent text-blue-500 focus:outline-none w-[100%] uppercase" placeholder="Search Job by Company" />
                            <AiOutlineCloseCircle className="text-[30px] icon text-[#a5a6a6] hover:text-textColor" />
                        </div>

                        <div className="flex gap-2 items-center">

                            <CiLocationOn className="text-[25px] icon" />
                            <input className="bg-transparent text-blue-500 focus:outline-none w-[100%] uppercase" placeholder="Search Job by Location" />
                            <AiOutlineCloseCircle className="text-[30px] icon text-[#a5a6a6] hover:text-textColor" />
                        </div>

                        <button className="bg-blueColor h-full p-3 px-10 rounded-[10px] text-white uppercase
                        cursor:pointer hover:bg-blue-500">Search</button>



                    </div>

                </form>

                <div className="secDiv flex items-center gap-10 justify-center">
                    <div className="singleSearch flex items-center gap-2">
                        <label htmlFor="relevance" className="text-[#808080] font-semibold uppercase">Sort by:</label>
                        <select name="" id="relevance" className="bg-white rounded-[5px] px-4 py-1 uppercase">
                            <option value="">Relevance</option>
                            <option value="">Inclusive</option>
                            <option value="">Start Whit</option>
                            <option value="">Contains</option>
                        </select>
                    </div>

                    <div className="singleSearch flex items-center gap-2">
                        <label htmlFor="type" className="text-[#808080] font-semibold uppercase">Type:</label>
                        <select name="" id="type" className="bg-white rounded-[5px] px-4 py-1 uppercase">
                            <option value="">Full Time</option>
                            <option value="">Pat Time</option>
                            <option value="">Remote</option>
                            <option value="">Contract</option>
                        </select>
                    </div>

                    <div className="singleSearch flex items-center gap-2">
                        <label htmlFor="level" className="text-[#808080] font-semibold uppercase">Level:</label>
                        <select name="" id="level" className="bg-white rounded-[5px] px-4 py-1 uppercase">
                            <option value="">Junior</option>
                            <option value="">Senior</option>
                            <option value="">Intermediate</option>
                            <option value="">Advocate</option>
                        </select>
                    </div>


                    <span className="text-[#a1a1a1] uppercase cursor-pointer">Clear all</span>

                </div>





            </div>
        </>
    )
}

export default Search