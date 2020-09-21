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
  position: relative;
  margin: 2vh 1vw;
  padding: 2vh 0;
  overflow: hidden;
  :hover {
    cursor: ${(props) => (props.onClick ? "pointer" : "default")};
    background-color: ${({ theme, onClick }) =>
      `${onClick ? theme.colors.blue.normal : "default"}`};
  }
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
export const Div = styled.div`
  ${ListItem}:hover & {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 0;
    right: 0;
    cursor: pointer;
    :after,
    :before {
      position: absolute;
      top: 9px;
      left: 0px;
      content: "";
      display: block;
      width: 20px;
      height: 2px;
      background-color: red;
    }
    :after {
      -webkit-transform: rotate(45deg);
      -moz-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      -o-transform: rotate(45deg);
      transform: rotate(45deg);
    }
    :before {
      -webkit-transform: rotate(-45deg);
      -moz-transform: rotate(-45deg);
      -ms-transform: rotate(-45deg);
      -o-transform: rotate(-45deg);
      transform: rotate(-45deg);
    }
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
