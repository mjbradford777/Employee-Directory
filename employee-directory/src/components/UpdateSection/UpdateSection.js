import React, { useState, useEffect } from 'react';

function UpdateSection(props) {
    function handleEdit(event) {
        if (props.updateLock) {
            return;
        };
        console.log(event.target);
        console.log(event.target.id);
        props.setUpdateID(event.target.id);
        console.log(props.updateID);
        props.setUpdateLock(true);
    }

    function updateEmployee() {
        console.log('Not built yet');
    }

        const section = (
            <tbody>
                {props.employees.map((employee) => {
                    return props.updateID !== employee._id
                    ? <tr>
                        <td><i id={employee._id} className="fas fa-edit" onClick={handleEdit}></i></td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.department}</td>
                        <td>{employee.jobTitle}</td>
                        <td>{employee.email}</td>
                        <td>{employee.phoneExtension}</td>
                    </tr>
                    : <tr>
                        <td><i className="far fa-save" onClick={updateEmployee}></i></td>
                        <td><input type="text" id="firstName">{employee.firstName}</input></td>
                        <td><input type="text" id="lastName">{employee.lastName}</input></td>
                        <td><input type="text" id="department">{employee.department}</input></td>
                        <td><input type="text" id="jobTitle">{employee.jobTitle}</input></td>
                        <td><input type="text" id="email">{employee.email}</input></td>
                        <td><input type="text" id="phoneExtension">{employee.phoneExtension}</input></td>
                    </tr>
                }
                
                )}
            </tbody>
        );

        return(
            {section}
        )
}

export default UpdateSection;