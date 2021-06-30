// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    const { payload, type } = action;

    // eslint-disable-next-line default-case
    switch (type){

        case 'START_CHART':
            return {
                ...state,
                chartData:{
                    labels: payload.x,
                    datasets: [
                        {
                            label: 'Ubers',
                            data: payload.y,
                            fill: false,
                            backgroundColor: 'rgb(255, 99, 132)',
                            borderColor: 'rgba(255, 99, 132, 0.2)',
                        },
                    ],
                }

            }
            case 'SELECT_COORDINATES':
                if(payload===1){
                    return {
                        ...state,
                        coordinates:{
                            uber:false,
                            request:true,
                        }
                    }
                }else{
                    return {
                        ...state,
                        coordinates:{
                            uber:true,
                            request:false,
                        }
                    }

                }

        case 'SELECT_PRAM':
            if(payload===1){
                return {
                    ...state,
                    pram:{
                        pram:true
                    }
                }
            }else{
                return {
                    ...state,
                    pram:{
                        pram:false
                    }
                }

            }
        case 'SELECT_TIME':
            if(payload===1){
                return {
                    ...state,
                    time:{
                        morning:true,
                        afternoon:false,
                        night:false,
                    }
                }
            }else if(payload===2){
                return {
                    ...state,
                    time:{
                        morning:false,
                        afternoon:true,
                        night:false,
                    }
                }

            }else{
                return {
                    ...state,
                    time:{
                        morning:false,
                        afternoon:false,
                        night:true,
                    }
                }

            }
        case 'GET_ID':
            return{
                ...state,
                id:payload
            }

        case 'SETTINGS_SYNC':
            return{
                ...state,
                settings:payload
            }
        case 'RUN_TERMINAL':
            return{
                ...state,
                terminallog:payload
            }

        case 'INPUT_TIME':
            return{
                ...state,
                uberData:payload.noparseado,
                UberPost:payload.parseado
            }
        case 'INPUT_REQUEST':
            return{
                ...state,
                requestData:payload.noparseado,
                RequestPost:payload.parseado
            }






    }
};

