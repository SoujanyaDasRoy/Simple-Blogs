import express from 'express';
import Blog from '../models/blogSchema.js';

const blogRoutes = express.Router();

//Create a Blog Post
blogRoutes.post('/', async (req, res) => {
    try {
        const { title, content, author } = req.body;

        const newBlog = new Blog({
            title,
            content,
            author,
            createdAt: new Date()
        });

        const savedBlog = await newBlog.save();

        res.status(201).json(savedBlog);
    } catch (error) {
        res.status(400).json({ message: 'Error creating blog post', error: error.message });
    }
})

//Get all Blog Posts
blogRoutes.get('/', async (req, res) => {
    try {
        const blogs = await Blog.find().sort({createdAt: -1})

        res.status(200).json(blogs);
    } catch (error) {
        res.status(400).json({ message: 'Error fetchin blog posts', error: error.message });
    }
})

//Get a specific Blog Post
blogRoutes.get('/:id', async (req, res) => {
    try {
        const blog = await findById(req.params.id);

        if (!blog) {
            return res.status(404).json({ message: 'Blog post not found' });
        }

        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching blog post', error: error.message });
    }
})

//Modify a Blog Post
blogRoutes.put('/:id', async (req, res) => {
    try {
        const { title, content, author } = req.body;

        const updatedBlog = await Blog.findByIdAndUpdate(
            req.params.id,
            {
                title,
                content,
                author,
                updatedAt: new Date()
            },
            { new: true }
        )

        if (!updatedBlog) {
            return res.status(404).json({ message: 'Blog post not found' });
        }

        res.status(200).json(updatedBlog);
    } catch (error) {
        res.status(400).json({ message: 'Error updating blog post', error: error.message });
    }
})

//Delete a Blog Post
blogRoutes.delete('/:id', async (req, res) => {
    try {
        const deletedBlog = await Blog.findByIdAndDelete(req.params.id);

        if (!deletedBlog) {
            return res.status(404).json({ message: 'Blog post not found' });
        }

        res.status(200).json({ message: 'Blog post deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting blog post', error: error.message });
    }
})

export default blogRoutes;