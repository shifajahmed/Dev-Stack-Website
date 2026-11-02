import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import MainLayout from "./MainLayout";
import SignIn from "./components/SignIn";
import Loading from "./Loading";

const dataPromise = fetch("/data.json").then((res) => {
  if (!res.ok) {
    throw new Error("Failed to load data.json");
  }
  return res.json();
});

function Home() {
  return (
    <>
      <Nav />
      <Banner />

      <Suspense fallback={<Loading />}>
        <MainLayout dataPromise={dataPromise} />
      </Suspense>
      <Footer />
    </>
  );
}

function AuthPage() {
  return (
    <>
      <Nav />
      <SignIn />
      <Footer />
    </>
  );
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<AuthPage />} />
        <Route path="/signup" element={<AuthPage />} />
      </Routes>

      <ToastContainer />
    </>
  );
}

export default App;
