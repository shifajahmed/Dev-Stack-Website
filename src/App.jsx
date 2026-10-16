import Nav from "./components/Nav";
import Banner from "./components/Banner";
import TechCard from "./components/TechCard";
import Stack from "./components/Stack";

const TechPromise = async() => {
  const res = await fetch('/data.json');
  const data = await res.json();
  return data;
};

function App() {
  console.log(TechPromise());
  return (
    <>
      <Nav />
      <Banner />
      <Stack />
      <TechCard />
    </>
  );
}

export default App;
