// eslint-disable-next-line no-unused-vars
import React,{useReducer} from "react";
import SettingsReducer from "./SettingsReducer"
import SettingsContext from "./SettingsContext";
import axios from 'axios';
import Swal from 'sweetalert2'

const SettingsState=(props)=>{
    const initialState={
        id:null,
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

    const getId=async()=>{
        try{
            const id= await axios.get('http://localhost:8080/id')
            dispatch({type:'GET_ID',payload:id.data})
        }catch (error){
            Swal.fire({
                title: 'Ocurrio un error',
                text: error,
                icon: 'error',
                confirmButtonText: 'Ta bien'
            })
        }
    }



    const start=async()=>{
        //const id= await axios.get('http://localhost:8080/id')
        //console.log(id)
        //const result= await axios.get(`http://localhost:8080/result/${id.data}`)
        const result= await axios.get(`http://localhost:8080/result/${state.id}`)
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
            id:state.id,
            getId,
            selectedCoordinates,
            selectedTime,
            selectedPram,
            start,
            dispatch
        }}>
            {props.children}
        </SettingsContext.Provider>
    )

}

export default SettingsState;

