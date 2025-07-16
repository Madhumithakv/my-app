'use client';
import { useState } from "react";

export default function RegistrationPage() {
  const [form, setForm] = useState({
    username: "",
    gender: "",
    phone: "",
    email: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const result = await res.json();
    alert(result.message);
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input name="username" placeholder="Username" onChange={handleChange} required />
        <select name="gender" onChange={handleChange} required>
          <option value="">Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>
        <input name="phone" placeholder="Phone" onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <button type="submit" className="bg-green-600 text-white py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}
