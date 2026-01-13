import React, { useEffect, useState } from "react";
import { fetchBids, hireBid } from "../api/bidApi";
import { useNavigate, useParams } from "react-router-dom";

const GigBids = () => {
  const [bids, setBids] = useState([]);
  const { gigId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchBids(gigId).then((res) => {
      console.log("API response:", res.data);
      setBids(res.data.bids); 
    });
  }, [gigId]);

  const hire = async (bidId) => {
    await hireBid(bidId);
    alert("Freelancer hired successfully");
    fetchBids(gigId).then((res) => setBids(res.data.bids)); 
    navigate("/");
  };

  return (
    <div className="space-y-4 p-5">
      {bids.length === 0 ? (
        <div>No Bids on Gig available</div>
      ) : (
        bids.map((bid) => (
          <div
            key={bid._id}
            className="p-4 border rounded-lg shadow-sm bg-white"
          >
            <p className="font-semibold">{bid.freelancerId.name}</p>
            <p className="text-gray-600">{bid.message}</p>
            <p className="text-indigo-600 font-bold">₹{bid.price}</p>

            {bid.status === "pending" && (
              <button
                onClick={() => hire(bid._id)}
                className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
              >
                Hire
              </button>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default GigBids;
