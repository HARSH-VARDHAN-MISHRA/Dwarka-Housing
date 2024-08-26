import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const EditProperty = () => {
    const { id } = useParams(); // Property ID from URL
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
        location: '', // Location ID reference
        mapLink: '',
        vendor: '', // Vendor ID reference (set from sessionStorage)
        status: 'Pending',
        state: '',
        locality: '',
        images: [] // Store image files directly
    });
    const [existingImages, setExistingImages] = useState([]);
    const [locations, setLocations] = useState([]);
    const [propertyCategory, setPropertyCategory] = useState([]);
    const [propertyType, setPropertyType] = useState([]);
    const [currentState, setCurrentState] = useState('');
    const [currentLocality, setCurrentLocality] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchProperty = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/get-property-by-id/${id}`);
                setFormData(res.data.data);
                setExistingImages(res.data.data.images || []);
                setCurrentState(res.data.data.state);
                setCurrentLocality(res.data.data.locality);
            } catch (error) {
                console.error('There was an error fetching the property!', error);
                toast.error('An error occurred while fetching the property');
            }
        };

        const fetchLocations = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/get-all-location`);
                if (response.data.success) {
                    setLocations(response.data.data);
                } else {
                    toast.error('Failed to load locations');
                }
            } catch (error) {
                console.error('Error fetching locations:', error);
                toast.error('An error occurred while fetching locations');
            }
        };

        const fetchPropertyCategories = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/get-property-category`);
                if (response.data.success) {
                    setPropertyCategory(response.data.data);
                } else {
                    toast.error('Failed to load categories');
                }
            } catch (error) {
                console.error('Error fetching categories:', error);
                toast.error('An error occurred while fetching categories');
            }
        };

        const fetchPropertyTypes = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/properties/types`);
                if (response.data.success) {
                    setPropertyType(response.data.data);
                } else {
                    toast.error('Failed to load types');
                }
            } catch (error) {
                console.error('Error fetching types:', error);
                toast.error('An error occurred while fetching types');
            }
        };

        fetchProperty();
        fetchLocations();
        fetchPropertyCategories();
        fetchPropertyTypes();

        // Set vendor ID from sessionStorage
        const user = JSON.parse(sessionStorage.getItem('hansBuilderUser'));
        if (user && user._id) {
            setFormData(prevState => ({ ...prevState, vendor: user._id }));
        } else {
            toast.error('Vendor ID not found in session storage');
        }
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleStateChange = (state) => {
        setCurrentState(state);
        const locality = locations.find(loc => loc.state === state)?.locality || [];
        setCurrentLocality(locality[0] || '');
        const locationId = locations.find(loc => loc.state === state)?._id || '';
        setFormData(prevState => ({
            ...prevState,
            state,
            locality: locality[0] || '',
            location: locationId
        }));
    };

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setFormData(prevState => ({ ...prevState, images: files }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const data = new FormData();
        for (const key in formData) {
            if (Array.isArray(formData[key])) {
                formData[key].forEach(file => {
                    data.append('images', file);
                });
            } else {
                data.append(key, formData[key]);
            }
        }

        try {
            const response = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/update-property/${id}`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            toast.success('Property Updated Successfully');
            navigate('/all-properties');
        } catch (error) {
            console.error('There was an error!', error);
            toast.error(error.response?.data?.message || 'An error occurred');
        } finally {
            setIsLoading(false);
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
                        <input type="text" onChange={handleInputChange} name="title" value={formData.title} className="form-control" id="title" required />
                    </div>

                    <div className="col-md-4">
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea onChange={handleInputChange} name="description" value={formData.description} className="form-control" id="description" required></textarea>
                    </div>

                    <div className="col-md-4">
                        <label htmlFor="type" className="form-label">Type</label>
                        <select onChange={handleInputChange} name="type" value={formData.type} className="form-select" id="type" required>
                            {propertyType && propertyType.map((type, ind) => (
                                <option key={ind} value={type}>{type}</option>
                            ))}
                        </select>
                    </div>

                    <div className="col-md-4">
                        <label htmlFor="category" className="form-label">Category</label>
                        <select onChange={handleInputChange} name="category" value={formData.category} className="form-select" id="category" required>
                            {propertyCategory && propertyCategory.map((category) => (
                                <option key={category} value={category}>{category}</option>
                            ))}
                        </select>
                    </div>

                    <div className="col-md-4">
                        <label htmlFor="price" className="form-label">Price</label>
                        <input type="number" onChange={handleInputChange} name="price" value={formData.price} className="form-control" id="price" required />
                    </div>

                    <div className="col-md-4">
                        <label htmlFor="areaSize" className="form-label">Area Size (sq ft)</label>
                        <input type="text" onChange={handleInputChange} name="areaSize" value={formData.areaSize} className="form-control" id="areaSize" required />
                    </div>

                    <div className="col-md-4">
                        <label htmlFor="bedrooms" className="form-label">Bedrooms</label>
                        <input type="number" onChange={handleInputChange} name="bedrooms" value={formData.bedrooms} className="form-control" id="bedrooms" />
                    </div>

                    <div className="col-md-4">
                        <label htmlFor="bathrooms" className="form-label">Bathrooms</label>
                        <input type="number" onChange={handleInputChange} name="bathrooms" value={formData.bathrooms} className="form-control" id="bathrooms" />
                    </div>

                    <div className="col-md-4">
                        <label htmlFor="yearBuilt" className="form-label">Year Built</label>
                        <input type="number" onChange={handleInputChange} name="yearBuilt" value={formData.yearBuilt} className="form-control" id="yearBuilt" />
                    </div>

                    <div className="col-md-4">
                        <label htmlFor="state" className="form-label">State</label>
                        <select onChange={(e) => handleStateChange(e.target.value)} name="state" value={currentState} className="form-select" id="state" required>
                            {locations.map((location) => (
                                <option key={location._id} value={location.state}>{location.state}</option>
                            ))}
                        </select>
                    </div>

                    <div className="col-md-4">
                        <label htmlFor="locality" className="form-label">Locality</label>
                        <select onChange={handleInputChange} name="locality" value={currentLocality} className="form-select" id="locality" required>
                            {locations.find(loc => loc.state === currentState)?.locality.map((loc, index) => (
                                <option key={index} value={loc}>{loc}</option>
                            ))}
                        </select>
                    </div>

                    <div className="col-md-4">
                        <label htmlFor="status" className="form-label">Status</label>
                        <select onChange={handleInputChange} name="status" value={formData.status} className="form-select" id="status" required>
                            <option value="Pending">Pending</option>
                            <option value="Approved">Approved</option>
                            <option value="Rejected">Rejected</option>
                        </select>
                    </div>

                    <div className="col-md-4">
                        <label htmlFor="images" className="form-label">Images</label>
                        <input type="file" onChange={handleFileChange} name="images" multiple className="form-control" id="images" />
                    </div>

                    <div className="col-12">
                        <button type="submit" className="btn btn-primary" disabled={isLoading}>
                            {isLoading ? 'Updating...' : 'Update Property'}
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default EditProperty;
