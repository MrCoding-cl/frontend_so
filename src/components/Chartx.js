import React, {useContext} from 'react';
import { Line } from 'react-chartjs-2';

import SettingsContext from "../context/Settings/SettingsContext";



const options = {
    animation: false,
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
    },
};

const Chartx = (props) => {
    const {chartData} = useContext(SettingsContext);
    return (
        <>
            <div className='header'>
                <h1 className='title'>Line Chart</h1>
                <div className='links'>
                    <a
                        className='btn btn-gh'
                        href=''
                    >
                        Backend data
                    </a>
                </div>
            </div>
            <Line data={chartData} options={options}/>
            
        </>
    )

}

export default Chartx;