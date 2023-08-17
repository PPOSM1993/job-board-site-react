import React from "react";
import { BiTimeFive } from 'react-icons/bi';

//import images
import logo1 from '../../assets/logo(1).png';
import logo2 from '../../assets/logo(2).png';
import logo3 from '../../assets/logo(3).png';
import logo4 from '../../assets/logo(4).png';

const Data = [
    {
        id: 1,
        image: logo1,
        title: 'Web Developer',
        time: 'Now',
        location: 'Toronto, Canada',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        company: 'Novac Linus Co.'
    },

    {
        id: 2,
        image: logo2,
        title: 'Backend Developer',
        time: 'Now',
        location: 'LA, United State',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        company: 'Telegram.'

    },

    {
        id: 3,
        image: logo3,
        title: 'Full Stack Developer',
        time: 'Now',
        location: 'Boston, MT, United States',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        company: 'Twitter.'
    },

    {
        id: 4,
        image: logo4,
        title: 'Full Stack Developer',
        time: 'Now',
        location: 'Boston, MT, United States',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        company: 'Rock Start Games, CO.'
    },

]

const Jobs = () => {
    return (
        <div>
            <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
                {
                    Data.map(({ id, image, title, time, location, desc, company }) => {
                        return (
                            <div key={id} className='group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor
            shadow-lg shadow-greyIsh-400/700 hover:shadow-lg'>
                                <span className="flex justify-between items-center gap-4">
                                    <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white uppercase">{title}</h1>
                                    <span className="flex items-center text-[#ccc] gap-1">
                                        <BiTimeFive className="" />{time}
                                    </span>
                                </span>
                                <h6 className="text-[#ccc]">{location}</h6>

                                <p className="tex-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] 
                    group-hover:text-white">
                                    {desc}
                                </p>
                                <div className="company flex items-center gap-2">
                                    <img src={image} alt="Company Logo" className="w-[10%]" />
                                    <span className='text-[14px] py-[1rem] block group-hover:text-white'>{company}</span>
                                </div>
                                <button className="uppercase cursor-pointer rounded-[10px] block p-[10px] w-full text-[14px]
                    font-semibold border-[2px] text-textColor hover:bg-white group-hover/item:text-textColor
                    group-hover:text-white">
                                    Apply Now
                                </button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Jobs