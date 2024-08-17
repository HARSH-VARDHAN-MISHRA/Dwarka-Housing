import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get user data from session storage
    const storedUser = JSON.parse(sessionStorage.getItem('hansBuilderUser'));
    
    if (storedUser) {
      setUserData(storedUser);
      
      // Fetch properties listed by the user
      axios.get(`${process.env.REACT_APP_BACKEND_URL}/get-properties-by-vendor/${storedUser._id}`)
        .then(response => {
          setProperties(response.data.data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching properties:', error);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!userData) {
    return <div>User not found</div>;
  }

  return (
    <div className="container mt-4">
      <h2>Profile</h2>
      <div className="profile-details">
        <p><strong>Name:</strong> {userData.name}</p>
        <p><strong>Email:</strong> {userData.email}</p>
        <p><strong>Phone Number:</strong> {userData.phoneNumber}</p>
        <p><strong>Role:</strong> {userData.role}</p>
        <p><strong>Account Created At:</strong> {new Date(userData.createdAt).toLocaleDateString()}</p>
      </div>

      <h3 className="mt-4">Listed Properties</h3>
      {properties.length > 0 ? (
        <div className="row">
          {properties.map(property => (
            <div className="col-md-4 mb-3" key={property._id}>
              <div className="card">
                <img src={property.images[0]} className="card-img-top" alt={property.title} />
                <div className="card-body">
                  <h5 className="card-title">{property.title}</h5>
                  <p className="card-text">{property.description}</p>
                  <p><strong>Price:</strong> ₹{property.price.toLocaleString()}</p>
                  <p><strong>Category:</strong> {property.category}</p>
                  <p><strong>Type:</strong> {property.type}</p>
                  <p><strong>Location:</strong> {property.locality}, {property.state}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No properties listed.</p>
      )}

      <div className="mt-4">
        <Link to="/add-property" className="btn btn-primary">
          Add New Property
        </Link>
      </div>
    </div>
  );
};

export default Profile;
