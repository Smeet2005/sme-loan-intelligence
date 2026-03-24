import { useParams, useNavigate } from "react-router-dom";

function Insights() {
    const { id } = useParams();
    const navigate = useNavigate();

    const companies = [
        { id: "1", name: "ABC Pvt Ltd", revenue: 550000, expenses: 350000, healthScore: 78 },
        { id: "2", name: "XYZ Traders", revenue: 300000, expenses: 280000, healthScore: 52 },
        { id: "3", name: "TechNova Solutions", revenue: 650000, expenses: 380000, healthScore: 85 },
        { id: "4", name: "Apex Manufacturing", revenue: 230000, expenses: 225000, healthScore: 45 },
        { id: "5", name: "Global Exports", revenue: 480000, expenses: 350000, healthScore: 67 },
        { id: "6", name: "Sunrise Traders", revenue: 150000, expenses: 160000, healthScore: 35 },
    ];

    const company = companies.find((c) => c.id === id);

    if (!company) return <div className="page-container">Company not found</div>;

    // 🔥 Calculations
    const profit = company.revenue - company.expenses;
    const margin = (profit / company.revenue) * 100;
    const expenseRatio = (company.expenses / company.revenue) * 100;
    const ebitda = profit * 0.9;

    // 🔥 Decision logic
    let decision = "";
    let decisionClass = "";
    let insights = [];
    let recommendation = "";

    if (company.healthScore >= 75 && margin > 20) {
        decision = "Approved";
        decisionClass = "success";

        insights = [
            "Strong profit margin indicates efficient operations",
            "Stable revenue growth observed across periods",
            "Low expense ratio suggests good cost management",
        ];

        recommendation =
            "Eligible for loan with favorable terms due to strong financial performance.";
    } else if (company.healthScore >= 50) {
        decision = "Review";
        decisionClass = "warning";

        insights = [
            "Moderate profit margins indicate average performance",
            "Expense ratio is slightly high and needs monitoring",
            "Revenue consistency is acceptable but not strong",
        ];

        recommendation =
            "Proceed with caution. Manual review recommended before approval.";
    } else {
        decision = "Rejected";
        decisionClass = "danger";

        insights = [
            "Low profitability indicates weak financial health",
            "High expenses relative to revenue increase risk",
            "Unstable performance makes loan risky",
        ];

        recommendation =
            "Not eligible for loan currently. Financial improvement required.";
    }

    return (
        <div className="page-container">

            {/* HEADER */}
            <div className="page-header">
                <h1 className="page-title">{company.name} - Insights</h1>
                <p className="page-subtitle">AI-driven Financial Evaluation</p>
            </div>

            {/* DECISION */}
            <div className="card" style={{ marginBottom: "24px" }}>
                <div className="card-title">Loan Decision</div>

                <div
                    className={`badge ${decisionClass}`}
                    style={{
                        fontSize: "20px",
                        padding: "10px 18px",
                        marginTop: "10px",
                    }}
                >
                    {decision}
                </div>
            </div>

            {/* METRICS */}
            <div className="grid-cards">

                <div className="card">
                    <div className="card-title">EBITDA</div>
                    <div className="card-value">₹{Math.round(ebitda)}</div>
                </div>

                <div className="card">
                    <div className="card-title">Profit Margin</div>
                    <div className="card-value">{margin.toFixed(1)}%</div>
                </div>

                <div className="card">
                    <div className="card-title">Expense Ratio</div>
                    <div className="card-value">{expenseRatio.toFixed(1)}%</div>
                </div>

                <div className="card">
                    <div className="card-title">Health Score</div>
                    <div className="card-value">{company.healthScore}</div>
                </div>

            </div>

            {/* AI REASONING */}
            <div className="card" style={{ marginTop: "24px" }}>
                <div className="card-title">AI Reasoning</div>

                {insights.map((point, index) => (
                    <div key={index} className="insight-point">
                        <div>⚡</div>
                        <p>{point}</p>
                    </div>
                ))}
            </div>

            {/* RECOMMENDATION */}
            <div className="card" style={{ marginTop: "24px" }}>
                <div className="card-title">Recommendation</div>
                <p className="card-desc">{recommendation}</p>
            </div>

            {/* 🔥 BUTTON TO LOAN PAGE */}
            <div style={{ marginTop: "24px" }}>
                <button
                    className="btn-action"
                    onClick={() => navigate(`/loan/${company.id}`)}
                >
                    View Loan Decision →
                </button>
            </div>

        </div>
    );
}

export default Insights;