import React from 'react';
import { Link } from 'react-router-dom';


const PostCard = ({ post }) => {
    return (
        <div className="post-card">
            <h2 className="post-card-title">{post.title}</h2>
            <p className="post-card-body">{post.body}</p>
            <Link to={`/post/${post.id}`} className="post-card-link">Read More</Link>
        </div>
    );
};

export default PostCard;
