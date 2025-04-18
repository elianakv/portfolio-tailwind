import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully!");
      // Reset the form or send to backend/email API
    }
  };

  return (
    <div className="p-6 bg-cornflower min-h-screen text-center text-darkbrown">
      <h1 className="text-4xl font-bold text-white mb-4">Contact Me</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded shadow">
        <div className="mb-4">
          <label className="block text-left mb-1">Name</label>
          <input name="name" onChange={handleChange} className="w-full border p-2 rounded" />
          {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-left mb-1">Email</label>
          <input name="email" onChange={handleChange} className="w-full border p-2 rounded" />
          {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-left mb-1">Message</label>
          <textarea name="message" onChange={handleChange} className="w-full border p-2 rounded" />
          {errors.message && <p className="text-red-600 text-sm">{errors.message}</p>}
        </div>

        <button type="submit" className="bg-royalblue text-white px-4 py-2 rounded">
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;
