import styled from "styled-components";
import Navigation from "./Navigation";

const MainHeader = ({ isLoggedIn ,navigateToUser,onLogOut}) => {
  return (
    <Header>
      <h1>A Typical Page</h1>
      {isLoggedIn && <Navigation onLogOut={onLogOut}navigateToUser={navigateToUser} isLoggedIn={isLoggedIn}/>}
    </Header>
  );
};

export default MainHeader;

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 9vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #741188;
  padding: 0 2rem;
  h1 {
    color: white;
  }
`;
