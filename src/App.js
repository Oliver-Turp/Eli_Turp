import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useLayoutEffect } from "react";

import Home from "./pages/Home";
import Reviews from "./pages/Reviews";
import Photography from "./pages/Photography";
import YouTube from "./pages/YouTube";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Nav from "./components/Nav";

function App() {
  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  };

  return (
    <Router>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<Home />} />
            <Route path="photography" element={<Photography />}></Route>
            <Route path="reviews" element={<Reviews />} />
            <Route path="youtube" element={<YouTube />} />
            <Route path="contact" element={<Contact />} />
            <Route path="error" element={<Error />} />
          </Route>
          <Route path="*" element={<Navigate to="error" replace />} />
        </Routes>
      </Wrapper>
    </Router>
  );
}

export default App;
