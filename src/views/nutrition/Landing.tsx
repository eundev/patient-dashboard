import React, { useState } from "react";

import {BsFillChatSquareTextFill} from "react-icons/bs";
import NutritionChat from "../../components/nutrition/Chat";
import ResultChart from "../../charts/ResultChart";

function NutritionLanding(){
    const [isChatting, setIsChatting] = useState(false);
    const [status, setStatus] = useState("fully-active")

    function toggleChat(){
        setIsChatting(!isChatting);
        return true;
    }

    return <div className="relative px-[20px]">
            <NutritionChat/>
            <div className="w-full max-w-[1100px] pt-[60px] mx-auto">
                <div className="flex items-center">
                    <h1 className="text-[rgb(72,72,72)] text-4xl font-semibold">Nutrición</h1>
                    <div className="ml-[10px] inline-block rounded-full bg-white border-[1px] font-bold text-sm px-[10px] py-[5px]">
                        PRO
                    </div>
                </div>
                <p>Encuentra todo lo que necesitas para llevar una alimentación sana</p>
                <div className="max-w-[1100px] mx-auto p-[30px] bg-white my-[22px] rounded-md">
                        <div className="w-full rounded-xl grid grid-cols-5 gap-4 rounded-md">
                            <div className="col-span-3 h-[360px] rounded-md">
                                <ResultChart showSelect={false} title="Peso (kg)"/>
                            </div>
                            <div className="col-span-2 h-[300px] rounded-md grid grid-rows-2 gap-4 px-10">
                            <div>
                                <h1 className="text-xl text-gray-600 font-bold">Objetivo</h1>
                                <p>Mejorar mi energía durante el día</p>
                            </div>
                            <div>
                                <h1 className="text-xl text-gray-600 font-bold">Próxima revisión</h1>
                                <p>En 14 días más</p>
                            </div>
                            <div>
                                <h1 className="text-xl text-gray-600 font-bold">Nutricionista a cargo</h1>
                                <p>Maria Jesus Zepeda</p>
                            </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="max-w-[1100px] mx-auto p-[30px] bg-white mt-[44px] rounded-md">
                        <h3 className="text-xl font-semibold">
                            Observaciones
                        </h3>
                        <div className="w-full rounded-md mt-[44px] grid grid-cols-5 bg-gray-100 border-[1px]">
                            <div className="h-[100px] p-[20px] col-span-1">
                                <div className="mx-auto h-[100px] w-[100px] rounded-full bg-gray-300">

                                </div>
                                <p className="text-center font-semibold text-xs mt-[11px]">
                                    Nta. Maria Jesus Zepeda
                                </p>
                                <p className="text-center">
                                    14/03/2023
                                </p>
                            </div>
                            <div className="p-[20px] col-span-4 bg-white">
                                <p>
                                    A continuación destaco lo más importante para poder lograr bajar 600g exactos para la pelea.
                                    <br/>
                                    <br/>
                                    1. Hay que recortar aproximadamente 200kcal, por lo que la dieta total queda en 2000 kcal. Para esto debemos sacar el jugo de fruta (aunque sea natural), ya que siempre es mejor comer la fruta entera (esta tiene menor peak glicémico y aporta menos calorías). Cambiar el tipo de cereal por uno sin azúcar (enlinea, tika, vivo) y moderar la cantidad a máximo 3/4 taza. En la lista de supermercado hay cereales recomendados.
                                    <br/>
                                    <br/>
                                    2. Es importante medir los alimentos en las medidas ya sea caseras o en gramos, porque eso hace la diferencia de 200 kcal.
                                    <br/>
                                    <br/>
                                    3. No consumir más que 1/2 palta al día y 2 cdtas de aceite, evitar la mantequilla y mayonesa, recorté las calorías de esto.
                                    <br/>
                                    <br/>
                                    4. Las proteínas son 150g de alguna carne en el día.
                                </p>
                            </div>
                        </div>
                    </div>
                <div className="max-w-[1100px] mx-auto p-[30px] bg-white mt-[44px] rounded-md">
                    <h3 className="text-xl font-semibold">
                        Plan de Alimentación
                    </h3>
                    <p>Máximo 1800 calorias al día, en horarios regulares.</p>
                    <div className="mt-[33px] divide-y">
                        {[{name: "Desayuno", time: "7:30", information: [
                            {label: "Opción 1", description: "1 taza de té o café con leche descremada y endulzante + 2 rebanadas de pan de molde integral + 1 rebanada de jamón de pavo."},
                            {label: "Opción 2"},
                            {label: "Opción 3"},
                            {label: "Opción 4"},
                            {label: "Opción 5"},
                            {label: "Opción 6"},
                            {label: "Opción 7"},
                            {label: "Opción 8"},
                        ]}, {name: "Almuerzo", time: "13:30", information: [
                            {label: "Entrada"},
                            {label: "Plato Principal"},
                            {label: "Postre"},
                            {label: "Bebestible"},
                        ]}, {name: "Once", time: "17:00", information: [
                            {label: "Opción 1"},
                            {label: "Opción 2"},
                            {label: "Opción 3"},
                            {label: "Opción 4"},
                            {label: "Opción 5"},
                            {label: "Opción 6"},
                            {label: "Opción 7"},
                            {label: "Opción 8"},
                        ]}, {name: "Cena", time: "20:30", information: [
                            {label: "Opción 1"},
                            {label: "Opción 2"},
                            {label: "Postre"},
                            {label: "Bebestible"},
                        ]}].map((item, i)=>(
                            <div key={i} className="inline-block w-full rounded-md py-[22px]">
                                <p className="font-bold">
                                    {item.name}
                                </p>
                                <p>
                                    {item.time}
                                </p>
                                <div className="mt-[11px]">
                                   {item.information?.map((info, k)=>(
                                    <div key={k} className="inline-block mr-[11px]">
                                        <button className="px-[22px] w-full border-[1px] py-[11px] mb-[5.5px] rounded-sm hover:bg-gray-200" key={k}>
                                            {info.label}
                                        </button>
                                    </div>
                                   ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-[44px]">
                    <div className="w-full flex items-center justify-between">
                        <div>
                            <h3 className="text-xl font-semibold">
                            Lista de compras de la semana
                            </h3>
                            <i>Actualizado hace 3 días</i>
                        </div>
                        <div>
                            Powered by Jumbo.cl
                        </div>
                    </div>
                    <div className="mt-[22px] w-full rounded-md flex flex-wrap justify-between">
                        {[
                            {category: "Frutas y Verduras Propias", name: "Platano Granel", price: "$745", image: "https://jumbo.vtexassets.com/arquivos/ids/424556-360-360?width=360&height=360&aspect=true"},
                            {category: "Frutas y Verduras Propias", name: "Platano Granel", price: "$1.179", image: "https://jumbo.vtexassets.com/arquivos/ids/424489-360-360?width=360&height=360&aspect=true"},
                            {category: "Frutas y Verduras Propias", name: "Platano Granel", price: "$2.990", image: "https://jumbo.vtexassets.com/arquivos/ids/181566-360-360?width=360&height=360&aspect=true"},
                            {category: "Frutas y Verduras Propias", name: "Platano Granel", price: "$880", image: "https://jumbo.vtexassets.com/arquivos/ids/415954-360-360?width=360&height=360&aspect=true"},
                            {category: "Frutas y Verduras Propias", name: "Platano Granel", price: "$1.000", image: "https://jumbo.vtexassets.com/arquivos/ids/415971-360-360?width=360&height=360&aspect=true"},
                            {category: "Frutas y Verduras Propias", name: "Platano Granel", price: "$590", image: "https://jumbo.vtexassets.com/arquivos/ids/416123-360-360?width=360&height=360&aspect=true"},
                            {category: "Frutas y Verduras Propias", name: "Platano Granel", price: "$990", image: "https://jumbo.vtexassets.com/arquivos/ids/416214-360-360?width=360&height=360&aspect=true"},
                            {category: "Frutas y Verduras Propias", name: "Platano Granel", price: "$1.190", image: "https://jumbo.vtexassets.com/arquivos/ids/181558-360-360?width=360&height=360&aspect=true"},
                            {category: "Frutas y Verduras Propias", name: "Platano Granel", price: "$745", image: "https://jumbo.vtexassets.com/arquivos/ids/424553-360-360?width=360&height=360&aspect=true"},
                            {category: "Frutas y Verduras Propias", name: "Platano Granel", price: "$745", image: "https://jumbo.vtexassets.com/arquivos/ids/470309-360-360?width=360&height=360&aspect=true"},
                            {category: "Frutas y Verduras Propias", name: "Platano Granel", price: "$745", image: "https://jumbo.vtexassets.com/arquivos/ids/415955-360-360?width=360&height=360&aspect=true"},
                            {category: "Frutas y Verduras Propias", name: "Platano Granel", price: "$745", image: "https://jumbo.vtexassets.com/arquivos/ids/415957-360-360?width=360&height=360&aspect=true"},
                        ].map((item, i)=>(
                            <div key={i} className="w-[260px] mb-[20px] p-[20px] shadow-xs border-gray-200 bg-white inline-block rounded-lg">
                                <div className="w-full p-[20px]">
                                    <img src={item.image} className="h-[150px] w-auto mx-auto"/>
                                </div>
                                <div className="mt-[22px]">
                                    <p className="text-xs text-gray-600">{item.category}</p>
                                    <h2>{item.name}</h2>
                                    <p className="">
                                        {item.price}
                                    </p>
                                    <button className="rounded-lg w-full bg-green-400 hover:bg-green-500 text-white py-[5px] mt-[22px]">
                                        Agregar al carrito
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
}

export default NutritionLanding;