import Aboutus from "./Aboutus";
import Hero from "./Hero";
import HomeCategory from "./HomeCategory";
import LocationSprade from "./LocationSprade";
import OurProduct from "./OurProduct";
import Registration from "./Registration";

function Home() {
  return (
    <>
      <div>
        <Hero />
        <HomeCategory />
        <OurProduct />
        <Registration />
        <LocationSprade />
        <Aboutus />
      </div>
    </>
  );
}

export default Home;
