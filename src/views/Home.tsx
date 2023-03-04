import React from 'react';

function Home(){
    return <div>
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
    </div>

}

export default Home;