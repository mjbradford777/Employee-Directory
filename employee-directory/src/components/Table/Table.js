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
    const [UpdateLock, setUpdateLock] = useState(false);
    const [UpdateID, setUpdateID] = useState(null);
    const [DeleteSwitch, setDeleteSwitch] = useState(false);

    function insertRowToAdd() {
        if (UpdateLock) {
            return;
        }
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
        props.employeesControl.push({
            firstName: $('#firstName').val(), 
            lastName: $('#lastName').val(), 
            department: $('#department').val(),
            jobTitle: $('#jobTitle').val(),
            email: $('#email').val(),
            phoneExtension: parseInt($('#phoneExtension').val())
        })
        setAdd(false);
        props.handleSwitch();
    }

    function handleEdit(event) {
        if (UpdateLock) {
            return;
        };
        setUpdateID(parseInt(event.target.id));
        setUpdateLock(true);
    }

    function updateEmployee() {
        for (let i = 0; i < props.employees.length; i++) {
            if (props.employees[i]._id === UpdateID) {
                props.employees[i].firstName = $('#firstName').val();
                props.employees[i].lastName = $('#lastName').val();
                props.employees[i].department = $('#department').val();
                props.employees[i].jobTitle = $('#jobTitle').val();
                props.employees[i].email = $('#email').val();
                props.employees[i].phoneExtension = parseInt($('#phoneExtension').val());
                
            }
        }
        for (let i = 0; i < props.employeesControl.length; i++) {
            if (props.employeesControl[i]._id === UpdateID) {
                props.employeesControl[i].firstName = $('#firstName').val();
                props.employeesControl[i].lastName = $('#lastName').val();
                props.employeesControl[i].department = $('#department').val();
                props.employeesControl[i].jobTitle = $('#jobTitle').val();
                props.employeesControl[i].email = $('#email').val();
                props.employeesControl[i].phoneExtension = parseInt($('#phoneExtension').val());
                
            }
        }
        setUpdateID(null);
        setUpdateLock(false);
        props.handleSwitch();
    }

    function deleteEmployee(event) {
        for (let i = 0; i < props.employees.length; i++) {
            if (props.employees[i]._id === parseInt(event.target.id)) {
                props.employees.splice(i, 1);
            }
        }
        for (let i = 0; i < props.employeesControl.length; i++) {
            if (props.employeesControl[i]._id === parseInt(event.target.id)) {
                props.employeesControl.splice(i, 1);
            }
        }
        if (DeleteSwitch) {
            setDeleteSwitch(false);
        } else {
            setDeleteSwitch(true);
        }
        props.handleSwitch();
    }

    function sortAscending(item) {
        if (UpdateLock) {
            return;
        }
        if (item === 'FN') {
            props.employees.sort(function(a, b) {
                let nameA = a.firstName.toUpperCase();
                let nameB = b.firstName.toUpperCase();
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }

                return 0;
            });
            setSortFN(true);
            setSortLN(false);
            setSortDP(false);
            setSortJT(false);
            setSortEM(false);
            setSortPE(false);
        } else if (item === 'LN') {
            props.employees.sort(function(a, b) {
                let nameA = a.lastName.toUpperCase();
                let nameB = b.lastName.toUpperCase();
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }

                return 0;
            });
            setSortFN(false);
            setSortLN(true);
            setSortDP(false);
            setSortJT(false);
            setSortEM(false);
            setSortPE(false);
        } else if (item === 'DP') {
            props.employees.sort(function(a, b) {
                let nameA = a.department.toUpperCase();
                let nameB = b.department.toUpperCase();
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }

                return 0;
            });
            setSortFN(false);
            setSortLN(false);
            setSortDP(true);
            setSortJT(false);
            setSortEM(false);
            setSortPE(false);
        } else if (item === 'JT') {
            props.employees.sort(function(a, b) {
                let nameA = a.jobTitle.toUpperCase();
                let nameB = b.jobTitle.toUpperCase();
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }

                return 0;
            });
            setSortFN(false);
            setSortLN(false);
            setSortDP(false);
            setSortJT(true);
            setSortEM(false);
            setSortPE(false);
        } else if (item === 'EM') {
            props.employees.sort(function(a, b) {
                let nameA = a.email.toUpperCase();
                let nameB = b.email.toUpperCase();
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }

                return 0;
            });
            setSortFN(false);
            setSortLN(false);
            setSortDP(false);
            setSortJT(false);
            setSortEM(true);
            setSortPE(false);
        } else if (item === 'PE') {
            props.employees.sort(function(a, b) {
                return a.phoneExtension - b.phoneExtension;
            });
            setSortFN(false);
            setSortLN(false);
            setSortDP(false);
            setSortJT(false);
            setSortEM(false);
            setSortPE(true);
        }
    }

    function sortDescending(item) {
        if (UpdateLock) {
            return;
        }
        if (item === 'FN') {
            props.employees.sort(function(a, b) {
                let nameA = a.firstName.toUpperCase();
                let nameB = b.firstName.toUpperCase();
                if (nameA < nameB) {
                    return 1;
                }
                if (nameA > nameB) {
                    return -1;
                }

                return 0;
            });
            setSortFN(false);
        } else if (item === 'LN') {
            props.employees.sort(function(a, b) {
                let nameA = a.lastName.toUpperCase();
                let nameB = b.lastName.toUpperCase();
                if (nameA < nameB) {
                    return 1;
                }
                if (nameA > nameB) {
                    return -1;
                }

                return 0;
            });
            setSortLN(false);
        } else if (item === 'DP') {
            props.employees.sort(function(a, b) {
                let nameA = a.department.toUpperCase();
                let nameB = b.department.toUpperCase();
                if (nameA < nameB) {
                    return 1;
                }
                if (nameA > nameB) {
                    return -1;
                }

                return 0;
            });
            setSortDP(false);
        } else if (item === 'JT') {
            props.employees.sort(function(a, b) {
                let nameA = a.jobTitle.toUpperCase();
                let nameB = b.jobTitle.toUpperCase();
                if (nameA < nameB) {
                    return 1;
                }
                if (nameA > nameB) {
                    return -1;
                }

                return 0;
            });
            setSortJT(false);
        } else if (item === 'EM') {
            props.employees.sort(function(a, b) {
                let nameA = a.email.toUpperCase();
                let nameB = b.email.toUpperCase();
                if (nameA < nameB) {
                    return 1;
                }
                if (nameA > nameB) {
                    return -1;
                }

                return 0;
            });
            setSortEM(false);
        } else if (item === 'PE') {
            props.employees.sort(function(a, b) {
                return b.phoneExtension - a.phoneExtension;
            });
            setSortPE(false);
        }
    }

    const table = (
        <table className="table table-dark table-striped">
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col">First Name {!SortFN ? <i className="fas fa-sort-down" onClick={() => sortAscending('FN')}></i> : <i className="fas fa-sort-up" onClick={() => sortDescending('FN')}></i>}</th>
                    <th scope="col">Last Name {!SortLN ? <i className="fas fa-sort-down" onClick={() => sortAscending('LN')}></i> : <i className="fas fa-sort-up" onClick={() => sortDescending('LN')}></i>}</th>
                    <th scope="col">Department {!SortDP ? <i className="fas fa-sort-down" onClick={() => sortAscending('DP')}></i> : <i className="fas fa-sort-up" onClick={() => sortDescending('DP')}></i>}</th>
                    <th scope="col">Job Title {!SortJT ? <i className="fas fa-sort-down" onClick={() => sortAscending('JT')}></i> : <i className="fas fa-sort-up" onClick={() => sortDescending('JT')}></i>}</th>
                    <th scope="col">Email {!SortEM ? <i className="fas fa-sort-down" onClick={() => sortAscending('EM')}></i> : <i className="fas fa-sort-up" onClick={() => sortDescending('EM')}></i>}</th>
                    <th scope="col">Phone Extension {!SortPE ? <i className="fas fa-sort-down" onClick={() => sortAscending('PE')}></i> : <i className="fas fa-sort-up" onClick={() => sortDescending('PE')}></i>}</th>
                </tr>
            </thead>
            <tbody>
                {props.employees.map((employee) => {
                    return UpdateID !== employee._id
                    ? <tr>
                        <td><i id={employee._id + "upd"} className="fas fa-edit" onClick={handleEdit}></i></td>
                        <td><i id={employee._id + "del"} className="fas fa-trash-alt" onClick={deleteEmployee}></i></td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.department}</td>
                        <td>{employee.jobTitle}</td>
                        <td>{employee.email}</td>
                        <td>{employee.phoneExtension}</td>
                    </tr>
                    : <tr>
                        <td><i id={employee._id + "upd"} className="far fa-save" onClick={updateEmployee}></i></td>
                        <td><i id={employee._id + "del"} className="fas fa-trash-alt" onClick={deleteEmployee}></i></td>
                        <td><textarea id="firstName">{employee.firstName}</textarea></td>
                        <td><textarea id="lastName">{employee.lastName}</textarea></td>
                        <td><textarea id="department">{employee.department}</textarea></td>
                        <td><textarea id="jobTitle">{employee.jobTitle}</textarea></td>
                        <td><textarea id="email">{employee.email}</textarea></td>
                        <td><textarea id="phoneExtension">{employee.phoneExtension}</textarea></td>
                    </tr>
                }
                
                )}
            </tbody>
            <tbody>
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