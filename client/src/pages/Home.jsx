import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchBlogs } from '../services/api';
import DeleteButton from '../components/DeleteButton';
import EditButton from '../components/EditButton';

const Home = () => {
    const [blogs, setBlogs] = useState([]); // Array of Blogs

    useEffect(() => {
        const getBlogs = async () => {
            try {
                const response = await fetchBlogs();
                setBlogs(response.data);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        };
        getBlogs();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            {/* Header */}
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
                Your Blogs
            </h1>

            {/* Blog List */}
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
                {blogs.length > 0 ? (
                    <ul className="space-y-4">
                        {blogs.map((blog) => (
                            <li
                                key={blog._id}
                                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition duration-300"
                            >
                                <Link
                                    to={`/blog/${blog._id}`}
                                    className="text-lg font-medium text-blue-600 hover:text-blue-800"
                                >
                                    {blog.title}
                                </Link>
                                <div className="flex items-center space-x-4">
                                    {/* <Link
                                        to={`/blog/${blog._id}`}
                                        className="bg-red-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
                                    >
                                        View
                                    </Link> */}
                                    <EditButton
                                        id={blog._id}
                                        setBlogs={setBlogs}
                                        blogs={blogs}
                                    />
                                    <DeleteButton
                                        id={blog._id}
                                        setBlogs={setBlogs}
                                        blogs={blogs}
                                    />
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-center text-gray-600 text-lg">
                        No blogs found. Create one to get started!
                    </p>
                )}
            </div>

            {/* Create Blog Button */}
            <div className="mt-8 flex justify-center">
                <Link
                    to="/create-blog"
                    className="px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg shadow-md hover:bg-purple-600 transition duration-300"
                >
                    Create Blog
                </Link>
            </div>
        </div>
    );
};

export default Home;
