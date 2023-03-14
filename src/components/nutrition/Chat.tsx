import React, { useState } from "react";
import { BsFillChatSquareTextFill } from "react-icons/bs";

function NutritionChat(){
    const [visible, setVisible] = useState(false);
    return visible ? <div className="shadow-xl bg-white w-[400px] h-[550px] right-[40px] bottom-[40px] rounded-lg fixed">
            <div className="bg-black w-full h-[80px] rounded-lg">

            </div>
        </div> : <button onClick={()=>{
            setVisible(true);
        }} className="hover:bg-gray-100 flex items-center justify-center fixed shadow-xl h-[70px] w-[70px] rounded-full bg-white border-[1px] bottom-[40px] right-[40px]">
        <BsFillChatSquareTextFill color="gray" size={24}/>

    </button>
};

export default NutritionChat;