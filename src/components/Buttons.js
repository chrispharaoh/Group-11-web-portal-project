import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Navbar,NavDropdown,Nav,Form,FormControl,Button} from 'react-bootstrap';

class Buttons extends Component {
    
 

    render() {
        return (
            <div>
               <button type="button" class="btn btn-primary">Antenantal Care</button>
               <button type="button" class="btn btn-secondary">Malaria cases</button>
               <button type="button" class="btn btn-success">Delivery</button>
               <button type="button" class="btn btn-danger">HIV</button>
            </div>
        );
    }
}

export default Buttons;
