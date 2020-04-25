import React, { useState, useEffect } from 'react';

function NotUpdateSection(props) {
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
        const section = (
            <tbody>
                {props.employees.map((employee) => 
                    <tr>
                        <td><i id={employee._id} className="fas fa-edit" onClick={handleEdit}></i></td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.department}</td>
                        <td>{employee.jobTitle}</td>
                        <td>{employee.email}</td>
                        <td>{employee.phoneExtension}</td>
                    </tr>
                )}
            </tbody>
        );

        return(
            {section}
        )
}

export default NotUpdateSection;