import { LineChart, ArrowUpRight } from "lucide-react";

function Insights() {
    return (
        <div className="page-container">
            <header className="page-header">
                <h1 className="page-title">SME Insights & Intelligence</h1>
                <p className="page-subtitle">Sector-wise loan performance metrics and analysis</p>
            </header>

            <div className="card" style={{ minHeight: "60vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "24px" }}>
                <div style={{ backgroundColor: "var(--primary-glow)", padding: "24px", borderRadius: "50%", color: "var(--primary)" }}>
                    <LineChart size={64} />
                </div>
                <div style={{ textAlign: "center" }}>
                    <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "8px" }}>Intelligence Module Active</h2>
                    <p style={{ color: "var(--text-muted)", maxWidth: "500px", margin: "0 auto", lineHeight: "1.6" }}>
                        The sector insights engine is operating normally. Select a specific industry portfolio from the dropdown above to view real-time macroeconomic indicators and NPA risk scores.
                    </p>
                </div>
                <button style={{ 
                    marginTop: "16px",
                    display: "flex", 
                    alignItems: "center", 
                    gap: "8px", 
                    padding: "12px 24px", 
                    backgroundColor: "var(--primary)", 
                    color: "#fff", 
                    border: "none",
                    borderRadius: "8px",
                    fontWeight: "600",
                    cursor: "pointer",
                    boxShadow: "0 4px 14px var(--primary-glow)",
                    transition: "background-color 0.2s"
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-hover)'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'var(--primary)'}
                >
                    Generate Report <ArrowUpRight size={18} />
                </button>
            </div>
        </div>
    );
}

export default Insights;