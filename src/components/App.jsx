import React, { Component } from 'react';
import logo from '../logo.png';
import Api from '../api';
import 'bootstrap/dist/css/bootstrap.min.css';
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
  <Navbar.Brand href="#home" style={{color:"green"}}>React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home" style={{color:"white"}}>Home</Nav.Link>
      <Nav.Link href="#link" style={{color:"white"}}>Link</Nav.Link>
      <NavDropdown title="Links" id="basic-nav-dropdown" style={{color:"white"}}>
        <NavDropdown.Item href="#action/3.1" >Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
            </div>
        );
    }
}

export default App;
