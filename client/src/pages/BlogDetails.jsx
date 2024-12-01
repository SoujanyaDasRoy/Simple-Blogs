import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBlogs } from '../services/api';

const BlogDetails = () => {
    const { id } = useParams(); // Get the blog ID from the URL
    const [blog, setBlog] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getBlog = async () => {
            try {
                const response = await fetchBlogs(); // Fetch all blogs
                const foundBlog = response.data.find((b) => b._id === id); // Match the blog by ID
                console.log(foundBlog)
                setBlog(foundBlog); // Set the matched blog
            } catch (err) {
                console.error('Error fetching blog:', err);
                alert('An error occurred while fetching the blog.');
            } finally {
                setLoading(false);
            }
        };
        getBlog();
    }, [id]);

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
                {/* Blog Title */}
                <h1 className="text-4xl font-bold text-purple-700 mb-4">{blog.title}</h1>

                {/* Blog Author */}
                <p className="text-sm text-gray-500 mb-4">By {blog.author}</p>

                {/* Blog Content */}
                <p className="text-gray-800 leading-7">{blog.content}</p>
            </div>
        </div>
    );
};

export default BlogDetails;
