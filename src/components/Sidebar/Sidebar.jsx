import { useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/logo.png";
import {
  Container,
  TopSection,
  NavSection,
  NavItem,
  NavContainer,
  ToggleButton,
  BottomSection,
} from "./Sidebar.styled";

const routes = [
  { title: "Home", icon: "fas-solid fa-house", path: "/" },
  { title: "Sales", icon: "chart-line", path: "/sales" },
  { title: "Costs", icon: "chart-column", path: "/costs" },
  { title: "Payments", icon: "wallet", path: "/payments" },
  { title: "Finances", icon: "chart-pie", path: "/finances" },
  { title: "Messages", icon: "envelope", path: "/messages" },
];

const bottomRoutes = [
  { title: "Settings", icon: "sliders", path: "/settings" },
  { title: "Support", icon: "phone-volume", path: "/support" },
];

const Sidebar = ({ color, toggleTheme }) => {
  const [isOpened, setIsOpened] = useState(true);

  const containerClassnames = classnames("sidebar", { opened: isOpened });

  const goToRoute = (path) => {
    console.log(`going to "${path}"`);
  };

  const toggleSidebar = () => {
    setIsOpened((v) => !v);
  };

  return (
    <Container className={containerClassnames} color={color}>
      <TopSection color={color} opened={isOpened}>
        <img src={logo} alt="TensorFlow logo" />
        <span>TensorFlow</span>
        <ToggleButton onClick={toggleSidebar} opened={isOpened} color={color}>
          <FontAwesomeIcon icon={isOpened ? "angle-left" : "angle-right"} />
        </ToggleButton>
      </TopSection>
      <NavContainer opened={isOpened}>
        <NavSection>
          {routes.map((route) => (
            <NavItem
              key={route.title}
              onClick={() => goToRoute(route.path)}
              color={color}
              opened={isOpened}
            >
              <FontAwesomeIcon icon={route.icon} />
              <span>{route.title}</span>
            </NavItem>
          ))}
        </NavSection>
        <NavSection>
          {bottomRoutes.map((route) => (
            <NavItem
              key={route.title}
              onClick={() => goToRoute(route.path)}
              color={color}
              opened={isOpened}
            >
              <FontAwesomeIcon icon={route.icon} />
              <span>{route.title}</span>
            </NavItem>
          ))}
        </NavSection>
      </NavContainer>
      <BottomSection>
        <ToggleButton onClick={toggleTheme} opened={isOpened} color={color}>
          <FontAwesomeIcon icon="fa-solid fa-lightbulb" />
        </ToggleButton>
      </BottomSection>
    </Container>
  );
};

Sidebar.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};

export default Sidebar;
