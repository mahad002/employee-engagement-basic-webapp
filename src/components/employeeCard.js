import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const EmployeeCard = ({ employee }) => {
    // const navigate = useNavigate();

    // const handleClick = () => {
    //     navigate('/profile/:id');
    // };

    console.log(employee);

    return (
        <div className="employee-card">
            <h2 className="employee-name">{employee.name}</h2>
            <p className="employee-username">Username: {employee.username}</p>
            <p className="employee-email">Email: {employee.email}</p>
            <p className="employee-phone">Phone: {employee.phone}</p>
            <p className="employee-company">Company: {employee.company.name}</p>
            <Link to={`/profile/${employee.id}`} className="profile-link">Go to Profile</Link>
        </div>
    );
};

export default EmployeeCard;
