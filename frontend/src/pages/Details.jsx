import { useParams, useNavigate } from "react-router-dom";
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
    const navigate = useNavigate();

    const companies = [
        {
            id: "1",
            name: "ABC Pvt Ltd",
            type: "Small",
            revenue: [300000, 350000, 400000, 450000, 500000, 550000],
            expenses: [200000, 230000, 260000, 290000, 320000, 350000],
            healthScore: 78,
        },
        {
            id: "2",
            name: "XYZ Traders",
            type: "Micro",
            revenue: [200000, 220000, 240000, 260000, 280000, 300000],
            expenses: [180000, 200000, 220000, 240000, 260000, 280000],
            healthScore: 52,
        },
        {
            id: "3",
            name: "TechNova Solutions",
            type: "Medium",
            revenue: [400000, 450000, 500000, 550000, 600000, 650000],
            expenses: [250000, 280000, 300000, 320000, 350000, 380000],
            healthScore: 85,
        },
        {
            id: "4",
            name: "Apex Manufacturing",
            type: "Small",
            revenue: [300000, 280000, 260000, 250000, 240000, 230000],
            expenses: [260000, 250000, 240000, 235000, 230000, 225000],
            healthScore: 45,
        },
        {
            id: "5",
            name: "Global Exports",
            type: "Medium",
            revenue: [350000, 370000, 390000, 420000, 450000, 480000],
            expenses: [250000, 270000, 290000, 310000, 330000, 350000],
            healthScore: 67,
        },
        {
            id: "6",
            name: "Sunrise Traders",
            type: "Micro",
            revenue: [200000, 190000, 180000, 170000, 160000, 150000],
            expenses: [180000, 175000, 170000, 168000, 165000, 160000],
            healthScore: 35,
        },
    ];

    const company = companies.find((c) => c.id === id);

    const data = company.revenue.map((rev, i) => ({
        name: `Q${i + 1}`,
        revenue: rev,
        expenses: company.expenses[i],
    }));

    const latestRevenue = company.revenue.slice(-1)[0];
    const latestExpense = company.expenses.slice(-1)[0];
    const profit = latestRevenue - latestExpense;
    const margin = ((profit / latestRevenue) * 100).toFixed(1);
    const ebitda = Math.round(profit * 0.9);

    return (
        <div className="page-container">
            <div className="page-header">
                <h1 className="page-title">{company.name}</h1>
                <p className="page-subtitle">
                    {company.type} Business • Financial Overview
                </p>
            </div>

            <div className="grid-cards">
                <div className="card">
                    <div className="card-title">Revenue</div>
                    <div className="card-value">₹{latestRevenue}</div>
                </div>

                <div className="card">
                    <div className="card-title">Expenses</div>
                    <div className="card-value">₹{latestExpense}</div>
                </div>

                <div className="card">
                    <div className="card-title">Profit</div>
                    <div className="card-value">₹{profit}</div>
                </div>

                <div className="card">
                    <div className="card-title">EBITDA</div>
                    <div className="card-value">₹{ebitda}</div>
                </div>

                <div className="card">
                    <div className="card-title">Profit Margin</div>
                    <div className="card-value">{margin}%</div>
                </div>
            </div>

            {/* ✅ GRAPH + BUTTON FIX */}
            <div className="card">
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "16px",
                    }}
                >
                    <div className="card-title">
                        Revenue vs Expense Trend Analysis
                    </div>

                    <button
                        className="btn-action"
                        onClick={() => navigate(`/insights/${company.id}`)}
                    >
                        View AI Insights →
                    </button>
                </div>

                <LineChart width={800} height={300} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="revenue" stroke="#10b981" />
                    <Line type="monotone" dataKey="expenses" stroke="#ef4444" />
                </LineChart>
            </div>
        </div>
    );
}

export default Details;