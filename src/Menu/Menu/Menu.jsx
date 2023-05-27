import { Helmet } from 'react-helmet-async';
import Cover from '../../pages/Shared/Cover/Cover';
import menuCover from '../../../src/assets/menu/banner3.jpg';
import dessertCover from '../../../src/assets/menu/dessert-bg.jpeg';
import pizzaCover from '../../../src/assets/menu/pizza-bg.jpg';
import saladCover from '../../../src/assets/menu/salad-bg.jpg';
import soupCover from '../../../src/assets/menu/soup-bg.jpg';
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
const Menu = () => {
    const [menu] = useMenu()
    const desserts = menu.filter(i => i.category === 'dessert')
    const pizza = menu.filter(i => i.category === 'pizza')
    const soup = menu.filter(i => i.category === 'soup')
    const salad = menu.filter(i => i.category === 'salad')
    const offered = menu.filter(i => i.category === 'offered')
    
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuCover} title='our menu'></Cover>
            {/* manin cover */}
            <SectionTitle subHeading="Don't Miss" heading="today's offer"></SectionTitle>
            {/* offered menu items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert menu items */}
            <MenuCategory items={desserts} title="Dessert" coverImg={dessertCover}></MenuCategory>
            {/* pizza menu items */}
            <MenuCategory items={pizza} title='Pizza' coverImg={pizzaCover}></MenuCategory>
            {/* soup menu items */}
            <MenuCategory items={soup} title='Soup' coverImg={soupCover}></MenuCategory>
            {/* salads menu items */}
            <MenuCategory items={salad} title='Salad' coverImg={saladCover}></MenuCategory>
        </div>
    );
};

export default Menu;