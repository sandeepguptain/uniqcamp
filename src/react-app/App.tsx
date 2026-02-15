import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "@/react-app/pages/Home";
import ContactPage from "@/react-app/pages/Contact";
import RequestDemoPage from "@/react-app/pages/RequestDemo";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/demo" element={<RequestDemoPage />} />
      </Routes>
    </Router>
  );
}
