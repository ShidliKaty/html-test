import styled from "styled-components";

export const Container = styled.div`
  width: 60px;
  transition: width 0.3s ease;
  background-color: ${(props) =>
    props.color === "light"
      ? "var(--color-sidebar-background-light-default)"
      : "var(--color-sidebar-background-dark-default)"};
  color: ${(props) =>
    props.color === "light"
      ? "var(--color-text-light-default)"
      : "var(--color-text-dark-default)"};
  border: solid 2px;
  border-color: ${(props) =>
    props.color === "light"
      ? "var(--color-button-background-light-active)"
      : "var(--color-button-background-dark-active)"};
  box-shadow: ${(props) =>
    props.color === "light"
      ? "0 0 0 2px var(--color-sidebar-background-light-default)"
      : "0 0 0 2px var(--color-sidebar-background-dark-default)"};
  &.opened {
    width: 240px;
  }
`;

export const TopSection = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  padding: 12px;
  gap: 12px;
  margin: 10px 0;
  img {
    width: 32px;
    height: 32px;
  }

  span {
    font-weight: bold;
    color: ${(props) =>
      props.color === "light"
        ? "var(--color-text-logo-light-default)"
        : "var(--color-text-logo-dark-default)"};
    flex-grow: 1;
    opacity: ${(props) => (props.opened ? 1 : 0)};
    transition: opacity 0.3s ease;
  }
`;

export const ToggleButton = styled.div`
  position: absolute;
  right: ${(props) => (props.opened ? "-15px" : "-45px")};
  transition: right 0.3s ease;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 50%;
  background-color: ${(props) =>
    props.color === "light"
      ? props.opened
        ? "var(--color-button-background-light-active)"
        : "var(--color-button-background-light-default)"
      : props.opened
      ? "var(--color-button-background-dark-active)"
      : "var(--color-button-background-dark-default)"};
`;

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${(props) => (props.opened ? "0 18px" : "0 10px")};
  transition: padding 0.5s ease;
  height: 100%;
`;

export const NavSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const BottomSection = styled.div`
  height: 50px;
  position: relative;
  margin-bottom: 20px;
`;

export const NavItem = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 8px 10px;
  gap: 15px;
  cursor: pointer;
  transition: background 0.2s;
  border-radius: 12px;
  color: ${(props) =>
    props.color === "light"
      ? "var(--color-text-light-default)"
      : "var(--color-text-dark-default)"};

  &:hover {
    background: ${(props) =>
      props.color === "light"
        ? "var(--color-sidebar-background-light-hover)"
        : "var(--color-sidebar-background-dark-hover)"};
    color: ${(props) =>
      props.color === "light"
        ? "var(--color-text-light-hover)"
        : "var(--color-text-dark-hover)"};
  }

  &:active {
    background: ${(props) =>
      props.color === "light"
        ? "var(--color-sidebar-background-light-active)"
        : "var(--color-sidebar-background-dark-active)"};
    color: ${(props) =>
      props.color === "light"
        ? "var(--color-text-light-active)"
        : "var(--color-text-dark-active)"};
  }

  span {
    opacity: ${(props) => (props.opened ? 1 : 0)};
    transition: opacity 0.5s ease;
  }
`;
