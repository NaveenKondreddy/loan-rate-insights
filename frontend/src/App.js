// Import necessary modules
import React, { useEffect, useState } from "react";
import axios from "axios";

// Define the API URL from environment variables
const API_URL = process.env.REACT_APP_API_URL;

function App() {
    // State to store best and worst days data
    const [bestWorstDays, setBestWorstDays] = useState(null);
    // State to store error messages
    const [error, setError] = useState(null);

    // useEffect hook to fetch data when the component mounts
    useEffect(() => {
        const fetchData = async () => {
            try {
                const bestWorstRes = await axios.get(`${API_URL}/best-worst-days`);
                setBestWorstDays(bestWorstRes.data);
            } catch (err) {
                setError("Failed to load data. Please try again later.");
                console.error("Error fetching data:", err);
            }
        };

        fetchData();
    }, []);

    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
            <h1>Loan Rate Insights</h1>

            {error ? (
                // Display error message if there is an error
                <h2 style={{ color: "red" }}>{error}</h2>
            ) : bestWorstDays ? (
                // Display best and worst days if data is available
                <>
                    <h2>Best Day(s): {bestWorstDays.bestDays ? bestWorstDays.bestDays.join(", ") : "N/A"}</h2>
                    <h2>Worst Day(s): {bestWorstDays.worstDays ? bestWorstDays.worstDays.join(", ") : "N/A"}</h2>
                </>
            ) : (
                // Display loading message while data is being fetched
                <h2>Loading best and worst days...</h2>
            )}
        </div>
    );
}

export default App;