import React, { useState } from 'react';
import './ProfileSection.css'; // Import CSS for styling

const ProfileSection = () => {
  const [user, setUser] = useState({
    username: 'example_user',
    email: 'user@example.com',
    fullName: 'John Doe',
    location: 'City, Country',
    phoneNumber: '+1234567890',
    // Add more user profile data as needed
  });

  const [editMode, setEditMode] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({ ...user });

  const handleEditProfile = () => {
    setEditMode(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser({ ...updatedUser, [name]: value });
  };

  const handleSaveProfile = () => {
    setUser({ ...updatedUser });
    setEditMode(false);
  };

  return (
    <div className="profile-section">
      <h2 className="section-title">Profile Information</h2>
      {editMode ? (
        <div className="profile-details-edit">
          <div className="detail">
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={updatedUser.username}
              onChange={handleInputChange}
            />
          </div>
          <div className="detail">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={updatedUser.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="detail">
            <label>Full Name:</label>
            <input
              type="text"
              name="fullName"
              value={updatedUser.fullName}
              onChange={handleInputChange}
            />
          </div>
          <div className="detail">
            <label>Location:</label>
            <input
              type="text"
              name="location"
              value={updatedUser.location}
              onChange={handleInputChange}
            />
          </div>
          <div className="detail">
            <label>Phone Number:</label>
            <input
              type="text"
              name="phoneNumber"
              value={updatedUser.phoneNumber}
              onChange={handleInputChange}
            />
          </div>
          {/* Add more profile details as needed */}
          <button className="save-profile-btn" onClick={handleSaveProfile}>Save</button>
        </div>
      ) : (
        <div className="profile-details">
          <div className="detail">
            <label>Username:</label>
            <span>{user.username}</span>
          </div>
          <div className="detail">
            <label>Email:</label>
            <span>{user.email}</span>
          </div>
          <div className="detail">
            <label>Full Name:</label>
            <span>{user.fullName}</span>
          </div>
          <div className="detail">
            <label>Location:</label>
            <span>{user.location}</span>
          </div>
          <div className="detail">
            <label>Phone Number:</label>
            <span>{user.phoneNumber}</span>
          </div>
          {/* Add more profile details as needed */}
          <button className="edit-profile-btn" onClick={handleEditProfile}>Edit Profile</button>
        </div>
      )}
    </div>
  );
};

export default ProfileSection;
