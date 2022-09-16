import React from 'react'
import { Button, Container, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { removeEmployee } from '../../redux/actions/EmployeeAction';

const EmployeeList = () => {

    const dispatch = useDispatch();

    const { employees } = useSelector(state => state.employee);

    const deleteEmployee = (index) => {
        dispatch(removeEmployee(index))

        toast.success('Employee is successfully removed')
    }

    return (
        <Container>
            <h1>Employee <Link to="/employee/add-employee" ><Button className='float-right' style={{
                float: 'right',
            }}>Add Employee</Button></Link></h1>
            <Table responsive="sm" className='mt-4'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Pincode</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.length > 0 ? employees.map((employee, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{employee.name}</td>
                                <td>{employee.contact}</td>
                                <td>{employee.phone}</td>
                                <td>{employee.address}</td>
                                <td>{employee.pincode}</td>
                                <td>
                                    <Link to={`/employee/edit-employee/${index}`}>
                                        <Button
                                            type="button"
                                            variant="outline-primary"
                                            style={{
                                                marginRight: "10px",
                                            }}
                                        >
                                            Edit
                                        </Button>
                                    </Link>
                                    
                                    <Button
                                        type="button"
                                        variant="outline-danger"
                                    onClick={() => deleteEmployee(index) }
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        )) : (
                            <tr>
                                <td colSpan="7" style={{textAlign: "center"}}>
                                    No record found
                                </td>
                            </tr>)
                    }

                </tbody>
            </Table>
        </Container>
    )
}

export default EmployeeList