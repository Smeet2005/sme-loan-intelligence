import { useNavigate } from "react-router-dom";

function Dashboard() {
    const navigate = useNavigate();

    const companies = [
        { id: 1, name: "ABC Pvt Ltd", type: "Small", healthScore: 78 },
        { id: 2, name: "XYZ Traders", type: "Micro", healthScore: 52 },
        { id: 3, name: "TechNova Solutions", type: "Medium", healthScore: 85 },
        { id: 4, name: "Apex Manufacturing", type: "Small", healthScore: 45 },
        { id: 5, name: "Global Exports", type: "Medium", healthScore: 67 },
        { id: 6, name: "Sunrise Traders", type: "Micro", healthScore: 35 },
    ];

    return (
        <div className="page-container">
            <div className="page-header">
                <h1 className="page-title">MSME Evaluation Dashboard</h1>
                <p className="page-subtitle">Indian Bank Pvt. Ltd.</p>
            </div>

            <div className="card">
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Company</th>
                                <th>Type</th>
                                <th>Health Score</th>
                                <th>Risk</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {companies.map((company) => (
                                <tr key={company.id}>
                                    <td className="company-name">{company.name}</td>
                                    <td>{company.type}</td>

                                    <td>
                                        <span
                                            className={`badge ${company.healthScore >= 75
                                                    ? "success"
                                                    : company.healthScore >= 50
                                                        ? "warning"
                                                        : "danger"
                                                }`}
                                        >
                                            {company.healthScore}
                                        </span>
                                    </td>

                                    {/* NEW RISK COLUMN */}
                                    <td>
                                        <span
                                            className={`badge ${company.healthScore >= 75
                                                    ? "success"
                                                    : company.healthScore >= 50
                                                        ? "warning"
                                                        : "danger"
                                                }`}
                                        >
                                            {company.healthScore >= 75
                                                ? "Low Risk"
                                                : company.healthScore >= 50
                                                    ? "Medium Risk"
                                                    : "High Risk"}
                                        </span>
                                    </td>

                                    <td>
                                        <button
                                            className="btn-action"
                                            onClick={() => navigate(`/details/${company.id}`)}
                                        >
                                            View Details →
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;