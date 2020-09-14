import styled from "styled-components";
export const Menu = styled.ul`
  display: flex;
  margin-block-start: unset;
  flex-direction: column;
  padding-inline-start: 0;
  justify-content: space-between;
  overflow: hidden;
  :focus {
    outline: 1px solid #05505c;
  }
  @media (min-width: 500px) {
    margin-block-start: unset;
    margin-block-end: unset;
  }
  a:link,
  a:visited,
  a:hover,
  a:active {
    text-decoration: none;
  }
`;

export const Li = styled.li`
  list-style-type: none;
  padding: 1vh 5vw;
  width: 100px;
  margin: 5px auto;
  cursor: pointer;
  :hover {
    background-color: #05505c;
  }
  :focus {
    background-color: #05505c;
    outline: 1px solid #05505c;
  }
  @media (orientation: landscape) and (max-height: 500px) {
    padding: 0.5vh 5vw;
    margin: 0px auto;
  }
  @media (min-width: 768px) {
    padding: 1vh 0vw 1vh 30px;
    margin: 5px 0;
    width: auto;
  }
  @media (min-width: 1024px) {
    padding: 1vh 0vw 1vh 40px;
  }
`;
export const I = styled.i`
  font-size: 1.3rem;
  padding-right: 5px;
`;
export const P = styled.p`
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
  margin-block-start: 0em;
  margin-block-end: 0em;
`;
