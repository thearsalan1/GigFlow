import React, { useState } from "react";
import { createBid } from "../api/bidApi";

const BidForm = ({ gigId }) => {
  if (!gigId) return null;
  const [message, setMessage] = useState("");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!gigId) {
      alert("Invalid gig");
      return;
    }

    setLoading(true);

    try {
      await createBid({
        gigId,
        message: message.trim(),
        price: Number(price),
      });

      setMessage("");
      setPrice("");
      alert("Bid submitted successfully!");
    } catch (err) {
      console.error(err.response?.data);
      alert(err.response?.data?.message || "Failed to submit bid");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submitHandler} className="mt-2 flex space-x-2">
      <input
        type="text"
        placeholder="Message"
        className="border p-1 flex-1"
        required
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter Price"
        className="border p-1 w-24"
        required
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-black text-white px-3 py-1 cursor-pointer disabled:opacity-50"
      >
        {loading ? "Submitting..." : "Bid"}
      </button>
    </form>
  );
};

export default BidForm;
