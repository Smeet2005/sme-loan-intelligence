import { useParams, Link } from "react-router-dom";
import { ArrowLeft, TrendingUp, TrendingDown, DollarSign, Activity, AlertCircle, CheckCircle2 } from "lucide-react";
import { companies } from "../data/companies";

function Insights() {
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
    const profitMargin = ((profit / company.revenue) * 100).toFixed(1);
    const score = Math.round(Math.min(100, Math.max(40, profit / 500)));

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(amount);
    };

    return (
        <div className="page-container">
            <header className="page-header">
                <Link to="/" style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--text-muted)", marginBottom: "16px", fontSize: "0.875rem", fontWeight: "500" }}>
                    <ArrowLeft size={16} /> Back to Dashboard
                </Link>
                <h1 className="page-title">{company.name}</h1>
                <p className="page-subtitle">Detailed financial analytics and operational insights</p>
            </header>

            <div className="grid-cards" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
                <div className="card">
                    <div className="card-title" style={{ display: "flex", justifyContent: "space-between" }}>
                        Revenue <TrendingUp size={16} />
                    </div>
                    <div className="card-value">{formatCurrency(company.revenue)}</div>
                    <div className="card-desc">Total top-line generated</div>
                </div>
                <div className="card">
                    <div className="card-title" style={{ display: "flex", justifyContent: "space-between" }}>
                        Expenses <TrendingDown size={16} />
                    </div>
                    <div className="card-value">{formatCurrency(company.expenses)}</div>
                    <div className="card-desc">Total operational costs</div>
                </div>
                <div className="card">
                    <div className="card-title" style={{ display: "flex", justifyContent: "space-between" }}>
                        Profit <DollarSign size={16} />
                    </div>
                    <div className="card-value" style={{ color: profit > 0 ? "var(--success)" : "var(--danger)" }}>
                        {formatCurrency(profit)}
                    </div>
                    <div className="card-desc">Net bottom-line profit</div>
                </div>
                <div className="card">
                    <div className="card-title" style={{ display: "flex", justifyContent: "space-between" }}>
                        Profit Margin <Activity size={16} />
                    </div>
                    <div className="card-value">{profitMargin}%</div>
                    <div className="card-desc">Efficiency metric</div>
                </div>
            </div>

            <div className="grid-content">
                <div className="card">
                    <h3 style={{ fontSize: "1.125rem", fontWeight: "600", marginBottom: "24px", color: "var(--text-main)" }}>Smart Insights Engine</h3>
                    
                    <div className="insight-point">
                        <CheckCircle2 size={20} color="var(--success)" style={{ flexShrink: 0, marginTop: "2px" }} />
                        <div>
                            <h4>Revenue Growth is Stable</h4>
                            <p>The business is demonstrating consistent monthly revenue generation indicative of a healthy customer base and steady demand.</p>
                        </div>
                    </div>

                    <div className="insight-point" style={{ borderColor: company.expenses > (company.revenue * 0.7) ? "var(--danger-bg)" : "var(--border-color)" }}>
                        {company.expenses > (company.revenue * 0.7) ? (
                            <AlertCircle size={20} color="var(--danger)" style={{ flexShrink: 0, marginTop: "2px" }} />
                        ) : (
                            <CheckCircle2 size={20} color="var(--success)" style={{ flexShrink: 0, marginTop: "2px" }} />
                        )}
                        <div>
                            <h4>Operational Expenses</h4>
                            {company.expenses > (company.revenue * 0.7) ? (
                                <p>High operational expenses detected. The cost profile is consuming over 70% of generated revenue, which poses a potential liquidity risk.</p>
                            ) : (
                                <p>Operating expenses are well within acceptable parameters, leaving a robust buffer for profitability and debt servicing.</p>
                            )}
                        </div>
                    </div>

                    <div className="insight-point">
                        {profitMargin > 15 ? (
                            <CheckCircle2 size={20} color="var(--success)" style={{ flexShrink: 0, marginTop: "2px" }} />
                        ) : (
                            <AlertCircle size={20} color="var(--warning)" style={{ flexShrink: 0, marginTop: "2px" }} />
                        )}
                        <div>
                            <h4>Profitability Analysis</h4>
                            {profitMargin > 15 ? (
                                <p>Profit margin is strong. The business maintains excellent pricing power and operational efficiency.</p>
                            ) : (
                                <p>Profit margins are narrow. While the business is generating cash, the low margin leaves it vulnerable to market shocks.</p>
                            )}
                        </div>
                    </div>
                </div>

                <div className="card" style={{ height: "fit-content" }}>
                    <h3 style={{ fontSize: "1.125rem", fontWeight: "600", marginBottom: "24px", color: "var(--text-main)" }}>Evaluation Summary</h3>
                    
                    <div style={{ padding: "24px", backgroundColor: "var(--bg-dark)", borderRadius: "8px", textAlign: "center", marginBottom: "24px", border: "1px solid var(--border-color)" }}>
                        <div style={{ fontSize: "0.875rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: "500", marginBottom: "8px" }}>Overall Health Score</div>
                        <div style={{ fontSize: "3rem", fontWeight: "700", color: score >= 70 ? "var(--success)" : score >= 50 ? "var(--warning)" : "var(--danger)" }}>
                            {score}
                        </div>
                    </div>

                    <Link to={`/loan/${company.id}`} className="btn-action" style={{ width: "100%", justifyContent: "center", padding: "12px" }}>
                        Proceed to Loan Evaluation <ArrowLeft size={16} style={{ transform: "rotate(180deg)" }} />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Insights;