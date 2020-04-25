import React from 'react';
import Title from '../components/Title/Title.js';
import Table from '../components/Table/Table.js';
import Filter from '../components/Filter/Filter.js';
import { Container, Row, Col } from '../components/Grid/Grid.js';
import axios from 'axios';

let employees = [{
    _id: 1,
    firstName: 'Michael',
    lastName: 'Bradford',
    department: 'Equity',
    jobTitle: 'Equity Closer',
    email: 'abc@def.com',
    phoneExtension: 12345
},
{
    _id: 2,
    firstName: 'Some',
    lastName: 'One',
    department: 'Somewhere',
    jobTitle: 'Something',
    email: 'ghi@jkl.com',
    phoneExtension: 67890
},
{
    _id: 3,
    firstName: 'Test',
    lastName: 'McTester',
    department: 'Sales',
    jobTitle: 'Seller',
    email: 'mno@pqr.com',
    phoneExtension: 13579
}];

let employeesControl = [{
    firstName: 'Michael',
    lastName: 'Bradford',
    department: 'Equity',
    jobTitle: 'Equity Closer',
    email: 'abc@def.com',
    phoneExtension: 12345
},
{
    _id: 2,
    firstName: 'Some',
    lastName: 'One',
    department: 'Somewhere',
    jobTitle: 'Something',
    email: 'ghi@jkl.com',
    phoneExtension: 67890
},
{
    _id: 3,
    firstName: 'Test',
    lastName: 'McTester',
    department: 'Sales',
    jobTitle: 'Seller',
    email: 'mno@pqr.com',
    phoneExtension: 13579
}];

function Employees() {    
    return(
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <Title>Employee Directory</Title>
                </Col>
            </Row>

            <Row>
                <Col size="md-12">
                    <Filter employees={employees} employeesControl={employeesControl}/>
                </Col>
            </Row>

            <Row>
                <Col size="md-12">
                    <Table employees={employees} />
                </Col>
            </Row>
        </Container>
    );
}

export default Employees;