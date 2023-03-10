import React from "react";

function NutritionLanding(){
    return <div>
         <div className="w-full max-w-[1100px] pt-[60px] mx-auto">
            <div className="flex items-center">
                <h1 className="text-[rgb(72,72,72)] text-4xl font-semibold">Nutrición</h1>
                <div className="ml-[10px] inline-block rounded-full bg-white border-[1px] font-bold text-sm px-[10px] py-[5px]">
                    PRO
                </div>
            </div>
            <p>Encuentra todo lo que necesitas para llevar una alimentación sana</p>
            <div className="max-w-[1100px] mx-auto p-[30px] bg-examedi-blue-strong mt-[22px] rounded-lg h-[40px]">

            </div>
            <div className="max-w-[1100px] mx-auto p-[30px] bg-white mt-[22px] rounded-md h-[200px]">

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
                        Powered by Cencosud S.A
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