import { useNavigate } from "react-router-dom";
import { companies } from "../data/companies";

function Dashboard() {
    const navigate = useNavigate();

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
                                            className={`badge ${company.healthScore > 70
                                                    ? "success"
                                                    : company.healthScore > 50
                                                        ? "warning"
                                                        : "danger"
                                                }`}
                                        >
                                            {company.healthScore}
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