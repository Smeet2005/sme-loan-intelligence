import { TrendingUp, Users, FileCheck, AlertCircle, ArrowUpRight, ArrowDownRight, Clock } from "lucide-react";

function Dashboard() {
    return (
        <div className="page-container">
            <header className="page-header">
                <h1 className="page-title">Management Dashboard</h1>
                <p className="page-subtitle">MSME Loan Evaluation Overview</p>
            </header>

            <div className="grid-cards">
                <div className="card">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                        <div>
                            <div className="card-title">Total Active Loans</div>
                            <div className="card-value">₹24.8 Cr</div>
                        </div>
                        <div style={{ padding: "10px", backgroundColor: "var(--primary-glow)", borderRadius: "10px", color: "var(--primary)" }}>
                            <TrendingUp size={24} />
                        </div>
                    </div>
                    <div className="card-change positive">
                        <ArrowUpRight size={16} />
                        <span>12.5% vs last month</span>
                    </div>
                </div>

                <div className="card">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                        <div>
                            <div className="card-title">Applications Pending</div>
                            <div className="card-value">142</div>
                        </div>
                        <div style={{ padding: "10px", backgroundColor: "rgba(59, 130, 246, 0.1)", borderRadius: "10px", color: "#3b82f6" }}>
                            <Clock size={24} />
                        </div>
                    </div>
                    <div className="card-change" style={{ color: "var(--text-muted)" }}>
                        <span>Avg processing: 4.2 days</span>
                    </div>
                </div>

                <div className="card">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                        <div>
                            <div className="card-title">Approved this Month</div>
                            <div className="card-value">84</div>
                        </div>
                        <div style={{ padding: "10px", backgroundColor: "var(--primary-glow)", borderRadius: "10px", color: "var(--primary)" }}>
                            <FileCheck size={24} />
                        </div>
                    </div>
                    <div className="card-change positive">
                        <ArrowUpRight size={16} />
                        <span>18% above target</span>
                    </div>
                </div>

                <div className="card">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                        <div>
                            <div className="card-title">High Risk Flags</div>
                            <div className="card-value" style={{ color: "#ef4444" }}>12</div>
                        </div>
                        <div style={{ padding: "10px", backgroundColor: "rgba(239, 68, 68, 0.1)", borderRadius: "10px", color: "#ef4444" }}>
                            <AlertCircle size={24} />
                        </div>
                    </div>
                    <div className="card-change" style={{ color: "#ef4444" }}>
                        <ArrowDownRight size={16} />
                        <span>Requires immediate review</span>
                    </div>
                </div>
            </div>

            <div className="grid-content">
                <div className="card" style={{ minHeight: "400px" }}>
                    <h3 style={{ fontSize: "1.125rem", fontWeight: "600", marginBottom: "20px" }}>Recent Applications</h3>
                    
                    <div style={{ overflowX: "auto" }}>
                        <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
                            <thead>
                                <tr style={{ borderBottom: "1px solid var(--border-color)", color: "var(--text-muted)", fontSize: "0.875rem" }}>
                                    <th style={{ padding: "12px 16px", fontWeight: "500" }}>Company Name</th>
                                    <th style={{ padding: "12px 16px", fontWeight: "500" }}>Loan Amount</th>
                                    <th style={{ padding: "12px 16px", fontWeight: "500" }}>Risk Score</th>
                                    <th style={{ padding: "12px 16px", fontWeight: "500" }}>Status</th>
                                </tr>
                            </thead>
                            <tbody style={{ fontSize: "0.9375rem" }}>
                                {[
                                    { name: "TechNova Solutions Pvt Ltd", amount: "₹45.0 L", score: "84/100", status: "In Review" },
                                    { name: "Apex Manufacturing Co.", amount: "₹1.2 Cr", score: "92/100", status: "Approved", statusColor: "var(--primary)", bgColor: "var(--primary-glow)" },
                                    { name: "Global Exports Inc", amount: "₹80.0 L", score: "45/100", status: "Flagged", statusColor: "#ef4444", bgColor: "rgba(239, 68, 68, 0.1)" },
                                    { name: "Sunrise Traders", amount: "₹25.0 L", score: "76/100", status: "In Review" }
                                ].map((row, i) => (
                                    <tr key={i} style={{ borderBottom: "1px solid var(--border-color)" }}>
                                        <td style={{ padding: "16px", fontWeight: "500" }}>{row.name}</td>
                                        <td style={{ padding: "16px", color: "var(--text-muted)" }}>{row.amount}</td>
                                        <td style={{ padding: "16px" }}>
                                            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                                <div style={{ width: "40px", height: "4px", backgroundColor: "var(--border-color)", borderRadius: "2px", overflow: "hidden" }}>
                                                    <div style={{ width: row.score.split('/')[0] + '%', height: "100%", backgroundColor: row.statusColor || "var(--primary)" }}></div>
                                                </div>
                                                <span style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>{row.score}</span>
                                            </div>
                                        </td>
                                        <td style={{ padding: "16px" }}>
                                            <span style={{ 
                                                display: "inline-block", 
                                                padding: "4px 12px", 
                                                borderRadius: "100px", 
                                                fontSize: "0.75rem", 
                                                fontWeight: "600",
                                                color: row.statusColor || "#3b82f6",
                                                backgroundColor: row.bgColor || "rgba(59, 130, 246, 0.1)"
                                            }}>
                                                {row.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="card" style={{ minHeight: "400px" }}>
                    <h3 style={{ fontSize: "1.125rem", fontWeight: "600", marginBottom: "20px" }}>Action Items</h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                        <div style={{ display: "flex", gap: "12px", padding: "16px", backgroundColor: "var(--bg-dark)", borderRadius: "8px", border: "1px solid var(--border-color)" }}>
                            <div style={{ color: "#f59e0b" }}><AlertCircle size={20} /></div>
                            <div>
                                <h4 style={{ fontSize: "0.9375rem", fontWeight: "500", margin: "0 0 4px 0" }}>Update Credit Policy</h4>
                                <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", margin: 0 }}>RBI guidelines updated yesterday. Q3 policies need review.</p>
                            </div>
                        </div>
                        <div style={{ display: "flex", gap: "12px", padding: "16px", backgroundColor: "var(--bg-dark)", borderRadius: "8px", border: "1px solid var(--border-color)" }}>
                            <div style={{ color: "var(--primary)" }}><Users size={20} /></div>
                            <div>
                                <h4 style={{ fontSize: "0.9375rem", fontWeight: "500", margin: "0 0 4px 0" }}>Team Meeting</h4>
                                <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", margin: 0 }}>Monthly portfolio review at 2:00 PM IST.</p>
                            </div>
                        </div>
                        <div style={{ display: "flex", gap: "12px", padding: "16px", backgroundColor: "var(--bg-dark)", borderRadius: "8px", border: "1px solid var(--border-color)" }}>
                            <div style={{ color: "#3b82f6" }}><Clock size={20} /></div>
                            <div>
                                <h4 style={{ fontSize: "0.9375rem", fontWeight: "500", margin: "0 0 4px 0" }}>Pending Approvals (3)</h4>
                                <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", margin: 0 }}>Three &gt;₹1Cr loans require final signature.</p>
                            </div>
                        </div>
                    </div>
                    
                    <button style={{ 
                        marginTop: "24px", 
                        width: "100%", 
                        padding: "12px", 
                        backgroundColor: "transparent", 
                        border: "1px solid var(--border-color)", 
                        color: "var(--text-main)", 
                        borderRadius: "8px",
                        fontWeight: "500",
                        cursor: "pointer",
                        transition: "all 0.2s"
                    }}
                    onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'var(--bg-dark)'; e.currentTarget.style.borderColor = 'var(--text-muted)'; }}
                    onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.borderColor = 'var(--border-color)'; }}
                    >
                        View All Tasks
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;