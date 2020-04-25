import React from 'react';
import Title from '../components/Title/Title.js';
import Table from '../components/Table/Table.js';
import { Container, Row, Col } from '../components/Grid/Grid.js';
import axios from 'axios';

let employees = [{
    firstName: 'Michael',
    lastName: 'Bradford',
    department: 'Equity',
    jobTitle: 'Equity Closer',
    email: 'abc@def.com',
    phoneExtension: 12345
},
{
    firstName: 'Some',
    lastName: 'One',
    department: 'Somewhere',
    jobTitle: 'Something',
    email: 'ghi@jkl.com',
    phoneExtension: 67890
},
{
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
}];

function Employees() {
//     console.log('here');

//     axios.get('/api/test')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })

//     console.log('there');

    console.log(employees);
    
    return(
        <Container fluid>
            <Row>
                <Col size="md-12">
                <Title>Employee Directory</Title>
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