// eslint-disable-next-line no-unused-vars
import React,{useReducer,useCallback} from "react";
import SettingsReducer from "./SettingsReducer"
import SettingsContext from "./SettingsContext";
import axios from 'axios';
import Swal from 'sweetalert2'


const SettingsState=(props)=>{
    const initialState={
        uberData:'',
        requestData:'',
        UberPost:null, //validacion
        RequestPost:null,//validacion
        terminallog:[],
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

    const handleUberdata =(e)=>{

        const parseoDia=(texto)=>{
            let arr = texto.split("\n").map(r => r.split(" "));

            function objectify(array) {
                return array.reduce(function(p, c) {
                    p[c[0]] = c[1];
                    return p;
                }, {});
            }

            const objeto= objectify(arr)

            var result = Object.keys(objeto).map(e => ({x: e, y: objeto[e]}))

            return result
        }
        //console.log(parseoDia(e))
        dispatch({type:'INPUT_TIME',payload:{parseado:parseoDia(e),noparseado:e}})


    }

    const handleRequestData =(e)=>{
        const ParseoRequest=(texto)=>{
            let arr = texto.split("\n").map(r => r.split(" "));
            var object=[]
            arr.map((actual,index,array)=>{
                object.push({
                    "xi": actual[0],
                    "yi": actual[1],
                    "xf": actual[3],
                    "yf": actual[4],
                    "t": actual[6]

                })
            })


            return object

        }
        //console.log(ParseoRequest(e))

        dispatch({type:'INPUT_REQUEST',payload:{parseado:ParseoRequest(e),noparseado:e}})


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

    const runTerminal=async()=>{
        const fetch= await axios.get(`http://localhost:8080/log/${state.id}`);

        const log=fetch.data["log"]

        //const list=log.split('\n')
        // setInterval(function() {
        //     for(var i=0; i<list.length; i++){
        //         console.log(list[i])
        //     }
        // }, 5000);

        console.log(log)
        //console.log(state.RequestPost)
        //dispatch({type:'RUN_TERMINAL',payload:array})

    }

    const getId=async()=>{
        const id= await axios.get('http://localhost:8080/id')
        dispatch({type:'GET_ID',payload:id.data})
        // try{
        //     const id= await axios.get('http://localhost:8080/id')
        //     dispatch({type:'GET_ID',payload:id.data})
        // }catch (error){
        //     Swal.fire({
        //         title: 'Ocurrio un error',
        //         text: 'No hay conexion a internet',
        //         icon: 'error',
        //         confirmButtonText: 'Ta bien'
        //     })
        // }
    }

    const syncSettings=async()=>{
        dispatch({type:'SETTINGS_SYNC',payload:true})
        if(state.UberPost===null && state.RequestPost===null){
            //Si no hay ubers recibidos solo se envia los parametros
            const res = axios.post(`http://localhost:8080/config/${state.id}`, {
                "run_type": (state.time.morning===true?0:state.time.afternoon===true?1:state.time.night===true:2),
                "pram":state.pram.pram,
            });
        }
        if(state.UberPost!==null){
            const res = axios.post(`http://localhost:8080/config/${state.id}`, {
                "run_type":4,
                "pram":state.pram.pram,
                "ubers":state.UberPost,
                "request":state.RequestPost
            });
        }else{

        }

    }



    const start=async()=>{

        try{

            await syncSettings()

            // if(state.pram.pram!=null){
            //     await syncSettings()
            //
            // }
            const result= await axios.get(`http://localhost:8080/result/${state.id}`)
            //console.log(result)
            console.log(`ìd actual: ${state.id}`)
            dispatch({type:'START_CHART',payload: {
                    x:result.data.x,y:result.data.y
                }})
            await runTerminal()
        }catch (error){
            Swal.fire({
                title: 'Ocurrio un error',
                text: error,
                icon: 'error',
                confirmButtonText: 'Ta bien'
            })
        }
    }



    return(
        <SettingsContext.Provider value={{
            coordinates: state.coordinates,
            uberData: state.uberData,
            requestData:state.requestData,
            time:state.time,
            pram:state.pram,
            chartData:state.chartData,
            terminallog:state.terminallog,
            id:state.id,
            UberPost:state.UberPost,
            RequestPost:state.RequestPost,
            handleRequestData,
            getId,
            selectedCoordinates,
            selectedTime,
            selectedPram,
            start,
            handleUberdata,
            dispatch
        }}>
            {props.children}
        </SettingsContext.Provider>
    )

}

export default SettingsState;

