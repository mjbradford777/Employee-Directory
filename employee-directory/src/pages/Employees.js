import React from 'react';
import Title from '../components/Title/Title.js';
import Table from '../components/Table/Table.js';
import { Container, Row, Col } from '../components/Grid/Grid.js';

let employees = [];

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
                    <Table employees={employees} />
                </Col>
            </Row>
        </Container>
    );
}

export default Employees;