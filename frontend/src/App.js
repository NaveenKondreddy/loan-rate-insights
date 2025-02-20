import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

function App() {
    const [bestWorstDays, setBestWorstDays] = useState(null);
    const [error, setError] = useState(null);

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
                <h2 style={{ color: "red" }}>{error}</h2>
            ) : bestWorstDays ? (
                <>
                    <h2>Best Day: {bestWorstDays.bestDay}</h2>
                    <h2>Worst Day: {bestWorstDays.worstDay}</h2>
                </>
            ) : (
                <h2>Loading best and worst days...</h2>
            )}
        </div>
    );
}

export default App;