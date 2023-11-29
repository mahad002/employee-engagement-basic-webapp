
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../style/postPage.css';

const PostPage = () => {
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const fetchPost = async () => {
            const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            const postData = await postResponse.json();
            setPost(postData);
        };

        const fetchComments = async () => {
            const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
            const commentsData = await commentsResponse.json();
            setComments(commentsData);
        };

        fetchPost();
        fetchComments();
    }, [id]);

    if (!post) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <div className="post-page">
                <Navbar className="navbar" />
            <h1 className="post-title">{post.title}</h1>
            <p className="post-body">{post.body}</p>

            <h2 className="comments-title">Comments</h2>
            {comments.map((comment) => (
                <div className="comment" key={comment.id}>
                    <h3 className="comment-name">{comment.name}</h3>
                    <p className="comment-body">{comment.body}</p>
                </div>
            ))}
        </div>
    );
};

export default PostPage;
