import React, { useEffect, useState } from 'react';
import { types } from '../../typeStyles';
import useMediaQuery from "@mui/material/useMediaQuery";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import { Bar, } from 'react-chartjs-2';
//import faker from 'faker';

interface Props {
    data?: Data[];
    title?: string;
    type?: string;
}
interface Data {
    label: string;
    data: number;

}



export const GraphicBar: React.FunctionComponent<Props> = (props) => {
    const { data, title = 'title', type = 'water' } = props;
    /*     const [datos, setDatos] = useState<Data>();
        const [options, setOptions] = useState<Options>(); */



    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const

            },

            title: {
                display: false,
                text: title,
            },
        },
        scales: {
            y:
            {
                min: 0,
                max: 230,
                stepSize: 5,
            }
        }
    };



    const dataFunc = () => {
        let etiquetas: string[] = [];
        let datos: number[] = [];
        if (data !== undefined) {
            data.forEach(data => {
                etiquetas.push(data.label);
                datos.push(data.data);
            })
        }
        ChartJS.register(
            CategoryScale,
            LinearScale,
            BarElement,
            Title,
            Tooltip,
            Legend
        );


        return {

            labels: etiquetas,
            datasets: [
                {
                    label: 'Especialidades',
                    data: datos,
                    backgroundColor: types(type),

                },

            ],



        }
    }
    const matchesMobile = useMediaQuery("(max-width:687px)");

    return (
        <div style={{
            backgroundColor: 'white',
            height: `${matchesMobile ? 'auto' : '100%'}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: `${matchesMobile ? '100%' : 'auto'}`,
            minWidth: '10rem'
        }}>
            {data !== undefined &&
                <Bar data={dataFunc()} options={options} />
            }
        </div >
    )
}

