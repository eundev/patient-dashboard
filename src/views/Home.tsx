import React, { useState } from 'react';
import ResultChart from '../charts/ResultChart';

function CompleteSurveyPrompt(){
    return <div>
        <h3>Llena tu perfil hist</h3>
    </div>
}

function Home(){
    const [active, setActive] = useState(false);
    return <div>
          <div className="p-1 absolute bg-gray-100 w-full right-0">
            {active ? "Usuario con agenda existente": "Usuario sin agenda"}: <button className="rounded-sm bg-examedi-blue-strong hover:examedi-blue-light text-white px-2 py-[1px]" onClick={()=>{ setActive(!active) } }>Toggle</button>
          </div>
            {!active && (<>
                <div className="w-full bg-white min-h-[400px] flex flex-col items-center justify-center">
                    <h1 className="text-[rgb(72,72,72)] text-3xl font-semibold">Bienvenido a Examedi</h1>
                    <div className="mt-[40px] flex items-center">
                        <div className='h-[40px] w-[40px] rounded-full bg-gray-200'/>
                        <p className="text-gray-500 font-[500] ml-[10px]">Ian Lee, CEO & Co-Founder</p>
                    </div>
                    <p className="max-w-[500px] text-center mt-5 text-gray-500">
                        Este es tu perfil de salud con Examedi. Descubre cómo se podrían ver tus resultados más abajo. Una vez que te atiendas, te ayudaremos con sugerencias y recomendaciones para mejorar tu salud.
                    </p>
                </div>
                <div className="py-[60px] px-[150px]">
                    <div className="bg-white w-full h-[300px] rounded-xl">
                        
                    </div>
                </div>
            </>)}
            {active && (<>
                <div className="w-full max-w-[1100px] pt-[60px] mx-auto">
                    <h1 className="text-[rgb(72,72,72)] text-4xl font-semibold">Tu perfil de paciente</h1>
                    <p>Revisa aquí tus últimos resultados</p>
                </div>
                <div className="max-w-[1100px] mx-auto p-[30px] bg-white my-[22px] rounded-md">
                    <div className="w-full rounded-xl grid grid-cols-5 gap-4 rounded-md">
                        <div className="col-span-3 h-[360px] rounded-md">
                            <ResultChart/>
                        </div>
                        <div className="col-span-2 h-[300px] rounded-md grid grid-rows-2 gap-4">
                           <div>
                            <h1 className="text-[58px] text-gray-600">35.5%</h1>
                            <p>de nuestros pacientes tienen el Colesterol HDL bajo</p>
                           </div>
                           <div>
                            <h1 className="text-[58px] text-gray-600">85%</h1>
                            <p>mejoran sus resultados antes del siguiente examen</p>
                           </div>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-white py-[50px] rounded-md mt-[40px]">
                    <div className="w-full max-w-[1100px] mx-auto">

                        <div>
                            <h3 className="text-3xl font-[500]">
                            🍏 Evaluamos tu dieta, gratis
                            </h3>
                            <p>
                                Sube fotos de tu comida y nuestra nutricionista te dará recomendaciones
                            </p>
                        </div>
                        <div className="mt-[20px]">
                            {[1,2,3,4,5,6].map((item, i)=>(
                                <div className="bg-gray-100 inline-block mr-[15px] rounded-md h-[150px] w-[150px]">
                                    
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </>)}
        <div className="w-full min-h-[500px] mt-[40px]">
            <div className="text-center">
                <h2 className="text-3xl font-[500]">
                    Aprende más de tu salud
                </h2>
                <p className="mt-[20px]">Revisa contenido escrito por nuestros expertos en salud</p>
            </div>
            <div className="flex w-full justify-between max-w-[1100px] mx-auto mt-[30px]">
                {[1,2,3].map((item, i)=>(
                    <div className="rounded-md w-[32%] bg-white h-[200px]">
                    </div>
                ))}
            </div>
        </div>
    </div>

}

export default Home;