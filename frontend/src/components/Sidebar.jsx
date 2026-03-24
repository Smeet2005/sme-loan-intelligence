import { Link, useLocation } from "react-router-dom";

function Sidebar() {
    const location = useLocation();

    const navItems = [
        { name: "Dashboard", path: "/" },
        { name: "SME Insights", path: "/insights/1" },
        { name: "Loan Evaluation", path: "/loan" },
    ];

    return (
        <div
            style={{
                width: "240px",
                background: "#020617",
                borderRight: "1px solid #1e293b",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
            }}
        >
            {/* TOP */}
            <div>
                {/* LOGO / TITLE */}
                <div style={{ marginBottom: "30px" }}>
                    <h2 style={{ fontSize: "18px", fontWeight: "600" }}>
                        Indian Bank Pvt. Ltd.
                    </h2>
                    <p
                        style={{
                            fontSize: "12px",
                            color: "#94a3b8",
                            marginTop: "4px",
                        }}
                    >
                        Internal Tools
                    </p>
                </div>

                {/* NAVIGATION */}
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {navItems.map((item) => {
                        const isActive = location.pathname === item.path;

                        return (
                            <Link
                                key={item.name}
                                to={item.path}
                                style={{
                                    padding: "10px 14px",
                                    borderRadius: "8px",
                                    textDecoration: "none",
                                    color: isActive ? "#10b981" : "#e5e7eb",
                                    background: isActive ? "#10b98120" : "transparent",
                                    border: isActive
                                        ? "1px solid #10b98140"
                                        : "1px solid transparent",
                                }}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </div>
            </div>

            {/* BOTTOM */}
            <div style={{ color: "#94a3b8", fontSize: "14px" }}>
                ⚙️ System Settings
            </div>
        </div>
    );
}

export default Sidebar;