import React, { useState, useEffect } from 'react';
import './Table.css';
import $ from 'jquery';

function Table(props) {
    const [add, setAdd] = useState(false);
    const [SortFN, setSortFN] = useState(false);
    const [SortLN, setSortLN] = useState(false);
    const [SortDP, setSortDP] = useState(false);
    const [SortJT, setSortJT] = useState(false);
    const [SortEM, setSortEM] = useState(false);
    const [SortPE, setSortPE] = useState(false);

    function insertRowToAdd() {
        setAdd(true);
    }

    function createEmployee() {
        props.employees.push({
            firstName: $('#firstName').val(), 
            lastName: $('#lastName').val(), 
            department: $('#department').val(),
            jobTitle: $('#jobTitle').val(),
            email: $('#email').val(),
            phoneExtension: parseInt($('#phoneExtension').val())
        })
        setAdd(false);
    }

    function sortDescending(item) {
        console.log('click');
        if (item === 'FN') {
            setSortFN(true);
            setSortLN(false);
            setSortDP(false);
            setSortJT(false);
            setSortEM(false);
            setSortPE(false);
        } else if (item === 'LN') {
            setSortFN(false);
            setSortLN(true);
            setSortDP(false);
            setSortJT(false);
            setSortEM(false);
            setSortPE(false);
        } else if (item === 'DP') {
            setSortFN(false);
            setSortLN(false);
            setSortDP(true);
            setSortJT(false);
            setSortEM(false);
            setSortPE(false);
        } else if (item === 'JT') {
            setSortFN(false);
            setSortLN(false);
            setSortDP(false);
            setSortJT(true);
            setSortEM(false);
            setSortPE(false);
        } else if (item === 'EM') {
            setSortFN(false);
            setSortLN(false);
            setSortDP(false);
            setSortJT(false);
            setSortEM(true);
            setSortPE(false);
        } else if (item === 'PE') {
            console.log('test');
            for (let i = 1; i < props.employees.length; i++) {
                for (let j = i; j >= 0; j--) {
                  if(props.employees[i].phoneExtension >= props.employees[j - 1].phoneExtension) {
                    if (j === i) {
                      break;
                    } else {
                      props.employees.splice(j, 0, props.employees[i]);
                      props.employees.splice(i + 1, 1);
                      break;
                    } 
                  } else if (j === 0) {
                    props.employees.splice(0, 0, props.employees[i]);
                    props.employees.splice(i + 1, 1);
                    break;
                  }
                }
              }
            setSortFN(false);
            setSortLN(false);
            setSortDP(false);
            setSortJT(false);
            setSortEM(false);
            setSortPE(true);
            console.log(props.employees);
        }
    }

    function sortAscending(item) {
        if (item === 'FN') {
            setSortFN(false);
        } else if (item === 'LN') {
            setSortLN(false);
        } else if (item === 'DP') {
            setSortDP(false);
        } else if (item === 'JT') {
            setSortJT(false);
        } else if (item === 'EM') {
            setSortEM(false);
        } else if (item === 'PE') {
            props.employees.reverse();
            setSortPE(false);
            console.log(props.employees);
        }
    }

    const table = (
        <table className="table table-dark table-striped">
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">First Name {!SortFN ? <i className="fas fa-sort-down" onClick={() => sortDescending('FN')}></i> : <i className="fas fa-sort-up" onClick={() => sortAscending('FN')}></i>}</th>
                    <th scope="col">Last Name {!SortLN ? <i className="fas fa-sort-down" onClick={() => sortDescending('LN')}></i> : <i className="fas fa-sort-up" onClick={() => sortAscending('LN')}></i>}</th>
                    <th scope="col">Department {!SortDP ? <i className="fas fa-sort-down" onClick={() => sortDescending('DP')}></i> : <i className="fas fa-sort-up" onClick={() => sortAscending('DP')}></i>}</th>
                    <th scope="col">Job Title {!SortJT ? <i className="fas fa-sort-down" onClick={() => sortDescending('JT')}></i> : <i className="fas fa-sort-up" onClick={() => sortAscending('JT')}></i>}</th>
                    <th scope="col">Email {!SortEM ? <i className="fas fa-sort-down" onClick={() => sortDescending('EM')}></i> : <i className="fas fa-sort-up" onClick={() => sortAscending('EM')}></i>}</th>
                    <th scope="col">Phone Extension {!SortPE ? <i className="fas fa-sort-down" onClick={() => sortDescending('PE')}></i> : <i className="fas fa-sort-up" onClick={() => sortAscending('PE')}></i>}</th>
                </tr>
            </thead>
            <tbody>
                {props.employees.map((employee) => 
                    <tr>
                        <td><i className="fas fa-edit"></i></td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.department}</td>
                        <td>{employee.jobTitle}</td>
                        <td>{employee.email}</td>
                        <td>{employee.phoneExtension}</td>
                    </tr>
                )}
                    {!add 
                    ? <tr><td><i className="fas fa-plus-circle" onClick={insertRowToAdd}></i></td></tr> 
                    : <tr>
                        <td><i className="far fa-save" onClick={createEmployee}></i></td>
                        <td><input type="text" id="firstName" placeholder="First Name"></input></td>
                        <td><input type="text" id="lastName" placeholder="Last Name"></input></td>
                        <td><input type="text" id="department" placeholder="Department"></input></td>
                        <td><input type="text" id="jobTitle" placeholder="Job Title"></input></td>
                        <td><input type="text" id="email" placeholder="Email"></input></td>
                        <td><input type="text" id="phoneExtension" placeholder="Phone Extension"></input></td>
                        </tr>
                    }
            </tbody>
        </table>
    );

    return(
        <div>
            {table}
        </div>
    )
}

export default Table;