import { Outlet } from "react-router-dom";
import Header from "./components/Head";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./assets/CSS/styles.css";
import "./assets/CSS/card.css";

export default function App() {
  return (
    <>
      <Nav />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
