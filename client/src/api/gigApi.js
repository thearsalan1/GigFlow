import api from "./axios";

export const fetchGigs = (search = "") => {
  return api.get(`/gigs?search=${search}`);
};

export const createGig = (data) => {
  return api.post("/gigs", data);
};
