import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import MainLayout from "./MainLayout";
import { Suspense } from "react";
import Loading from "./Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const dataPromise = async () => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  return (
    <>
      <Nav />
      <Banner />
      <Suspense fallback={<Loading />}>
        <MainLayout dataPromise={dataPromise()} />
      </Suspense>
      <ToastContainer />
      {/* <Loading /> */}
      <Footer />
    </>
  );
}

export default App;
