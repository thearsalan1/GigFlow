import React, { useState } from "react";
import { createGig } from "../api/gigApi";

const CreateGig = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    budget: "",
  });
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await createGig(form);
      alert("Gig created successfully");
      setLoading(false);
    } catch (error) {}
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <form
        onSubmit={submitHandler}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Create a Gig
        </h2>

        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Title of gig
          </label>
          <input
            type="text"
            placeholder="Enter the title of the gig"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            onChange={(e) => {
              setForm({ ...form, title: e.target.value });
            }}
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <textarea
            placeholder="Enter the description of the gig"
            required
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            onChange={(e) => {
              setForm({ ...form, description: e.target.value });
            }}
          ></textarea>
        </div>

        {/* Budget */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Budget
          </label>
          <input
            type="number"
            placeholder="Enter the budget of the gig"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            onChange={(e) => setForm({ ...form, budget: e.target.value })}
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-200 font-semibold"
        >
          {loading ? <p>Creating Bid</p> : <p>Create Bid</p>}
        </button>
      </form>
    </div>
  );
};

export default CreateGig;
