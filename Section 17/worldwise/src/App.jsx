import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";

import AppLayput from "./pages/AppLayout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* path -> last part of url(e.g. http://localhost:5173/product) to which components displayed */}
        <Route index element={<Homepage />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="product" element={<Product />} />
        <Route path="login" element={<Login />} />
        <Route path="app" element={<AppLayput />}>
          {/* index route is the default route is nothing is specified */}
          <Route index element={<p>List of cities</p>} />
          <Route path="cities" element={<p>Cities</p>} />
          <Route path="countries" element={<p>Counties</p>} />
          <Route path="form" element={<p>Form</p>} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
