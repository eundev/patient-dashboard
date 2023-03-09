import React, { useState } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import annotationPlugin from "chartjs-plugin-annotation";

ChartJS.register(
CategoryScale,
LinearScale,
PointElement,
LineElement,
Title,
Tooltip,
Legend,
annotationPlugin
);
  

function ResultChart({showSelect, title}:{showSelect:boolean, title:string}){
    const options = {
        responsive: true,
        scales:{
            y:{
                min: 0,
                max: 600,
                grid: {
                    display: false
                },
            },
            x:{
                grid: {
                    display: false
                },
            },
            },
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: title
            },
            annotation: {
                annotations: {
                    maxRange: {
                        type: 'line',
                        yMin: 500,
                        yMax: 500,
                        borderColor: 'rgb(230,230,230)',
                        borderWidth: 1,
                    },
                    minRange: {
                        type: 'line',
                        yMin: 100,
                        yMax: 100,
                        borderColor: 'rgb(230,230,230)',
                        borderWidth: 1,
                    },
                    middleRange: {
                        type: 'line',
                        yMin: 200,
                        yMax: 200,
                        borderColor: 'rgb(230,230,230)',
                        borderWidth: 1,
                    },
                    bottomRange: {
                        type: 'line',
                        xMin: 0,
                        xMax: 0,
                        yMin: 0,
                        yMax: 100,
                        borderColor: 'rgb(255, 121, 135)',
                        borderWidth: 15,
                    },
                    midRange: {
                        type: 'line',
                        xMin: 0,
                        xMax: 0,
                        yMin: 100,
                        yMax: 200,
                        borderColor: 'rgb(255, 198, 98)',
                        borderRadius: 30,
                        borderWidth: 15,
                    },
                    topRange: {
                        type: 'line',
                        xMin: 0,
                        xMax: 0,
                        yMin: 200,
                        yMax: 500,
                        borderColor: 'rgb(174, 236, 115)',
                        borderRadius: 30,
                        borderWidth: 15,
                    },
                    toppestRange: {
                        type: 'line',
                        xMin: 0,
                        xMax: 0,
                        yMin: 500,
                        yMax: 600,
                        borderColor: 'rgb(255, 198, 98)',
                        borderRadius: 30,
                        borderWidth: 15,
                    },
                },
            }
        },
    };

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const data = {
        labels,
        datasets: [
            {
            label: 'Dataset 2',
            data: [null, ...['February', 'March', 'April', 'May', 'June', 'July'].map(() => faker.datatype.number({ min: 100, max: 500}))],
            borderColor: 'rgb(72,72,72)',
            backgroundColor: 'rgb(72,72,72)',
            borderWidth: 1,
            lineTension: 0.3
            },
        ],
    };

    return <div className="w-full">
            {showSelect && (
                    <div className="mb-[20px] flex">
                        <select className="w-full hover:cursor-pointer border-[1px] rounded-sm py-[7px] px-[15px] mr-[10px]">
                            <option>Perfil Bioquimico</option>
                            <option>Vitamina B12</option>
                            <option>Perfil Lipidico</option>
                            <option>Perfil Hepatico</option>
                        </select>
                        <select className="w-full hover:cursor-pointer border-[1px] rounded-sm py-[7px] px-[15px]">
                            <option>Colesterol HDL</option>
                            <option>Colesterol LDL</option>
                            <option>Transaminasa</option>
                        </select>
                    </div>
            )}
        <Line options={options} data={data} />
    </div>
}

export default ResultChart;