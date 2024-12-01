import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BlogDetails from './pages/BlogDetails';
import CreateBlog from './pages/CreateBlog';
import EditBlog from './pages/EditBlog';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />                  {/* Home page */}
                <Route path="/blog/:id" element={<BlogDetails />} />   {/* Single blog */}
                <Route path="/create-blog" element={<CreateBlog />} />      {/* Create blog */}
                <Route path="/edit/:id" element={<EditBlog />} />      {/* Edit blog */}
            </Routes>
        </Router>
    );
};

export default App;
