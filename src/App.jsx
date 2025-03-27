import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Categories from "./Pages/Category/Categories";
import Shirts from "./Pages/Category/Shirts";
import Shorts from "./Pages/Category/Shorts";
import Trousers from "./Pages/Category/Trousers";
import Latest from "./Pages/Latest";
import Deals from "./Pages/Deals";
import Navbar from "./Components/NavBar";
import Account from "./Pages/Account";
import Cart from "./Pages/Cart";
import AppProvider from "./AppProvider";
import AdminPanel from "./Pages/Admin/admin";
import Profile from "./Components/profile";

function App() {
  const { pathname } = useLocation();
  const regexMatch = new RegExp(`/auth/`, "gi");
  return (
    <AppProvider>
      {!regexMatch.test(pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/auth/sign-in" element={<SignIn />} />
        <Route path="/auth/sign-up" element={<SignUp />} />

        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/shirts" element={<Shirts />} />
        <Route path="/categories/shorts" element={<Shorts />} />
        <Route path="/categories/trousers" element={<Trousers />} />

        <Route path="/latest" element={<Latest />} />
        <Route path="/account" element={<Account />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </AppProvider>
  );
}

export default App;
