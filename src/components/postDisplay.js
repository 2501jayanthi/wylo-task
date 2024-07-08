
import React from 'react';
import { Link } from 'react-router-dom';
import PostItem from './postItem';

const PostsDisplay = ({ posts, onEdit, onDelete }) => {
  return (
    <div className="posts-display">
      <h2 className='head'>All Posts</h2>
     
      <Link to="/create">
        <button >Create New Post</button>
      </Link>
      {posts.map((post) => (
        <PostItem
          key={post.id}
          post={post}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default PostsDisplay;
