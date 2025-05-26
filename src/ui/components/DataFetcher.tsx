"use client";

import { useEffect } from "react";

export const DataFetcher = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL + "capybara/names");
        const data = await response.json();
        console.log("Fetched data:", data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Initial fetch
    fetchData();

    // Set up interval for fetching every 10 minutes (600,000 milliseconds)
    const intervalId = setInterval(fetchData, 600000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return null; // This component doesn't render anything
}; 