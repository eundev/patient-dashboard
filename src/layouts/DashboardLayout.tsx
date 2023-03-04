import React from 'react';
import { navs } from '../helpers/navs';
import {Link} from 'wouter';
import ExamediLogo from '../icons/ExamediLogo';

function DashboardLayout({children}:{children: any}) {
    return (
        <div className="w-full min-h-screen bg-gray-100 px-[15px]">
            <div className="h-[80px] bg-white w-full border-b-[1px] shadow-lg flex items-center pl-[30px]">
                <div>
                    <ExamediLogo/>
                </div>
            </div>
            <div className="h-[45px] bg-examedi-blue-dark w-full"></div>
            <div className="w-full flex min-h-screen">
                <div className="min-h-screen bg-white w-[325px] border-r-[1px] shadow-lg pt-[50px]">
                    <div className="text-3xl font-[600] text-gray-400 pl-[30px]">
                        Tu Perfil
                    </div>
                    <div className="mt-[20px] px-[15px]">
                        {navs.map((item, i)=>(
                            <Link to={item.link}>
                                <div key={i} className="pl-[20px] font-[500] hover:cursor-pointer hover:bg-gray-100 rounded-[20px] h-[40px] w-full flex items-center">{item.displayName}</div>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="w-full bg-[#f2f6fa]">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;