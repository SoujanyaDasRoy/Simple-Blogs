import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchBlogs } from '../services/api';
import DeleteButton from '../components/DeleteButton';
import EditButton from '../components/EditButton';

const Home = () => {
    const [blogs, setBlogs] = useState([]);

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
        <div className="min-h-screen bg-gray-100 p-6 sm:p-4">
            {/* Header */}
            <h1 className="text-3xl sm:text-2xl font-bold text-center text-gray-800 mb-8">
                Your Blogs
            </h1>

            {/* Blog List */}
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 sm:p-4">
                {blogs.length > 0 ? (
                    <ul className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-4 sm:space-y-0">
                        {blogs.map((blog) => (
                            <li
                                key={blog._id}
                                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition duration-300 sm:flex-col sm:items-start"
                            >
                                <Link
                                    to={`/blog/${blog._id}`}
                                    className="text-lg font-medium text-blue-600 hover:text-blue-800 max-w-full overflow-hidden text-ellipsis whitespace-nowrap"
                                    title={blog.title}
                                >
                                    {blog.title}
                                </Link>
                                <div className="flex items-center space-x-4 sm:space-x-2 sm:flex-col sm:items-end sm:space-y-2">
                                    <EditButton
                                        id={blog._id}
                                        setBlogs={setBlogs}
                                        blogs={blogs}
                                        className="px-4 py-2 sm:px-3 sm:py-1.5 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg shadow-md transition duration-300"
                                    />
                                    <DeleteButton
                                        id={blog._id}
                                        setBlogs={setBlogs}
                                        blogs={blogs}
                                        className="px-4 py-2 sm:px-3 sm:py-1.5 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg shadow-md transition duration-300"
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
                    className="px-6 py-3 sm:px-4 sm:py-2 bg-purple-500 text-white font-semibold rounded-lg shadow-md hover:bg-purple-600 transition duration-300"
                >
                    Create Blog
                </Link>
            </div>
        </div>
    );
};

export default Home;