import React from "react";
import ResultChart from "../../charts/ResultChart";

function IndividualResult() {
    return <>
            <div className="w-full max-w-[1100px] pt-[60px] mx-auto min-h-screen">
                <div>
                    <h1 className="text-[rgb(72,72,72)] text-4xl font-semibold">Resultados de tus exámenes de sangre</h1>
                    <p>Realizados el Jueves 6 de Marzo, 2022 en Vitacura 3441</p>
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