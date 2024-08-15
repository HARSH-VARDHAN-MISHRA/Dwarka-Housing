import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const EditProperty = () => {
    const { id } = useParams();
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        type: 'Rent',
        category: 'Floor',
        price: 0,
        areaSize: '',
        bedrooms: 0,
        bathrooms: 0,
        yearBuilt: 0,
        location: '',
        mapLink: '',
        vendor: '',
        status: 'Pending',
        images: []
    });
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProperty = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/get-property/${id}`);
                setFormData(res.data.data);
            } catch (error) {
                console.error('There was an error fetching the Property!', error);
            }
        };

        fetchProperty();
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`${process.env.REACT_APP_BACKEND_URL}/update-property/${id}`, formData);
            toast.success('Property Updated Successfully');
            navigate('/all-properties');
        } catch (error) {
            console.error('There was an error!', error);
            toast.error(error.response?.data?.message || 'An error occurred');
        }
    };

    return (
        <>
            <ToastContainer />
            <div className="bread">
                <div className="head">
                    <h4>Edit Property</h4>
                </div>
                <div className="links">
                    <Link to="/all-properties" className="add-new">Back <i className="fa-regular fa-circle-left"></i></Link>
                </div>
            </div>

            <div className="d-form">
                <form className="row g-3" onSubmit={handleSubmit}>
                    <div className="col-md-4">
                        <label htmlFor="title" className="form-label">Property Title</label>
                        <input type="text" onChange={handleInputChange} name="title" value={formData.title} className="form-control" id="title" />
                    </div>
                    {/* Add other fields similarly */}
                    <div className="col-md-4">
                        <button type="submit" className="btn btn-primary">Update Property</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default EditProperty;
