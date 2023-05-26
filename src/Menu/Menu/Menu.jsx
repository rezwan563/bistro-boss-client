import { Helmet } from 'react-helmet-async';
import Cover from '../../pages/Shared/Cover/Cover';
import menuCover from '../../../src/assets/menu/banner3.jpg';
import useMenu from '../../hooks/useMenu';
const Menu = () => {
    const [menu] = useMenu()
    const popular = menu.filter(i => i.category === 'popular')
    
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuCover} title='our menu'></Cover>
            
        </div>
    );
};

export default Menu;