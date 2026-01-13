import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchGigs } from "../api/gigApi";
import { useSelector } from "react-redux";
import BidForm from "../components/BidForm";

const Dashboard = () => {
  const [gigs, setGigs] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    const loadGigs = async () => {
      try {
        const res = await fetchGigs(search);
        setGigs(res.data);
      } catch (err) {
        console.error("Failed to fetch gigs", err);
      } finally {
        setLoading(false);
      }
    };

    loadGigs();
  }, [search]);

  if (loading) return <p className="p-6">Loading gigs...</p>;

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Open Gigs</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search gigs by title..."
          className="border p-2 w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {gigs.length === 0 && <p>No open gigs available.</p>}

      {gigs.map((gig) => {
        const isOwner = gig.ownerId._id === user.id;

        return (
          <div key={gig._id} className="border rounded p-4 space-y-2">
            <h2 className="text-lg font-semibold">{gig.title}</h2>
            <p>{gig.description}</p>
            <p className="text-sm text-gray-600">Budget: ₹{gig.budget}</p>
            <p className="text-sm">Owner: {gig.ownerId.name}</p>

            {isOwner && (
              <Link
                to={`/gigs/${gig._id}/bids`}
                className="inline-block text-blue-600 underline"
              >
                View Bids
              </Link>
            )}

            {/* FREELANCER ACTION */}
            {!isOwner && <BidForm gigId={gig._id} />}
          </div>
        );
      })}
    </div>
  );
};

export default Dashboard;
