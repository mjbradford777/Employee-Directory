import React, { useState } from 'react';
import Title from '../components/Title/Title.js';
import Table from '../components/Table/Table.js';
import Filter from '../components/Filter/Filter.js';
import { Container, Row, Col } from '../components/Grid/Grid.js';
import $ from 'jquery';
import axios from 'axios';

let employees = [];
let employeesControl = [];

axios.get('/api/')
.then(function(response) {
    console.log(response);
    response.data.forEach(element => {
        employees.push(element);
        employeesControl.push(element);
    })
    console.log(employees);
    console.log(employeesControl);
}); 

class Employees extends React.Component { 
    constructor(props) {
        super(props)
        this.state = {employeeSwitch: false}

        this.handleSwitch = this.handleSwitch.bind(this);
    }
    
    handleSwitch() { 
        axios.get('/api/')
        .then(function(response) {
            console.log(response);
            employees = [];
            employeesControl = [];
            response.data.forEach(element => {
                employees.push(element);
                employeesControl.push(element);
            })
            console.log(employees);
            console.log(employeesControl);
        })
        setTimeout(() => {
            this.setState(state => ({
                employeeSwitch: !state.employeeSwitch
            }));
        }, 1000)
    }

    componentDidMount() {
        setTimeout(() => {
            this.handleSwitch();
        }, 1000)
    }

    render() {
        return(
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Title>Employee Directory</Title>
                    </Col>
                </Row>
    
                <Row>
                    <Col size="md-12">
                        <Filter employees={employees} employeesControl={employeesControl} handleSwitch={this.handleSwitch}/>
                    </Col>
                </Row>
    
                <Row>
                    <Col size="md-12">
                        <Table employees={employees} employeesControl={employeesControl} handleSwitch={this.handleSwitch}/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Employees;