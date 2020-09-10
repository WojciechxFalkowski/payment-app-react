import styled from "styled-components";
export const Wrapper = styled.ul`
  width: 90%;
  margin: 0 auto;
  list-style: none;
  text-align: center;
  padding-inline-start: 0px;
  @media (min-width: 640px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
export const ListItem = styled.li`
  margin: 2vh 1vw;
  padding: 2vh 0;
  overflow: hidden;
  background-color: white;
  @media (min-width: 640px) {
    flex-basis: 46%;
  }
  @media (min-width: 1024px) {
    flex-basis: 30%;
  }
  @media (min-width: 1500px) {
    flex-basis: 25%;
  }
`;
export const ListName = styled.p`
  margin-block-start: 0;
  margin-block-end: 0;
  text-decoration: underline;
  font-weight: bold;
  display: inline-block;
`;
export const P = styled.p`
  margin-block-start: 0;
  margin-block-end: 0;
`;
