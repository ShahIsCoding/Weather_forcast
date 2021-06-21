import React from 'react';
import {ListGroup,ListGroupItem,Jumbotron} from 'reactstrap';
function Footer(){
    
    return (
        <div className ='container' style={{color :'black'}}>
            <Jumbotron>
                <ListGroup>
                    <ListGroupItem>
                        About_Dev
                    </ListGroupItem>
                </ListGroup>
            </Jumbotron>
        </div>
    )
}
export default Footer;