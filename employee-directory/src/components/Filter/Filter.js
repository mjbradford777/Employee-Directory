import React, { useState, useEffect } from 'react';
import Jumbotron from '../Jumbotron/Jumbotron';
import { Row } from '../Grid/Grid';
import $ from 'jquery';

function Filter(props) {
    const [UseFilter, setUseFilter] = useState(false);

    function filterFunction() {
        let spliceArray = [];
        if ($('#firstNameFilter').val() !== '') {
            for (let i = 0; i < props.employees.length; i++) {
                if(props.employees[i].firstName !== $('#firstNameFilter').val()) {
                    spliceArray.push(i);
                }
            }
            for (let i = spliceArray.length - 1; i >= 0; i--) {
                props.employees.splice(spliceArray[i], 1);
            }
        }
        if ($('#lastNameFilter').val() !== '') {
            for (let i = 0; i < props.employees.length; i++) {
                if(props.employees[i].lastName !== $('#lastNameFilter').val()) {
                    spliceArray.push(i);
                }
            }
            for (let i = spliceArray.length - 1; i >= 0; i--) {
                props.employees.splice(spliceArray[i], 1);
            }
        }
        if ($('#departmentFilter').val() !== '') {
            for (let i = 0; i < props.employees.length; i++) {
                if(props.employees[i].department !== $('#departmentFilter').val()) {
                    spliceArray.push(i);
                }
            }
            for (let i = spliceArray.length - 1; i >= 0; i--) {
                props.employees.splice(spliceArray[i], 1);
            }
        }
        if ($('#jobTitleFilter').val() !== '') {
            for (let i = 0; i < props.employees.length; i++) {
                if(props.employees[i].jobTitle !== $('#jobTitleFilter').val()) {
                    spliceArray.push(i);
                }
            }
            for (let i = spliceArray.length - 1; i >= 0; i--) {
                props.employees.splice(spliceArray[i], 1);
            }
        }
        if ($('#emailFilter').val() !== '') {
            for (let i = 0; i < props.employees.length; i++) {
                if(props.employees[i].email !== $('#emailFilter').val()) {
                    spliceArray.push(i);
                }
            }
            for (let i = spliceArray.length - 1; i >= 0; i--) {
                props.employees.splice(spliceArray[i], 1);
            }
        }
        if ($('#phoneExtensionFilter').val() !== '') {
            for (let i = 0; i < props.employees.length; i++) {
                if(props.employees[i].phoneExtension !== $('#phoneExtensionFilter').val()) {
                    spliceArray.push(i);
                }
            }
            for (let i = spliceArray.length - 1; i >= 0; i--) {
                props.employees.splice(spliceArray[i], 1);
            }
        }
        console.log(props.employees);
        setUseFilter(true);
    }

    function unfilterFunction() {
        props.employees.length = 0;
        for (let i = 0; i < props.employeesControl.length; i++) {
            props.employees.push(props.employeesControl[i]);
        }
        console.log(props.employees);
        setUseFilter(false);
    }

    const filter = (
        <Jumbotron>
            {!UseFilter
            ? <form>
                    <Row>
                        <div className="form-group">
                            <label for="firstNameFilter">First Name</label>
                            <input type="text" className="form-control" id="firstNameFilter"></input>
                        </div>
                        <div className="form-group">
                            <label for="lastNameFilter">Last Name</label>
                            <input type="text" className="form-control" id="lastNameFilter"></input>
                        </div>
                        <div className="form-group">
                            <label for="departmentFilter">Department</label>
                            <input type="text" className="form-control" id="departmentFilter"></input>
                        </div>
                        <div className="form-group">
                            <label for="jobTitleFilter">Job Title</label>
                            <input type="text" className="form-control" id="jobTitleFilter"></input>
                        </div>
                        <div className="form-group">
                            <label for="emailFilter">Email</label>
                            <input type="text" className="form-control" id="emailFilter"></input>
                        </div>
                        <div className="form-group">
                            <label for="phoneExtensionFilter">Phone Extension</label>
                            <input type="text" className="form-control" id="phoneExtensionFilter"></input>
                        </div>
                    </Row>
                    <Row>
                        <button className="btn btn-success" id="filter" onClick={filterFunction}><i className="fas fa-filter"></i>Filter</button>
                    </Row>
                </form>
            : <Row>
                <button className="btn btn-danger" id="unfilter" onClick={unfilterFunction}><i className="far fa-window-close"></i>Unfilter</button>
            </Row>
            }
        </Jumbotron>
    )

    return(
        <div>
            {filter}
        </div>
    )
}

export default Filter;