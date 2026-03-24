import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Insights from "./pages/Insights";
import Loan from "./pages/Loan";

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: "flex", width: "100%", height: "100vh", overflow: "hidden" }}>
        
        <Sidebar />

        <main style={{ flex: 1, overflowY: "auto", position: "relative" }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/insights/:id" element={<Insights />} />
            <Route path="/loan/:id" element={<Loan />} />
          </Routes>
        </main>

      </div>
    </BrowserRouter>
  );
}

export default App;