import React, { Component } from 'react';
import logo from '../logo.png';
import Api from '../api';
import 'bootstrap/dist/css/bootstrap.min.css';
import Buttons from './Buttons'
import './App.css';
import {Navbar,NavDropdown,Nav,Form,FormControl,Button} from 'react-bootstrap';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            commodities: [],
        };
    }
 componentDidMount(){
        Api.getDashboards()
            .then(data => {
                console.log(data);   
            })
            .catch(error => {
                console.error('Error during data retrieval:', error);
            });
 }

    render() {
        return (
            <div>
               <Navbar bg="light" expand="lg" className="change-bg">
                <Navbar.Brand href="#home" style={{color:"white"}}>DHIS2 WEB PORTAL</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
                </Navbar>
                <Buttons/>
            </div>
        );
    }
}

export default App;
