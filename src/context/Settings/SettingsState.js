// eslint-disable-next-line no-unused-vars
import React,{useReducer} from "react";
import SettingsReducer from "./SettingsReducer"
import SettingsContext from "./SettingsContext";
import axios from 'axios';

const SettingsState=(props)=>{
    const initialState={
        settings:false, //Valida si se han recibido settiongs, caso contrario inicia todo random
        coordinates:{
            uber:null,
            request:null,
        },
        time:{
            morning:null,
            afternoon:null,
            night:null,
        },
        pram:{
            pram:null
        },
        chartData:{
            labels: ['0'],
            datasets: [
                {
                    label: 'Ubers',
                    data: [0],
                    fill: false,
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgba(255, 99, 132, 0.2)',
                },
            ],
        }
    }

    const [state, dispatch] = useReducer(SettingsReducer, initialState);

    const selectedTime=(value)=>{
        dispatch({type:'SELECT_TIME',payload:value})
    }

    const selectedCoordinates=(value)=>{
        dispatch({type:'SELECT_COORDINATES',payload:value})
    }

    const selectedPram=(value)=>{
        dispatch({type:'SELECT_PRAM',payload:value})
    }

    const getTime=()=>{}

    const getPram=()=>{}

    const start=async()=>{
        const id= await axios.get('http://localhost:8080/id')
        //console.log(id)
        const result= await axios.get(`http://localhost:8080/result/${id.data}`)
        //console.log(result)
        console.log(state)
        dispatch({type:'START_CHART',payload: {
            x:result.data.x,y:result.data.y
            }})
    }



    return(
        <SettingsContext.Provider value={{
            coordinates: state.coordinates,
            time:state.time,
            pram:state.pram,
            chartData:state.chartData,
            selectedCoordinates,
            selectedTime,
            selectedPram,
            getTime,
            getPram,
            start,
            dispatch
        }}>
            {props.children}
        </SettingsContext.Provider>
    )

}

export default SettingsState;

