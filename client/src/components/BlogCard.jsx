// import React from 'react';
// import { Link } from 'react-router-dom';
// import EditButton from './EditButton';
// import DeleteButton from './DeleteButton';

// const BlogCard = ({ blog, blogs, setBlogs }) => {
//     if (!blog) {
//         return (
//             <li className="text-center text-gray-500 p-4 bg-gray-50 rounded-lg shadow-sm">
//                 Blog data is unavailable.
//             </li>
//         ); // Gracefully handle missing blog data
//     }

//     return (
//         <li
//             key={blog._id}
//             className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300 border"
//         >
//             Blog Title Link
//             <Link
//                 to={`/blog/${blog._id}`}
//                 className="text-lg font-medium text-purple-600 hover:text-purple-800 truncate"
//                 title={blog.title}
//             >
//                 {blog.title}
//             </Link>

//             {/* Edit and Delete Buttons */}
//             <div className="flex items-center space-x-4">
//                 <EditButton id={blog._id} setBlogs={setBlogs} blogs={blogs} />
//                 <DeleteButton id={blog._id} setBlogs={setBlogs} blogs={blogs} />
//             </div>
//         </li>
//     );
// };

// export default BlogCard;
