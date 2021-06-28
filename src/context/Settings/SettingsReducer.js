// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    const { payload, type } = action;

    // eslint-disable-next-line default-case
    switch (type){
        case 'START_CHART':
            return {
                ...state,
                chartData:{
                    labels: [0],
                    datasets: [
                        {
                            label: 'Ubers',
                            data: payload,
                            fill: false,
                            backgroundColor: 'rgb(255, 99, 132)',
                            borderColor: 'rgba(255, 99, 132, 0.2)',
                        },
                    ],
                }

            }
    }
};

