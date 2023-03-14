import React from 'react';
import { navs } from '../helpers/navs';
import {Link} from 'wouter';
import ExamediLogo from '../icons/ExamediLogo';
import {BiUser} from "react-icons/bi";

function DashboardLayout({children}:{children: any}) {
    return (
        <div className="w-full max-h-screen bg-gray-100">
            <div className="h-[70px] bg-white w-full border-b-[1px] shadow-lg flex justify-between items-center px-[30px]">
                <div>
                    <ExamediLogo/>
                </div>
                <Link to="/settings">
                    <div className="hover:bg-gray-200 hover:cursor-pointer w-[50px] h-[50px] bg-gray-100 rounded-full mr-[20px] flex items-center justify-center">
                        <BiUser size={20} color="gray"/>
                    </div>
                </Link>
            </div>
            {/*
            <div className="h-[45px] bg-examedi-blue-dark w-full text-white flex items-center justify-center">
                <div>
                    <span className="underline font-bold">
                        Descarga la app hoy
                    </span>— 
                    <span className="font-[500]">
                    cuida tu salud, desde tu bolsillo
                    </span>
                </div>
            </div>
            */}
            <div className="w-full flex overflow-auto">
                <div className="bg-white w-[325px] border-r-[1px] shadow-lg pt-[50px]">
                    <div className="text-3xl font-[600] text-gray-400 pl-[30px]">
                        Tu Examedi
                    </div>
                    <div className="mt-[20px] px-[15px]">
                        {navs.map((item, i)=>(
                            <Link to={item.link} key={i}>
                                <div key={i} className="pl-[20px] font-[500] hover:cursor-pointer hover:bg-gray-100 rounded-[15px] h-[40px] w-full flex items-center">
                                    <div>

                                    {item.displayName}
                                    </div>
                                   
                                
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="w-full bg-[#f2f6fa] h-[calc(100vh-70px)] pb-[200px] overflow-auto">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;