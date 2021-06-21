import {React,Component} from 'react';
import Header  from './Components/Header';
import Footer from './Components/Footer';
import Weather_Data from './Components/Weather';

class App extends Component {
    
    constructor(props){
        super(props);
        this.state ={
            tosearch : ""
        }
        this.onSearchChange= this.onSearchChange.bind(this)
    }

    onSearchChange(event){

        console.log(this.state.tosearch)
        this.setState({
            tosearch : event.target.value
        });
    }

    
    render(){
        return(
            <div>
                <Header onSearch={this.onSearchChange}/>
                <Weather_Data  place={this.state.tosearch}/>
                <Footer />
            </div>
        )
    }
}
export default App;