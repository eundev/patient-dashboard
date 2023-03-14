import React, { useState } from "react";
import { BsArrowDownShort, BsFillChatSquareTextFill } from "react-icons/bs";

function NutritionChat(){
    const [visible, setVisible] = useState(false);
    return <div>
            {visible && <div className="shadow-xl bg-white w-[400px] h-[550px] right-[40px] bottom-[90px] rounded-lg fixed">
                <div className="bg-black w-full h-[80px] px-[10px] rounded-tl-lg rounded-tr-lg flex items-center">
                    <div className="w-[50px] h-[50px] rounded-full bg-gray-100">

                    </div>
                    <p className="text-white ml-[10px]">
                        Nta. Maria Jesus Zepeda
                    </p>
                    <div className="h-[10px] w-[10px] bg-green-300 rounded-full ml-[10px]">

                    </div>
                </div>
                <div className="w-full h-[calc(100%-140px)] bg-gray-50 relative">
                    <div className="p-[10px] bg-gray-200">
                        <button className="w-full bg-examedi-blue-strong hover:bg-examedi-blue-light text-white text-sm rounded-sm px-[20px] py-[10px]">
                            Agendar Consulta
                        </button>
                    </div>
                </div>
                <div className="w-full h-[60px] bg-white border-t-[1px] rounded-bl-lg rounded-br-lg p-[10px] flex">
                </div>

            </div>}
            <button onClick={()=>{
                setVisible(!visible);
            }} className="hover:bg-gray-100 flex items-center justify-center fixed shadow-xl h-[60px] w-[60px] rounded-full bg-white border-[1px] bottom-[20px] right-[40px]">
                {!visible ? 
                    <BsFillChatSquareTextFill color="gray" size={20}/> : 
                    <BsArrowDownShort color="gray" size={20}/>
                }
            </button>
    </div>
};

export default NutritionChat;