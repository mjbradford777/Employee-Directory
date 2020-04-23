import React from 'react';
import './Table.css';

function Table(props) {
    function insertRowToAdd() {
        console.log('click');
    }
    
    const table = (
        <table className="table table-dark table-striped">
            <thead>
                <tr>
                    <th scope="col">First Name <i class="fas fa-sort-down"></i></th>
                    <th scope="col">Last Name <i class="fas fa-sort-down"></i></th>
                    <th scope="col">Department <i class="fas fa-sort-down"></i></th>
                    <th scope="col">Job Title <i class="fas fa-sort-down"></i></th>
                    <th scope="col">Email <i class="fas fa-sort-down"></i></th>
                    <th scope="col">Phone Extension <i class="fas fa-sort-down"></i></th>
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
                    <td><i class="fas fa-plus-circle" onClick={insertRowToAdd}></i></td>
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