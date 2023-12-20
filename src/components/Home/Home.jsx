import Banner from "../Banner/Banner";
import OurChefs from "../OurChefs/OurChefs";
import Services from "../Services/Services";

const Home = () => {
    return (
        <div className="max-w-[1500px] px-5 md:px-2 mt-5 mx-auto">
            <Banner></Banner>
            <Services></Services>
            <OurChefs></OurChefs>
        </div>
    );
};

export default Home;