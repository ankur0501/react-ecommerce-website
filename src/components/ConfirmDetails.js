import React from "react";
import "./ConfirmDetails.css";

export default function ConfirmDetails({ state }) {
  const { firstName, lastName, email, address, city, pincode } = state;

  return (
    <div className="details-container">
      <div className="card">
        <h2 className="card-title">Personal Details</h2>
        <div className="detail-row">
          <span className="label">First Name:</span>
          <span className="value">{firstName}</span>
        </div>
        <div className="detail-row">
          <span className="label">Last Name:</span>
          <span className="value">{lastName ? lastName : "-NA-"}</span>
        </div>
        <div className="detail-row">
          <span className="label">Email:</span>
          <span className="value">{email}</span>
        </div>
      </div>

      <div className="card">
        <h2 className="card-title">Shipping Address</h2>
        <div className="detail-row">
          <span className="label">Address:</span>
          <span className="value">{address}</span>
        </div>
        <div className="detail-row">
          <span className="label">City:</span>
          <span className="value">{city}</span>
        </div>
        <div className="detail-row">
          <span className="label">Pincode:</span>
          <span className="value">{pincode}</span>
        </div>
      </div>
    </div>
  );
}
