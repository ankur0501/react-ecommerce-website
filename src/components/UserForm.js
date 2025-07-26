import React from "react";
import "./UserForm.css"; // external styles

export default function UserForm({ state, handleChange }) {
  const { firstName, lastName, email } = state;

  return (
    <section className="user-form">
      <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) =>
            handleChange({ name: "firstName", value: e.target.value })
          }
        />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) =>
            handleChange({ name: "lastName", value: e.target.value })
          }
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) =>
            handleChange({ name: "email", value: e.target.value })
          }
        />
      </div>
    </section>
  );
}
