import { Link, Outlet } from "react-router-dom";
import cls from "./header.module.scss";

const headerConfig = {
  title: "Go Grocery Sellers",
  navs: [
    {
      label: "About",
      link: "/about",
    },
    {
      label: "Contacts",
      link: "/contacts",
    },
    {
      label: "Login",
      link: "/login",
    },
  ],
};

const Header = () => {
  return (
    <div>
      <nav className={cls.container}>
        <h2>{headerConfig.title}</h2>
        <ul className={cls.navGroup}>
          {headerConfig.navs.map((nav) => (
            <li className={cls.link} key={nav.link}>
              {" "}
              <Link to={nav.link}>{nav.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

function RootLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default RootLayout;
