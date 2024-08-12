import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const AllProperty = () => {
    const [properties, setProperties] = useState([]);
    const [filteredProperties, setFilteredProperties] = useState([]);
    const [locations, setLocations] = useState([]);
    const [currentProperty, setCurrentProperty] = useState({
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
    const [modalType, setModalType] = useState('add'); // 'add' or 'edit'
    const [showModal, setShowModal] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [currentState, setCurrentState] = useState('');
    const [currentLocality, setCurrentLocality] = useState('');

    // --- Pagination ---
    const [currentPage, setCurrentPage] = useState(1);
    const itemPerPage = 8;

    const handleFetch = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/get-all-property`);
            const main = res.data.data.reverse(); // Reversing the data
            setProperties(main);
            setFilteredProperties(main); // Set initial filtered properties
        } catch (error) {
            console.error('There was an error fetching the Properties!', error);
        }
    };

    const handleFetchLocations = async () => {
        try {
            const res = await axios.get('http://localhost:5500/api/v1/get-all-location');
            setLocations(res.data.data);
        } catch (error) {
            console.error('There was an error fetching the Locations!', error);
        }
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const indexOfLastItem = currentPage * itemPerPage;
    const indexOfFirstItem = indexOfLastItem - itemPerPage;
    const currentItems = filteredProperties.slice(indexOfFirstItem, indexOfLastItem);

    useEffect(() => {
        handleFetch();
        handleFetchLocations();
    }, []);

    useEffect(() => {
        const tempProperties = properties.filter(property =>
            property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            property.description.toLowerCase().includes(searchQuery.toLowerCase())
        );

        setFilteredProperties(tempProperties);
    }, [searchQuery, properties]);

    const handleDelete = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/delete-property/${id}`);
                    toast.success("Property Deleted Successfully");
                    handleFetch();

                    Swal.fire({
                        title: "Deleted!",
                        text: "Your Property has been deleted.",
                        icon: "success"
                    });
                } catch (error) {
                    console.error(error);
                    toast.error(error.response?.data?.message || 'An error occurred');
                }
            }
        });
    };

    const handleAddOrUpdate = async () => {
        const url = modalType === 'add'
            ? `${process.env.REACT_APP_BACKEND_URL}/create-property`
            : `${process.env.REACT_APP_BACKEND_URL}/update-property/${currentProperty._id}`;

        const method = modalType === 'add' ? 'post' : 'put';

        try {
            const res = await axios[method](url, currentProperty);
            toast.success(`Property ${modalType === 'add' ? 'Added' : 'Updated'} Successfully`);
            setShowModal(false);
            handleFetch();
        } catch (error) {
            console.error('There was an error!', error);
            toast.error(error.response?.data?.message || 'An error occurred');
        }
    };

    const openModal = (type, property = {
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
    }) => {
        setModalType(type);
        setCurrentProperty(property);
        if (property.location) {
            const location = locations.find(loc => loc._id === property.location);
            setCurrentState(location?.state || '');
            setCurrentLocality(location?.locality[0] || '');
        }
        setShowModal(true);
    };

    const handleStateChange = (state) => {
        setCurrentState(state);
        const locality = locations.find(loc => loc.state === state)?.locality || [];
        setCurrentLocality(locality[0] || '');
    };

    return (
        <>
            <ToastContainer />
            <div className="bread">
                <div className="head">
                    <h4>All Properties</h4>
                </div>
                <div className="links">
                    <button onClick={() => openModal('add')} className="add-new">Add New <i className="fa-solid fa-plus"></i></button>
                </div>
            </div>

            <div className="filteration">
                <div className="search">
                    <label htmlFor="search">Search </label> &nbsp;
                    <input
                        type="text"
                        name="search"
                        id="search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            <section className="d-table">
                <table className="table table-bordered table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Sr.No.</th>
                            <th scope="col">Title</th>
                            <th scope="col">Description</th>
                            <th scope="col">Price</th>
                            <th scope="col">Location</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((property, index) => (
                            <tr key={property._id}>
                                <th scope="row">{indexOfFirstItem + index + 1}</th>
                                <td>{property.title}</td>
                                <td>{property.description}</td>
                                <td>{property.price}</td>
                                <td>{property.location}</td>
                                <td>
                                    <button onClick={() => openModal('edit', property)} className="bt edit">
                                        Edit <i className="fa-solid fa-pen-to-square"></i>
                                    </button>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(property._id)} className="bt delete">
                                        Delete <i className="fa-solid fa-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <nav>
                    <ul className="pagination justify-content-center">
                        {Array.from({ length: Math.ceil(filteredProperties.length / itemPerPage) }, (_, i) => (
                            <li key={i + 1} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                                <button className="page-link" onClick={() => handlePageChange(i + 1)}>{i + 1}</button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </section>

            {/* Modal for Add/Edit Property */}
            {showModal && (
                <div className="modal show d-block" tabIndex="-1">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{modalType === 'add' ? 'Add New Property' : 'Edit Property'}</h5>
                                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                            </div>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="title" value={currentProperty.title} onChange={(e) => setCurrentProperty({ ...currentProperty, title: e.target.value })} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <textarea className="form-control" id="description" rows="3" value={currentProperty.description} onChange={(e) => setCurrentProperty({ ...currentProperty, description: e.target.value })}></textarea>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="type" className="form-label">Type</label>
                                    <select className="form-select" id="type" value={currentProperty.type} onChange={(e) => setCurrentProperty({ ...currentProperty, type: e.target.value })}>
                                        <option value="Rent">Rent</option>
                                        <option value="Sale">Sale</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="category" className="form-label">Category</label>
                                    <select className="form-select" id="category" value={currentProperty.category} onChange={(e) => setCurrentProperty({ ...currentProperty, category: e.target.value })}>
                                        <option value="Floor">Floor</option>
                                        <option value="Apartment">Apartment</option>
                                        <option value="PG">PG</option>
                                        <option value="House">House</option>
                                        <option value="Rooms">Rooms</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="price" className="form-label">Price</label>
                                    <input type="number" className="form-control" id="price" value={currentProperty.price} onChange={(e) => setCurrentProperty({ ...currentProperty, price: e.target.value })} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="areaSize" className="form-label">Area Size</label>
                                    <input type="text" className="form-control" id="areaSize" value={currentProperty.areaSize} onChange={(e) => setCurrentProperty({ ...currentProperty, areaSize: e.target.value })} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="bedrooms" className="form-label">Bedrooms</label>
                                    <input type="number" className="form-control" id="bedrooms" value={currentProperty.bedrooms} onChange={(e) => setCurrentProperty({ ...currentProperty, bedrooms: e.target.value })} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="bathrooms" className="form-label">Bathrooms</label>
                                    <input type="number" className="form-control" id="bathrooms" value={currentProperty.bathrooms} onChange={(e) => setCurrentProperty({ ...currentProperty, bathrooms: e.target.value })} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="yearBuilt" className="form-label">Year Built</label>
                                    <input type="number" className="form-control" id="yearBuilt" value={currentProperty.yearBuilt} onChange={(e) => setCurrentProperty({ ...currentProperty, yearBuilt: e.target.value })} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="state" className="form-label">State</label>
                                    <select className="form-select" id="state" value={currentState} onChange={(e) => handleStateChange(e.target.value)}>
                                        <option value="">Select State</option>
                                        {locations.map(loc => (
                                            <option key={loc._id} value={loc.state}>{loc.state}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="locality" className="form-label">Locality</label>
                                    <select className="form-select" id="locality" value={currentLocality} onChange={(e) => setCurrentLocality(e.target.value)}>
                                        <option value="">Select Locality</option>
                                        {(locations.find(loc => loc.state === currentState)?.locality || []).map((loc, index) => (
                                            <option key={index} value={loc}>{loc}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="mapLink" className="form-label">Map Link</label>
                                    <input type="text" className="form-control" id="mapLink" value={currentProperty.mapLink} onChange={(e) => setCurrentProperty({ ...currentProperty, mapLink: e.target.value })} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="vendor" className="form-label">Vendor</label>
                                    <input type="text" className="form-control" id="vendor" value={currentProperty.vendor} onChange={(e) => setCurrentProperty({ ...currentProperty, vendor: e.target.value })} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="status" className="form-label">Status</label>
                                    <select className="form-select" id="status" value={currentProperty.status} onChange={(e) => setCurrentProperty({ ...currentProperty, status: e.target.value })}>
                                        <option value="Pending">Pending</option>
                                        <option value="Approved">Approved</option>
                                        <option value="Rejected">Rejected</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="images" className="form-label">Images (Comma Separated URLs)</label>
                                    <input type="text" className="form-control" id="images" value={currentProperty.images.join(',')} onChange={(e) => setCurrentProperty({ ...currentProperty, images: e.target.value.split(',') })} />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
                                <button type="button" className="btn btn-primary" onClick={handleAddOrUpdate}>{modalType === 'add' ? 'Add Property' : 'Update Property'}</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default AllProperty;
