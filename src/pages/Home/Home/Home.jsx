import CallSection from "../CallSection/CallSection";
import Category from "../Category/Category";
import ChefRecomendation from "../ChefRecomendation/ChefRecomendation";
import ChefService from "../ChefService/ChefService";
import Banner from "../HomeComponents/Banner/Banner";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <ChefService></ChefService>
            <PopularMenu></PopularMenu>
            <CallSection></CallSection>
            <ChefRecomendation></ChefRecomendation>
        </div>
    );
};

export default Home;