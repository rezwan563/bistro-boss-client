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
            <button className="p-3 hover:bg-slate-700 hover:text-white rounded-md border-b-slate-500 border-0 border-b-4 shadow-md">View Full Menu</button>
        </section>
    );
};

export default ChefRecomendation;