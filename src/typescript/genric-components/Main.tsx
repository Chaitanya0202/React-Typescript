import React from 'react';
import List from './List';

const Main: React.FC = () => {
    // Define the User interface
    interface User {
        name: string;
        age: number;
        email: string;
    }

    // Define the users array
    const users: User[] = [
        {
            name: "Ramesh",
            age: 34,
            email: "godo@gmail.com"
        },
        {
            name: "Alice",
            age: 25,
            email: "alice@example.com"
        },
        {
            name: "Bob",
            age: 28,
            email: "bob@example.com"
        }
    ];

    return (
        <List
            items={users}
            renderItem={(user) => (
                <div style={{display:"flex",marginLeft:"34px"}}>
                    <p>Name: {user.name}</p>
                    <p style={{marginLeft:"20px"}}>Age: {user.age}</p>
                    <p style={{marginLeft:"20px"}}>Email: {user.email}</p>
                </div>
            )}
        />
    );
};

export default Main;
