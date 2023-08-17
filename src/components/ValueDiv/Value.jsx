import React from "react";
import logo1 from '../../assets/logo(1).png';
import logo6 from '../../assets/logo(6).png';
import logo5 from '../../assets/logo(5).png';

const Value = () => {
    return (
        <div className="mb-[4rem] mt-[6rem]">
            <h1 className="text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-[600px] block">
                The Value that holds us true and to account</h1>


            <div className="grid gap-[10rem] grid-cols-3 items-center">
                <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
                    <div className='flex items-center gap-3'>
                        <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
                            <img src={logo1} className='w-[100%]' />
                        </div>

                        <span className='font-semibold text-textColor text-[18px]'>
                            Simplicity
                        </span>
                    </div>
                    <p className="text-[15px] uppercase text-textColor opacity-[.7] py-[1rem] font-semibold">
                        Things beinf made beautiful simple at the heart of everything we do.
                    </p>
                </div>


                <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
                    <div className='flex items-center gap-3'>
                        <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
                            <img src={logo5} className='w-[200%]' />
                        </div>

                        <span className='font-semibold text-textColor text-[18px]'>
                            Simplicity
                        </span>
                    </div>
                    <p className="text-[15px] uppercase text-textColor opacity-[.7] py-[1rem] font-semibold">
                        Things beinf made beautiful simple at the heart of everything we do.
                    </p>
                </div>

                <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
                    <div className='flex items-center gap-3'>
                        <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
                            <img src={logo6} className='w-[200%]' />
                        </div>

                        <span className='font-semibold text-textColor text-[18px]'>
                            Simplicity
                        </span>
                    </div>
                    <p className="text-[16px] uppercase text-textColor opacity-[.7] py-[1rem] font-semibold">
                        Things beinf made beautiful simple at the heart of everything we do.
                    </p>
                </div>
            </div>
            <div className="card mt-[2rem] flex justify-between bg-BlueColor p-[5rem] rounded-[10px]">
                <div>
                    <h1 className="text-blueColor text-[30px] font-bold uppercase">Ready to switch a Carrer?</h1>

                    <h2 className="text-textColor text-[25px] font-bold">Let's get started</h2>
                </div>
                <button className="border-[2px] rounded-[10px] py-[4px] px-[50px] text-[18px] font-semibold 
                text-blueColor border-blueColor hoveR:bg-white border-blueColor uppercase">
                    Get Started
                </button>
            </div>
        </div>
    )
}

export default Value