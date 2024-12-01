import React from 'react';
import { deleteBlogs } from '../services/api';

const DeleteButton = ({ id, blogs, setBlogs }) => {
    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete this blog?')) {
            try {
                await deleteBlogs(id); // Call API to delete the blog
                setBlogs(blogs.filter((blog) => blog._id !== id)); // Update state to remove the deleted blog
                alert('Blog deleted successfully!');
            } catch (error) {
                console.error('Failed to delete blog:', error);
                alert('Error: Failed to delete blog');
            }
        }
    };

    return (
        <button
            onClick={handleDelete}
            className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 hover:shadow-lg transition-all duration-300"
        >
            Delete
        </button>
    );
};

export default DeleteButton;
