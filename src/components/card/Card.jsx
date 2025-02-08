import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Card = () => {
  const [card, setCards] = useState([]);
  const getCard = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      setCards(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCard();
  }, []);
  return (
    <StyledContainer>
      {card.map((item) => {
        if (item.status === "Alive") {
          return (
            <StyledCircle>
              <img src={item.image} />
              <section>
                <div>
                  <h1>{item.name}</h1>
                  <h1>
                    <img src="https://png.pngtree.com/png-clipart/20201029/ourmid/pngtree-circle-clipart-green-circle-png-image_2382000.jpg" />{" "}
                    {item.status} - {item.species}{" "}
                  </h1>
                </div>
                <div>
                  <h4>Last known location:</h4>
                  <h2>{item.origin.name}</h2>
                </div>
                <div>
                    <h4>First seen in:</h4>
                    <h2>{item.location.name}</h2>
                </div>
              </section>
            </StyledCircle>
          );
        } else if (item.status === "unknown") {
          return (
            <StyledCircle>
              <img src={item.image} />
              <section>
                <div>
                  <h1>{item.name}</h1>
                  <h1>
                    <img src="https://png.pngtree.com/png-clipart/20201029/ourmid/pngtree-circle-clipart-gray-circle-png-image_2381994.jpg" />{" "}
                    {item.status} - {item.species}{" "}
                  </h1>
                </div>
                <div>
                  <h4>Last known location:</h4>
                  <h2>{item.origin.name}</h2>
                </div>
                <div>
                    <h4>First seen in:</h4>
                    <h2>{item.location.name}</h2>
                </div>
              </section>
            </StyledCircle>
          );
        } else if (item.status === "Dead") {
          return (
            <StyledCircle>
              <img src={item.image} />
              <section>
                <div>
                  <h1>{item.name}</h1>
                  <h1>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/8b/Red_Circle_full.png" />{" "}
                    {item.status} - {item.species}{" "}
                  </h1>
                </div>

                <div>
                  <h4>Last known location:</h4>
                  <h2>{item.origin.name}</h2>
                </div>
                <div>
                    <h4>First seen in:</h4>
                    <h2>{item.location.name}</h2>
                </div>
              </section>
            </StyledCircle>
          );
        }
      })}
    </StyledContainer>
  );
};

export default Card;

const StyledCircle = styled.div`
display: flex;
width: 600px;
height: 220px;
background-color: #3C3E44;
border-radius: 16px;
line-height: 5px;
section{
    display: flex;
    padding-left: 5px;
    flex-direction: column;
    height: 220px;
    justify-content: start;
}
img {
  width: 229px;
  height: 220px;
  border-bottom-left-radius: 16px;
  border-top-left-radius: 16px;
}
h1 {
    display: flex;
    align-items: center;
}
h4{
    color: gray;
}
h1 img {
border-radius: 50%;

    width: 12px;
    height: 12px;
}
`;


const StyledContainer = styled.div`
gap: 15px;
color: white;
display:flex;
justify-content: space-around;
flex-wrap: wrap;
`
// const StyledCircle = styled.span`
// position: relative;
//   border-radius: 50%;
//   width:15px;
//   height: 5px;
//   background-color: red;
//   font-size: 10px;
//   color: black  ;
// padding-left: 13px;
// bottom: 10px;
// `;
