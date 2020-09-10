import styled from "styled-components";
export const Wrapper = styled.div``;

export const FormWrapper = styled.form`
  display: grid;
  position: relative;
  gap: 10px;
  justify-items: center;

  margin: 2vh auto;
  padding: 1vh 0;
  background-color: #fff;
  @media (min-width: 640px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1024px) {
    gap: 20px;
  }
  @media (min-width: 1400px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
export const Arrow = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  cursor: pointer;
  font-size: 1.3rem;
`;

export const Input = styled.input`
  display: block;
  margin: 1px 0;
  padding: 5px 10px;
  font-size: 0.9rem;
`;
export const Span = styled.span`
  font-size: 0.55rem;
  color: red;
`;
export const Button = styled.button`
  width: 193px;
  height: 29px;
  margin: 1vh 0;
  color: white;
  background-color: #036672;
  border: 2px solid #036672;
  text-transform: uppercase;
  cursor: pointer;

  @media (min-width: 640px) {
    grid-column: 1/3;
    box-sizing: border-box;
    align-self: center;
    margin: unset;
  }
  @media (min-width: 1400px) {
    grid-column: unset;
    align-self: end;
  }
`;
