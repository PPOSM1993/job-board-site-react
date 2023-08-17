import React from "react";

const Navbar = () => {
    return (
        <>
            <div className='navBar flex justify-between items-center p-[3rem]'>
                <div className='logoDiv cursor-pointer'>
                    <h1 className='logo uppercase text-[25px] text-blueColor'>
                        <strong className='logo'>Job</strong>Search
                    </h1>
                </div>

                <div className='menu flex gap-8 uppercase'>
                    <li className='menuList text-[#6f6f6f] hover:text-blueColor'>Jobs</li>
                    <li className='menuList text-[#6f6f6f] hover:text-blueColor'>Companies</li>
                    <li className='menuList text-[#6f6f6f] hover:text-blueColor'>About</li>
                    <li className='menuList text-[#6f6f6f] hover:text-blueColor'>Contact</li>
                    <li className='menuList text-[#6f6f6f] hover:text-blueColor'>Blog</li>
                    <li className='menuList text-[#6f6f6f] hover:text-blueColor'>Login</li>
                    <li className='menuList text-[#6f6f6f] hover:text-blueColor'>Register</li>
                </div>

            </div>


        </>
    )
}

export default Navbar

//text-blue-500