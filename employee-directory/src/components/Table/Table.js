import React from 'react';
import './Table.css';

function Table(props) {
    const table = (
        <table className="table table-dark table-striped">
            <thead>
                <tr>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Department</th>
                    <th scope="col">Job Title</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone Extension</th>
                </tr>
            </thead>
            <tbody>
                {props.employees.map((employee) => 
                    <tr>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.department}</td>
                        <td>{employee.jobTitle}</td>
                        <td>{employee.email}</td>
                        <td>{employee.phoneExtension}</td>
                    </tr>
                )}
                <tr>
                    <td><i class="fas fa-plus-circle"></i></td>
                </tr>
            </tbody>
        </table>
    );

    return(
        <div>
            {table}
        </div>
    );
}

export default Table;