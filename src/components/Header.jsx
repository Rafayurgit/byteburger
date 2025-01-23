import { Link } from "react-router-dom";

const Header = ({ restaurantName, menuItems }) => (
  <header>
    <div className="logo">{restaurantName}</div>
    <nav>
      <div className="menu">
        {menuItems?.map((menuItem, index) => (
          <p key={index}>
            <a
              className={menuItem.type === "button" ? "order-button" : ""}
              href={menuItem.link}
            >
              {menuItem.name}
            </a>
          </p>
        ))}
      </div>
    </nav>
  </header>
);

export default Header;
