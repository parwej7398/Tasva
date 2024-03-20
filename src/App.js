import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Layout from "./Layout";
import { routes } from "./Routes";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<Layout children={route.element} />}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
