
const MenuCard = ({ item }) => {
  const { name, image, recipe } = item;
  return (
    <div className="card card-compact w-96 bg-base-100 mb-32">
      <figure>
        <img
          src={image}
          alt="food"
        />
      </figure>
      <div className="card-body items-center text-center bg-slate-100">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="bg-slate-200 text-yellow-500 p-3 hover:bg-slate-700 rounded-md border-b-yellow-500 border-0 border-b-4 shadow-md">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
