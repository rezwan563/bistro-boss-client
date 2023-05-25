import CallSection from "../CallSection/CallSection";
import Category from "../Category/Category";
import ChefRecomendation from "../ChefRecomendation/ChefRecomendation";
import ChefService from "../ChefService/ChefService";
import Featured from "../Featured/Featured";
import Banner from "../HomeComponents/Banner/Banner";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <ChefService></ChefService>
            <PopularMenu></PopularMenu>
            <CallSection></CallSection>
            <ChefRecomendation></ChefRecomendation>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;