import React, { useState } from 'react';
import { createBlog } from '../services/api.js';
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await createBlog({ title, content, author });
            if (response.status === 201) {
                const newBlog = response.data;
                alert(`Successfully created\n${newBlog.title} by ${newBlog.author}`);
                navigate("/");
            }
        } catch (error) {
            console.error('Blog creation failed:', error.response.data);
            alert("Error Creating Blog");
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white shadow-lg rounded-lg w-full max-w-lg p-8">
                <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
                    Create a New Blog
                </h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-semibold mb-2">
                            Title
                        </label>
                        <input
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="text"
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                            placeholder="Enter blog title"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-semibold mb-2">
                            Author
                        </label>
                        <input
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="text"
                            value={author}
                            onChange={(event) => setAuthor(event.target.value)}
                            placeholder="Enter author name"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-semibold mb-2">
                            Content
                        </label>
                        <textarea
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={content}
                            onChange={(event) => setContent(event.target.value)}
                            placeholder="Write your blog content here"
                            rows="6"
                            required
                        />
                    </div>

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300">
                            Create Blog
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateBlog;
