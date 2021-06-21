import {React,Component} from 'react';
import {Navbar,
        NavbarBrand,
        NavbarToggler,
        Collapse,
        Nav,NavItem,NavLink,
        Form,FormGroup,Input,
        Jumbotron,
        Button} from 'reactstrap';

class Header extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            isNavOpen : false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav(){
            this.setState( {
                isNavOpen : !this.state.isNavOpen
            })
    }
    render(){
        return(
            <div>
                
                    <Navbar dark expand='md'>
                        <div className='container'> 
                            <NavbarToggler onClick ={this.toggleNav} />
                            <NavbarBrand href='/' className=''>Weather_Info</NavbarBrand>
                            
                            <Collapse isOpen = {this.state.isNavOpen} navbar>
                                <Nav  className="ml-auto" navbar>
                                    <NavItem >
                                        <NavLink href='/about_me' color='white'>About_Me</NavLink> 
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </div>
                    </Navbar>
            
                <div className='container'>
                    <Jumbotron>
                        <h1 className='display-3'>Weather_Info</h1>
                        <p className='lead px-4'>A react app to know the weather location of places</p>
                        <hr className='my-2' />
                        <div className='row ml-1 px-2 py-1'>
                            <Button className='col-6 col-sm-4 ' color='primary'>Get Started</Button>
                            <Form className = 'col-6 col-sm-6'>
                                <FormGroup>
                                    <Input
                                        type='text'
                                        name= 'place'
                                        id='place'
                                        placeholder='Enter Place'    
                                        onChange = {this.props.onSearch}
                                    />
                                </FormGroup>
                            </Form>
                        </div>
                    </Jumbotron>
                </div>
            </div>
        )
    }
}
export default Header;