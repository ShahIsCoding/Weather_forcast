import {React,Component} from 'react';
import {Card,CardBody,CardHeader,CardFooter,Button} from 'reactstrap';
import Line_Chart from './Line_Chart';

class  Weather_Data extends Component{
    constructor(props){
        super(props);
        this.state={
            place : props.place
        };
    }
    render(){

        return (
            <div className ='container py-2'>
                <div className='row'>
                    <div className='col-md-5'>
                        <div className='row'>
                            <Card>
                                <CardHeader>Day and Date </CardHeader>
                                <CardBody>
                                    <p>
                                        HELLO INDIA
                                    
                                    </p>
                                </CardBody>
                                <CardFooter>Place</CardFooter>
                            </Card>
                        </div>
                        <div className='row'>
                            <Card>
                                <CardHeader>Tomorrow Forcaste</CardHeader> 
                                <CardBody></CardBody>   
                            </Card>    
                        </div>
                    </div>
                        <div className='col-md-7'>   
                           <Line_Chart />                
                    </div>
                </div>
            </div>
        )
    }
}
export default Weather_Data;