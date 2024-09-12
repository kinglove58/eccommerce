import Aboutus from "./Aboutus";
import Appsection from "./Appsection";
import Hero from "./Hero";
import HomeCategory from "./HomeCategory";
import LocationSprade from "./LocationSprade";
import OurProduct from "./OurProduct";
import Registration from "./Registration";
import Sponsor from "./Sponsor";

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
        <Appsection />
        <Sponsor />
      </div>
    </>
  );
}

export default Home;
