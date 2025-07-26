import React from "react";
import "./ShippingForm.css"; // custom styles

export default function ShippingForm({ state, handleChange }) {
  const { address, city, pincode } = state;

  return (
    <section className="shipping-form">
      <div className="form-group">
        <label htmlFor="address">Address</label>
        <textarea
          id="address"
          value={address}
          rows={4}
          onChange={(e) =>
            handleChange({ name: "address", value: e.target.value })
          }
        />
      </div>
      <div className="form-group">
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={(e) =>
            handleChange({ name: "city", value: e.target.value })
          }
        />
      </div>
      <div className="form-group">
        <label htmlFor="pincode">Pincode</label>
        <input
          type="number"
          id="pincode"
          value={pincode}
          onChange={(e) =>
            handleChange({ name: "pincode", value: e.target.value })
          }
        />
      </div>
    </section>
  );
}
