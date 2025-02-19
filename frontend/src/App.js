import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
    const [rates, setRates] = useState([]);
    const [bestWorstDays, setBestWorstDays] = useState({});

    useEffect(() => {
        axios.get("http://localhost:5000/rates")
            .then(res => setRates(res.data))
            .catch(err => console.log(err));

        axios.get("http://localhost:5000/best-worst-days")
            .then(res => setBestWorstDays(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
            <h1>Loan Rate Insights</h1>
            <h2>Best Day: {bestWorstDays.bestDay}</h2>
            <h2>Worst Day: {bestWorstDays.worstDay}</h2>

            {/* <h3>Historical Rates:</h3>
            <ul>
                {rates.map((rate, index) => (
                    <li key={index}>{rate.date}: {rate.rate}%</li>
                ))}
            </ul> */}
        </div>
    );
}

export default App;
  