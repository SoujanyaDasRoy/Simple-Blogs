import axios from 'axios';

const api = axios.create({ baseURL: `https://simple-blogs-api.vercel.app/api`});

export const fetchBlogs = async ()=>{
    return await api.get("/blogs");
}

export const updateBlog = async (id, updatedBlog) =>{
    return await api.put(`/blogs/${id}`, updatedBlog);
}

export const createBlog = async (newBlog) => {
    return await api.post('/blogs', newBlog);
};

export const deleteBlogs = async(id)=>{
    return await api.delete(`/blogs/${id}`);
}