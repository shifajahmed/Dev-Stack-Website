import Nav from "./components/Nav";
import Banner from "./components/Banner";
import TechCard from "./components/TechCard";
import Stack from "./components/Stack";
import MainLayout from "./MainLayout";
import Loading from "./components/Loading";


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
      <MainLayout />
      <suspense fallback={<Loading />}>
        <Stack dataPromise={dataPromise} />
        <TechCard />
      </suspense>
    </>
  );
}

export default App;
