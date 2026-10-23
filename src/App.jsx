import Nav from "./components/Nav";
import Banner from "./components/Banner";
import MainLayout from "./MainLayout";
import { Suspense } from "react";
import Loading from "./Loading";

const dataPromise = async () => {
  const response = await fetch("/data.json");
  const data = await response.json();
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
      <Loading />
    </>
  );
}

export default App;
