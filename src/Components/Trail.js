import React from 'react';
function Grid_ (){ 
    const imgs ={
        img11 :'https://images.unsplash.com/photo-1579894059380-1866b68bce6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80',
        img12 : 'https://images.unsplash.com/photo-1593078165899-c7d2ac0d6aea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80' 
    }
    return (  
        <div>
            <div className='container my_cont'>
                <div className='row'>
                    <div className='col-md r my_col r1'>
                            <div className='row my_row r11'>
                                <img src={imgs.img11}/> 
                            </div>
                            <div className='row my_row r12'>
                                <img  src={imgs.img12}/>
                            </div>
                    </div>
                    <div className='col-md r my_row r2' >
                        ROW 2
                    </div>
                    <div className='col-md r my_row r3' >
                        ROW 3
                    </div>
                    <div className='col-md r  my_row r4' >
                        ROW 4
                    </div>
                    <div className='col-md r my_row r5' >
                        ROW 5
                    </div>   
                    <div className='col-md r  my_row r6' >
                        ROW 6
                    </div>   
                </div> 
            </div>
        </div>
    )}
 
export default Grid_;