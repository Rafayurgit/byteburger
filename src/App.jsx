import Banner from "./components/Banner";
import FoodRecommender from "./components/FoodRecommender";
import Header from "./components/Header";
import './app.css';
import "./index.css";


const menuItems = [
  {
    name: "Our Menu",
    link: "#",
    type: "link"
  },
  {
    name: "Special Offers",
    link: "#",
    type: "link"
  },
  {
    name: "About",
    link: "#",
    type: "link"
  },
  {
    name: "Order",
    link: "/order",
    type: "button"
  }
];

export default function App() {
  return (
    <div className="App">
      <Header restaurantName="Byte Burger" menuItems={menuItems} />
      <Banner
        title="Fast food, made fresh, right to your door"
        subtitle="Explore Our Menu"
        imageURL="https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format"
      />
      <FoodRecommender />
    </div>
  );
}
