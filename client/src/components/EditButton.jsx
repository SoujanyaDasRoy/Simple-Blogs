import React from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const EditButton = ({id}) => {
    return (
        <Link
            to={`/edit/${id}`}
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-600 transition duration-300"
        >
            Edit
        </Link>
    );
}

export default EditButton;