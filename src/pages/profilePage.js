import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import PostPage from './postPage';
import PostCard from '../components/postCard';
import '../style/profilePage.css';

const ProfilePage = () => {
    const [user, setUser] = useState('');
    const { id } = useParams();
    const [userPosts, setUserPosts] = useState([]);
    const { userid } = id;
    // console.log(id);
    useEffect(() => {
        console.log(id);
        const fetchData = async () => {
            try {
                const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
                const userData = await userResponse.json();
                setUser(userData);

                const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
                const postsData = await postsResponse.json();
                console.log(postsData);
                let filteredPosts = postsData.filter((item) => item.userId === parseInt(id));
                // const filteredPosts = postsData.filter(post => post.userId === userid);
                setUserPosts(filteredPosts);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, [id, userid]);

    console.log("User: ", user);
    console.log("Posts: ", userPosts);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Navbar/>
            <div className="profile-page">
                <h1 className="profile-name">{user.name}</h1>
                <p className="profile-username">Username: {user.username}</p>
                <p className="profile-email">Email: {user.email}</p>
                <p className="profile-address">Address: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
                <p className="profile-phone">Phone: {user.phone}</p>
                <p className="profile-website">Website: {user.website}</p>
                <p className="profile-company">Company: {user.company.name}</p>
            </div>
            <div className="post-card-container">
                {userPosts.map(post => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
};

export default ProfilePage;
