import styled from "styled-components";
import Card from "../UI/Card";

const Home = () => {
  return (
    <HomeWrapper>
      <h1>Welcome back!</h1>
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled(Card)`
  width: 90%;
  max-width: 40rem;
  padding: 3rem;
  margin: 2rem auto;
  text-align: center;
`;
