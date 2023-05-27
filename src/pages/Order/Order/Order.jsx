import orderBanner from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";
const Order = () => {
  return (
    <div>
      <Cover img={orderBanner} title="Order Food"></Cover>
      <div className="tabs">
        <a className="tab tab-bordered">Tab 1</a>
        <a className="tab tab-bordered tab-active">Tab 2</a>
        <a className="tab tab-bordered">Tab 3</a>
      </div>
    </div>
  );
};

export default Order;
