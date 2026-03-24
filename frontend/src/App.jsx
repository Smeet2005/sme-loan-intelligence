import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Insights from "./pages/Insights";
import Loan from "./pages/Loan";
import Details from "./pages/Details";

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: "flex", width: "100%", height: "100vh" }}>
        <Sidebar />

        <main style={{ flex: 1, overflow: "auto" }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />

            {/* ✅ IMPORTANT FIX */}
            <Route path="/details/:id" element={<Details />} />
            <Route path="/insights/:id" element={<Insights />} />

            <Route path="/loan/:id" element={<Loan />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;