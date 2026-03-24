import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, XCircle, FileText, Download } from "lucide-react";
import { companies } from "../data/companies";

function Loan() {
    const { id } = useParams();
    const company = companies.find(c => c.id === parseInt(id));

    if (!company) {
        return (
            <div className="page-container">
                <header className="page-header">
                    <h1 className="page-title">Company Not Found</h1>
                    <Link to="/" className="btn-action" style={{ display: "inline-flex", marginTop: "16px" }}>
                        <ArrowLeft size={16} /> Back to Dashboard
                    </Link>
                </header>
            </div>
        );
    }

    const profit = company.revenue - company.expenses;
    const profitMargin = (profit / company.revenue) * 100;
    const score = Math.round(Math.min(100, Math.max(40, profit / 500)));
    
    const isEligible = score >= 60;

    return (
        <div className="page-container">
            <header className="page-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                <div>
                    <Link to={`/insights/${company.id}`} style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--text-muted)", marginBottom: "16px", fontSize: "0.875rem", fontWeight: "500" }}>
                        <ArrowLeft size={16} /> Back to Insights
                    </Link>
                    <h1 className="page-title">Loan Evaluation: {company.name}</h1>
                    <p className="page-subtitle">Final assessment and eligibility criteria</p>
                </div>
                <button className="btn-action" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-color)", color: "var(--text-main)" }}>
                    <Download size={18} /> Export Report
                </button>
            </header>

            <div className="grid-content">
                <div className="card" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "16px", padding: "24px", borderRadius: "12px", backgroundColor: isEligible ? "var(--success-bg)" : "var(--danger-bg)", border: `1px solid ${isEligible ? "var(--success)" : "var(--danger)"}` }}>
                        {isEligible ? (
                            <CheckCircle size={48} color="var(--success)" />
                        ) : (
                            <XCircle size={48} color="var(--danger)" />
                        )}
                        <div>
                            <h2 style={{ fontSize: "1.5rem", fontWeight: "700", color: isEligible ? "var(--success)" : "var(--danger)", marginBottom: "4px" }}>
                                {isEligible ? "Eligible for Financing" : "Not Eligible at this Time"}
                            </h2>
                            <p style={{ color: "var(--text-main)", fontWeight: "500" }}>
                                Health Score: {score} / 100
                            </p>
                        </div>
                    </div>

                    <div>
                        <h3 style={{ fontSize: "1.125rem", fontWeight: "600", marginBottom: "16px", color: "var(--text-main)" }}>Primary Reasons</h3>
                        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                            {profitMargin > 15 ? (
                                <div className="insight-point" style={{ marginBottom: 0 }}>
                                    <CheckCircle size={20} color="var(--success)" style={{ flexShrink: 0 }} />
                                    <div>
                                        <h4 style={{ margin: 0 }}>Strong Profit Margin</h4>
                                        <p style={{ marginTop: "4px" }}>The business maintains excellent profitability metrics.</p>
                                    </div>
                                </div>
                            ) : null}
                            {company.expenses > (company.revenue * 0.7) ? (
                                <div className="insight-point" style={{ marginBottom: 0, borderColor: "var(--danger-bg)" }}>
                                    <XCircle size={20} color="var(--danger)" style={{ flexShrink: 0 }} />
                                    <div>
                                        <h4 style={{ margin: 0 }}>High Operational Expenses</h4>
                                        <p style={{ marginTop: "4px" }}>Costs are consuming over 70% of generated revenue.</p>
                                    </div>
                                </div>
                            ) : (
                                <div className="insight-point" style={{ marginBottom: 0 }}>
                                    <CheckCircle size={20} color="var(--success)" style={{ flexShrink: 0 }} />
                                    <div>
                                        <h4 style={{ margin: 0 }}>Controlled Operational Costs</h4>
                                        <p style={{ marginTop: "4px" }}>Expenses are well managed relative to total revenue.</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="card" style={{ height: "fit-content" }}>
                    <h3 style={{ fontSize: "1.125rem", fontWeight: "600", marginBottom: "24px", color: "var(--text-main)" }}>Recommendations</h3>
                    
                    <ul style={{ listStylePosition: "inside", display: "flex", flexDirection: "column", gap: "16px", color: "var(--text-muted)", margin: 0, padding: 0, listStyle: "none" }}>
                        {!isEligible && (
                            <li style={{ display: "flex", gap: "12px" }}>
                                <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "var(--primary)", marginTop: "8px", flexShrink: 0 }} />
                                <span style={{ color: "var(--text-main)", lineHeight: 1.5 }}>Reduce external operational expenses to improve margin buffers before reapplying.</span>
                            </li>
                        )}
                        <li style={{ display: "flex", gap: "12px" }}>
                            <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "var(--primary)", marginTop: "8px", flexShrink: 0 }} />
                            <span style={{ color: "var(--text-main)", lineHeight: 1.5 }}>Improve consistency in monthly revenue generation to stabilize the health score.</span>
                        </li>
                        <li style={{ display: "flex", gap: "12px" }}>
                            <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "var(--primary)", marginTop: "8px", flexShrink: 0 }} />
                            <span style={{ color: "var(--text-main)", lineHeight: 1.5 }}>Consider collateral-backed facilities if liquid performance remains restrictive.</span>
                        </li>
                    </ul>

                    <div style={{ marginTop: "32px", paddingTop: "24px", borderTop: "1px solid var(--border-color)", textAlign: "center" }}>
                        <div style={{ color: "var(--text-muted)", fontSize: "0.875rem", marginBottom: "16px" }}>Need further manual assessment?</div>
                        <button className="btn-action" style={{ width: "100%", justifyContent: "center" }}>
                            <FileText size={16} /> Request Underwriter Review
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Loan;
