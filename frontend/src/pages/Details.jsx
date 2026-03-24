import { useParams } from "react-router-dom";
import { companies } from "../data/companies";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
} from "recharts";

function Details() {
    const { id } = useParams();

    const company = companies.find((c) => c.id === Number(id));

    if (!company) return <h2>Company not found</h2>;

    // Financial calculations
    const profit = company.revenue - company.expenses;
    const ebitda = profit * 0.9;
    const margin = ((profit / company.revenue) * 100).toFixed(1);

    // Fake 2-year trend data
    const data = [
        { year: "2023 Q1", revenue: company.revenue * 0.6 },
        { year: "2023 Q2", revenue: company.revenue * 0.7 },
        { year: "2023 Q3", revenue: company.revenue * 0.8 },
        { year: "2023 Q4", revenue: company.revenue * 0.9 },
        { year: "2024 Q1", revenue: company.revenue * 1.0 },
        { year: "2024 Q2", revenue: company.revenue * 1.1 },
    ];

    return (
        <div className="page-container">
            <div className="page-header">
                <h1 className="page-title">{company.name}</h1>
                <p className="page-subtitle">Financial Insights & Evaluation</p>
            </div>

            {/* KPI CARDS */}
            <div className="grid-cards">
                <div className="card">
                    <div className="card-title">Revenue</div>
                    <div className="card-value">₹{company.revenue}</div>
                </div>

                <div className="card">
                    <div className="card-title">Expenses</div>
                    <div className="card-value">₹{company.expenses}</div>
                </div>

                <div className="card">
                    <div className="card-title">Profit</div>
                    <div className="card-value">₹{profit}</div>
                </div>

                <div className="card">
                    <div className="card-title">EBITDA</div>
                    <div className="card-value">₹{Math.round(ebitda)}</div>
                </div>

                <div className="card">
                    <div className="card-title">Profit Margin</div>
                    <div className="card-value">{margin}%</div>
                </div>
            </div>

            {/* GRAPH */}
            <div className="card">
                <h3 className="card-title">Revenue Trend (2 Years)</h3>

                <LineChart width={700} height={300} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="revenue" stroke="#10b981" />
                </LineChart>
            </div>
        </div>
    );
}

export default Details;