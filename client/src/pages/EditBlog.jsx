import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchBlogs, updateBlog } from '../services/api';

const EditBlog = () => {
    const { id } = useParams(); //Get Blog ID from URL

    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');

    useEffect(() => {
        const getBlog = async () => {
            try {
                const response = await fetchBlogs(); // Get the blog details
                const blog = response.data.find((blog) => blog._id === id); // Find the blog with the given id
                setTitle(blog.title);
                setContent(blog.content);
                setAuthor(blog.author);
            } catch (error) {
                console.error('Error fetching blog:', error);
            }
        }
        getBlog();
    }, [id]);

    const handleUpdate = async (event) => {
        event.preventDefault();
        try {
            const response = await updateBlog(id, { title, content, author }); // Update the blog
            if (response.status === 200) {
                alert('Blog updated successfully!');
                navigate('/'); // Redirect to home page
            }
        } catch (error) {
            console.error('Error updating blog:', error);
            alert('Failed to update blog.');
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <form onSubmit={handleUpdate} className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4">Update Blog</h2>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-700 font-medium mb-2">Title</label>
                    <input
                        id="title"
                        type="text"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="author" className="block text-gray-700 font-medium mb-2">Author</label>
                    <input
                        id="author"
                        type="text"
                        value={author}
                        onChange={(event) => setAuthor(event.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="content" className="block text-gray-700 font-medium mb-2">Content</label>
                    <textarea
                        id="content"
                        value={content}
                        onChange={(event) => setContent(event.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                    Save Changes
                </button>
            </form>
        </div>
    );
}

export default EditBlog