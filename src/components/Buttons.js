import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Navbar,NavDropdown,Nav,Form,FormControl,Button} from 'react-bootstrap';

class Buttons extends Component {
    antenantalRedirect = () =>{
        this.props.history.push('./Antenantal');
    }
 

    render() {
        return (
            <div>
               <button type="button" onClick={this.antenantalRedirect} className="btn btn-primary">Antenantal Care</button>
               <button type="button" className="btn btn-secondary">Malaria cases</button>
               <button type="button" className="btn btn-success">Delivery</button>
               <button type="button" className="btn btn-success">EEP MAPS</button>
               <button type="button" className="btn btn-danger">HIV</button>
               
            </div>
        );
    }
}

export default Buttons;
