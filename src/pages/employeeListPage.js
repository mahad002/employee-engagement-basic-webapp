
import React, { useEffect, useState } from 'react';
import EmployeeCard from '../components/employeeCard';
import '../style/employeeListPage.css';

const EmployeeListPage = () => {
    const [users, setUsers] = useState([]);
    const [searchItem, setSearchItem] = useState('');
    const [originalDatas, setOriginalData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {setUsers(data); setOriginalData(data)})
            .catch(error => console.log(error));
    }, []);

    const handleInputChange = (e) => {
        const searchTerm = e.target.value;
        setSearchItem(searchTerm);
    
        const filteredItems = originalDatas.filter((user) =>
          user.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    
        setUsers(searchTerm !== '' ? filteredItems : originalDatas);
      };

    console.log(users);

    return (
        <div>
            {/* <Navbar /> */}
            <div className="search-input-container">
                <input
                type="text"
                value={searchItem}
                onChange={handleInputChange}
                placeholder='Type to search'
                />
            </div>
            <div className="employee-list-page">
                <h1 className="employee-list-page__title">Employee List</h1>
                <ul className="employee-list-page__list">
                    {users.map(user1 => (
                        <li key={user1.id} className="employee-list-page__item">
                            <EmployeeCard employee={user1} className="employee-list-page__card" />
                        </li>
                    ))}
                </ul>
            </div>
            
        </div>
    );
};

export default EmployeeListPage;
