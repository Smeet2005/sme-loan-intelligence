import { NavLink } from "react-router-dom";
import { LayoutDashboard, LineChart, FileText, Settings, Building2 } from "lucide-react";

function SidebarLink({ to, icon, label }) {
    return (
        <NavLink
            to={to}
            style={({ isActive }) => ({
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "12px 16px",
                borderRadius: "8px",
                color: isActive ? "var(--primary)" : "var(--text-muted)",
                backgroundColor: isActive ? "var(--primary-glow)" : "transparent",
                border: "1px solid transparent",
                borderColor: isActive ? "var(--border-active)" : "transparent",
                fontWeight: isActive ? "600" : "500",
                transition: "all 0.2s ease",
                textDecoration: "none"
            })}
        >
            {icon}
            <span style={{ fontSize: "0.9375rem" }}>{label}</span>
        </NavLink>
    );
}

function Sidebar() {
    return (
        <aside style={{
            width: "280px",
            minHeight: "100vh",
            backgroundColor: "var(--bg-sidebar)",
            borderRight: "1px solid var(--border-color)",
            display: "flex",
            flexDirection: "column",
            padding: "24px 0",
            flexShrink: 0
        }}>
            <div style={{
                padding: "0 24px",
                marginBottom: "40px",
                display: "flex",
                alignItems: "center",
                gap: "12px"
            }}>
                <div style={{
                    width: "36px",
                    height: "36px",
                    backgroundColor: "rgba(16, 185, 129, 0.1)",
                    border: "1px solid var(--border-active)",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--primary)"
                }}>
                    <Building2 size={20} />
                </div>
                <div>
                   <h2 style={{ fontSize: "1.125rem", fontWeight: "600", color: "var(--text-main)", margin: 0, letterSpacing: "-0.02em" }}>Indian Bank</h2>
                   <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", margin: 0, marginTop: "2px", fontWeight: "500", textTransform: "uppercase", letterSpacing: "0.05em" }}>Internal Tools</p>
                </div>
            </div>

            <nav style={{ display: "flex", flexDirection: "column", gap: "8px", padding: "0 16px" }}>
                <SidebarLink to="/" icon={<LayoutDashboard size={20} />} label="Dashboard" />
                <SidebarLink to="/insights/1" icon={<LineChart size={20} />} label="SME Insights" />
                <SidebarLink to="/loan/1" icon={<FileText size={20} />} label="Evaluation Desk" />
            </nav>

            <div style={{ marginTop: "auto", padding: "0 16px" }}>
                 <SidebarLink to="/settings" icon={<Settings size={20} />} label="System Settings" />
            </div>
        </aside>
    );
}

export default Sidebar;