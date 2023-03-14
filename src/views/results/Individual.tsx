import React from "react";
import Modal from 'react-modal';
import {BsDownload, BsShare} from "react-icons/bs";
import "./IndividualResult.css";
import ResultChart from "../../charts/ResultChart";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
  },
};


function IndividualResult() {
    return <>
            <div className="w-full max-w-[1100px] pt-[60px] mx-auto min-h-screen">
                <div className="w-full flex justify-between">

                    <div>
                        <h1 className="text-[rgb(72,72,72)] text-4xl font-semibold">Resultados de tus exámenes de sangre</h1>
                        <p>Realizados el Jueves 6 de Marzo, 2022 en Vitacura 3441</p>
                    </div>
                    <div className="flex items-center">
                        <button className="font-semibold text-sm bg-white border-[1px] rounded-full hover:bg-gray-100 hover:cursor-pointer py-[10px] px-[15px] text-[rgb(72,72,72)] flex items-center justify-between">
                        
                        <BsDownload/> <span className="ml-[10px]">
                        
                            Descargar Resultados
                            </span>
                        </button>
                        <button className="font-semibold text-sm flex items-center ml-[5px] rounded-full p-[10px] bg-white border-[1px] hover:bg-gray-100 hover:cursor-pointer">
                            <BsShare/>
                            <span className="ml-[10px]">
                        
                            Compartir
                            </span>
                        </button>
                    </div>
                </div>
                <div className="mt-[40px]">
                    {
                        [{name: "Perfil Bioquimico"}, {name: "Perfil Lipidico"}, {name: "Perfil Hepático"}].map((topItem, k)=>(
                            <div className="mb-[40px]">
                                <h3 className="text-1xl font-bold">{topItem.name}</h3>
                                <div className="rounded-md mt-[11px] w-full flex flex-wrap">
                                    {[{title: "Colesterol LDL"},{title: "Colesterol HDL"}, {title: "Transaminasa"}, {title: "Glucosa"}].map((item, i)=>(
                                        <div key={i} className="w-[48%] mx-[0.5%] rounded-md p-[20px] my-[5px] bg-white">
                                            <ResultChart title={item.title} showSelect={false}/>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))
                    }    
                </div>
            </div>
           
            
    </>
};

export default IndividualResult;