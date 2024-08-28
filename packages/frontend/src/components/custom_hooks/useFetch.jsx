import React, { useState, useEffect } from "react";

function useFetch() {
  const [data, setData] = useState([]);

  async function fetchData() {
    const fetchURL = await fetch("http://localhost:3000/");
    const jsonData = await fetchURL.json();
    setData(jsonData);
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);
  return { dataUsers: data };
}

export default useFetch;
