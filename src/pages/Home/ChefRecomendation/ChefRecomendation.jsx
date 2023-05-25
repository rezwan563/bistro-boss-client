import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCard from "../HomeComponents/MenuCard/MenuCard";

const ChefRecomendation = () => {
    const [menu, setMenu] = useState([])
    useEffect(() => {
        fetch('/menu.json')
        .then(res => res.json())
        .then(data =>{
            const fiveRecipes = data.slice(2, 5)
            setMenu(fiveRecipes)
        })
    },[])
    return (
        <section>
            <SectionTitle subHeading='Should Try' heading='Chef Recomendation'></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-3">
                {
                    menu.map(item => <MenuCard key={item._id} item={item}></MenuCard>)
                }
            </div>
        </section>
    );
};

export default ChefRecomendation;