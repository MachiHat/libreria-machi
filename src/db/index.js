// import axios from "axios";

const bToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYyMzJhNzE5LThiOTUtNGY0NC04MGVmLTczNWFhYmIzNTg0YiIsInR5cGUiOlsicmVndWxhciJdLCJlbWFpbCI6ImFqYXRpYkBnbWFpbC5jb20iLCJpYXQiOjE2NTU5MDUxMDAsImV4cCI6MTY2NTkwNTA5OX0.RVdyEjLsLJfhWa3cVcNZIVcNSP65de7TVDK7MzJuAFA";

export const config = {
  url:
    "http://be8d-2803-9800-a443-82a2-29a6-9bb7-af82-9d80.ngrok.io/api/v1/providers/",
  headers: { "Authorization": `Bearer ${bToken}` },
};