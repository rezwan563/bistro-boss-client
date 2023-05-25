import Category from "../Category/Category";
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
        </div>
    );
};

export default Home;