
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Edit = ({ post, onSave }) => {
  const [updatedPost, setUpdatedPost] = useState({ title: '', content: '' });
  const navigate = useNavigate();

  useEffect(() => {
    if (post) {
      setUpdatedPost(post);
    }
  }, [post]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSave) {
      onSave(updatedPost);
    }
    navigate('/');
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="edit-post">
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={updatedPost.title}
          onChange={handleChange}
          required
        />
        <label>Content:</label>
        <textarea
          name="content"
          value={updatedPost.content}
          onChange={handleChange}
          required
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default Edit;
