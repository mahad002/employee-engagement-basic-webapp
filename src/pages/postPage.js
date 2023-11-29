
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

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
    return <div>Loading...</div>;
  }

  return (
    <div>
        <Navbar/>
      <h1>{post.title}</h1>
      <p>{post.body}</p>

      <h2>Comments</h2>
      {comments.map((comment) => (
        <div key={comment.id}>
          <h3>{comment.name}</h3>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostPage;
