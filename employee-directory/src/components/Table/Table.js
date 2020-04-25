import React, { useState, useEffect } from 'react';
import './Table.css';
import $ from 'jquery';
import NotUpdateSection from '../NotUpdateSection/NotUpdateSection';
import UpdateSection from '../UpdateSection/UpdateSection';

function Table(props) {
    const [add, setAdd] = useState(false);
    const [SortFN, setSortFN] = useState(false);
    const [SortLN, setSortLN] = useState(false);
    const [SortDP, setSortDP] = useState(false);
    const [SortJT, setSortJT] = useState(false);
    const [SortEM, setSortEM] = useState(false);
    const [SortPE, setSortPE] = useState(false);
    const [updateLock, setUpdateLock] = useState(false);
    const [updateID, setUpdateID] = useState(null);

    function insertRowToAdd() {
        if (updateLock) {
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
        setAdd(false);
    }

    function sortAscending(item) {
        if (updateLock) {
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
        if (updateLock) {
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
                    <th scope="col">First Name {!SortFN ? <i className="fas fa-sort-down" onClick={() => sortAscending('FN')}></i> : <i className="fas fa-sort-up" onClick={() => sortDescending('FN')}></i>}</th>
                    <th scope="col">Last Name {!SortLN ? <i className="fas fa-sort-down" onClick={() => sortAscending('LN')}></i> : <i className="fas fa-sort-up" onClick={() => sortDescending('LN')}></i>}</th>
                    <th scope="col">Department {!SortDP ? <i className="fas fa-sort-down" onClick={() => sortAscending('DP')}></i> : <i className="fas fa-sort-up" onClick={() => sortDescending('DP')}></i>}</th>
                    <th scope="col">Job Title {!SortJT ? <i className="fas fa-sort-down" onClick={() => sortAscending('JT')}></i> : <i className="fas fa-sort-up" onClick={() => sortDescending('JT')}></i>}</th>
                    <th scope="col">Email {!SortEM ? <i className="fas fa-sort-down" onClick={() => sortAscending('EM')}></i> : <i className="fas fa-sort-up" onClick={() => sortDescending('EM')}></i>}</th>
                    <th scope="col">Phone Extension {!SortPE ? <i className="fas fa-sort-down" onClick={() => sortAscending('PE')}></i> : <i className="fas fa-sort-up" onClick={() => sortDescending('PE')}></i>}</th>
                </tr>
            </thead>
            {!updateLock 
            ? <NotUpdateSection employees={props.employees} updateLock={[updateLock, setUpdateLock]} updateID={[updateID, setUpdateID]}/>
            : <UpdateSection employees={props.employees} updateLock={[updateLock, setUpdateLock]} updateID={[updateID, setUpdateID]}/>
            }
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