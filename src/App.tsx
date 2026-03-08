import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import GoogleAnalytics from "./components/GoogleAnalytics";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <GoogleAnalytics />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
