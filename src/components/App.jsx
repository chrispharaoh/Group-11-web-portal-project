import React, { Component } from 'react';
import logo from '../logo.png';
import Api from '../api';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Navbar,NavDropdown,Nav,Form,FormControl,Button} from 'react-bootstrap';
import CanvasJSReact from './canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
import './PieChart'
import PieChart from './PieChart';
import BarChart from './BarChart';
import LineChart from './LineChart';
import Buttons from './Buttons';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dimensions: [],
            charts:'',
            dashboards:''
        };
    }
    state = {
        headers:[]
    }
 componentDidMount(){
        Api.getDimensions()
            .then(data => {  
                this.setState({dimensions: data});
                console.log(this.state.dimensions);
            })
            .catch(error => {
                console.error('Error during data retrieval:', error);
            });

             Api.getCharts()
             .then(data=>{
                 this.setState({charts:data.charts});
                 console.log(this.state.charts);
                })
                .catch(error => {
                    console.error('Error during data retrieval:', error);
                });
    
             Api.getDashboards()
             .then(data=>{
                 this.setState({dashboards:data.dashboards});
                 console.log(this.state.dashboards);
                })
                .catch(error => {
                    console.error('Error during data retrieval:', error);
                });

        }

    render() {

        const{charts, dashboards} = this.state
        if(!charts || !dashboards){
            return <div>loading...</div>
        }
        const singleDashItems= dashboards[6].dashboardItems

        const chartsForOneDash=[]
        const ids = singleDashItems.map(value=>{
        if(!value.chart)
        {
            return 
        }
        else{
            return value.chart
        }
    })

        
        // charts.forEach(chartValu =>{
        //     ids.forEach(ids=>{
        //         if(chartValu.id===ids.id)
        //         {
        //             chartsForOneDash.push(chartValu)
        //         }
        //     })
        // })

     console.log(ids)
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
                <LineChart />
                <PieChart />
                <BarChart />
                {this.state.dashboards.map((dashboards)=>{
                return <p key={dashboards.id}>{dashboards.displayName}</p>
                })}
            </div>
        );
    }
}

export default App;
