import { useParams } from "react-router-dom";

function Loan() {
    const { id } = useParams();

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

    const profit = company.revenue - company.expenses;
    const margin = (profit / company.revenue) * 100;

    let status = "";
    let statusClass = "";
    let loanAmount = 0;
    let risk = "";
    let summary = "";
    let action = "";

    // 🔥 FINAL DECISION LOGIC
    if (company.healthScore >= 75 && margin > 20) {
        status = "Eligible";
        statusClass = "success";
        loanAmount = Math.round(company.revenue * 0.5);
        risk = "Low Risk";
        summary = "Strong financial performance with stable revenue and high profitability.";
        action = "Proceed to loan approval.";
    } else if (company.healthScore >= 50) {
        status = "Conditional";
        statusClass = "warning";
        loanAmount = Math.round(company.revenue * 0.3);
        risk = "Medium Risk";
        summary = "Moderate financial stability. Some risk due to margin fluctuations.";
        action = "Require manual verification before approval.";
    } else {
        status = "Not Eligible";
        statusClass = "danger";
        loanAmount = 0;
        risk = "High Risk";
        summary = "Low profitability and high expenses indicate financial instability.";
        action = "Recommend financial improvement before applying again.";
    }

    return (
        <div className="page-container">

            {/* HEADER */}
            <div className="page-header">
                <h1 className="page-title">{company.name}</h1>
                <p className="page-subtitle">Loan Evaluation Result</p>
            </div>

            {/* STATUS */}
            <div className="card" style={{ textAlign: "center", marginBottom: "24px" }}>
                <div className="card-title">Loan Status</div>

                <div
                    className={`badge ${statusClass}`}
                    style={{
                        fontSize: "22px",
                        padding: "12px 24px",
                        marginTop: "10px",
                    }}
                >
                    {status}
                </div>
            </div>

            {/* MAIN INFO */}
            <div className="grid-cards">

                <div className="card">
                    <div className="card-title">Approved Loan Amount</div>
                    <div className="card-value">
                        ₹{loanAmount.toLocaleString()}
                    </div>
                </div>

                <div className="card">
                    <div className="card-title">Risk Level</div>
                    <div className="card-value">{risk}</div>
                </div>

            </div>

            {/* SUMMARY */}
            <div className="card" style={{ marginTop: "24px" }}>
                <div className="card-title">Final Summary</div>
                <p className="card-desc">{summary}</p>
            </div>

            {/* ACTION */}
            <div className="card" style={{ marginTop: "24px" }}>
                <div className="card-title">Next Step</div>
                <p className="card-desc">{action}</p>
            </div>

        </div>
    );
}

export default Loan;