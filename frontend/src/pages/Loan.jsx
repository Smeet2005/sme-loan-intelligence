import { FileText, Download, CheckCircle, Clock } from "lucide-react";

function Loan() {
    return (
        <div className="page-container">
            <header className="page-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                <div>
                    <h1 className="page-title">Evaluation Desk</h1>
                    <p className="page-subtitle">Loan Origination & Underwriting Workbench</p>
                </div>
                <button style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    gap: "8px", 
                    padding: "10px 20px", 
                    backgroundColor: "var(--bg-card)", 
                    color: "var(--text-main)", 
                    border: "1px solid var(--border-color)",
                    borderRadius: "8px",
                    fontWeight: "500",
                    cursor: "pointer",
                    transition: "border-color 0.2s"
                }}
                onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--text-muted)'}
                onMouseOut={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
                >
                    <Download size={18} />
                    Export CSV
                </button>
            </header>

            <div className="grid-cards" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
                <div className="card" style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                    <div style={{ padding: "12px", backgroundColor: "var(--primary-glow)", color: "var(--primary)", borderRadius: "12px" }}>
                        <CheckCircle size={28} />
                    </div>
                    <div>
                        <div className="card-title">Completed Underwriting</div>
                        <div className="card-value" style={{ fontSize: "1.5rem" }}>28</div>
                    </div>
                </div>
                
                <div className="card" style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                    <div style={{ padding: "12px", backgroundColor: "rgba(59, 130, 246, 0.1)", color: "#3b82f6", borderRadius: "12px" }}>
                        <Clock size={28} />
                    </div>
                    <div>
                        <div className="card-title">In Progress</div>
                        <div className="card-value" style={{ fontSize: "1.5rem" }}>14</div>
                    </div>
                </div>

                <div className="card" style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                    <div style={{ padding: "12px", backgroundColor: "rgba(168, 85, 247, 0.1)", color: "#a855f7", borderRadius: "12px" }}>
                        <FileText size={28} />
                    </div>
                    <div>
                        <div className="card-title">Awaiting Documents</div>
                        <div className="card-value" style={{ fontSize: "1.5rem" }}>7</div>
                    </div>
                </div>
            </div>

            <div className="card" style={{ minHeight: "500px", padding: 0 }}>
                <div style={{ padding: "24px", borderBottom: "1px solid var(--border-color)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <h3 style={{ fontSize: "1.125rem", fontWeight: "600", margin: 0 }}>Active Evaluation Pipeline</h3>
                    <div style={{ display: "flex", gap: "8px" }}>
                        <input type="text" placeholder="Search applications..." style={{ 
                            padding: "8px 16px", 
                            backgroundColor: "var(--bg-dark)", 
                            border: "1px solid var(--border-color)", 
                            borderRadius: "6px",
                            color: "var(--text-main)",
                            outline: "none"
                        }} />
                    </div>
                </div>
                
                <div style={{ padding: "48px 24px", textAlign: "center", color: "var(--text-muted)", display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", minHeight: "350px", justifyContent: "center" }}>
                    <FileText size={48} style={{ opacity: 0.2 }} />
                    <p>Select an application to begin underwriting review.<br></br>Full integration pending backend dataset.</p>
                </div>
            </div>
        </div>
    );
}

export default Loan;
