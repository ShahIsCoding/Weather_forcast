import React from 'react';
import {Line} from 'react-chartjs-2';

function Line_Chart(){
    
    const data = {
        labels : ['jan','feb','marc','apr','amy'],
        datasets :[
            {   fill: false,
                label : 'Sales for 2020',
                data : [3,2,2,1,5]
            }
        ]
    }

    // const config = {
    //     type: 'line',
    //     data: data,
    //     options: {

    //       hoverRadius: 12,
    //       hoverBackgroundColor: 'yellow',
    //       interaction: {
    //         mode: 'nearest',
    //         intersect: false,
    //         axis: 'x'
    //       },
    //       
    //     },
    //   };
    const options ={
        title : {
            display : true,
            text : 'Line Chart'
        },
        animations: {
            radius: {
              duration: 400,
              easing: 'linear',
              loop: (context) => context.active
            }
          },
          plugins: {
                    tooltip: {
                      enabled: false
                    }
                  },
        scales : {
            yAxes :[
                {   ticks:{
                    min:0,
                    max:6,
                    stepSize : 1
                    }
                }
            ],
        }
    }
    return  <Line data={data} options={ options} />
}

export default Line_Chart;