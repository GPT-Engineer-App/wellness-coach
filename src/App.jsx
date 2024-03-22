import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Blog from "./pages/Blog.jsx";
// Remove the import for AboutMe component

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/blog" element={<Blog />} />
        // Remove the route for AboutMe component
      </Routes>
    </Router>
  );
}

export default App;
