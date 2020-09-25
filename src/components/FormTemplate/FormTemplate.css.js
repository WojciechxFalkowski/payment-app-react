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

export const Input = styled.input`
  display: block;
  margin: 1px 0;
  padding: 5px 10px;
  font-size: 0.9rem;
`;
export const Textarea = styled.textarea`
  box-sizing: border-box;
  display: block;
  margin: 1px 0;
  padding: 5px 10px;
  font-size: 0.9rem;
  height: 100px;
  min-width: 195px;
  min-height: 100px;
  max-width: 320px;
  max-height: 200px;
`;
export const Span = styled.span`
  font-size: 0.55rem;
  color: red;
`;
export const Button = styled.button`
  width: 193px;
  margin: 1vh 0;
  min-height: 29px;
  color: white;
  background-color: ${({ theme: { colors } }) => colors.blue.normal};
  border: 2px solid ${({ theme: { colors } }) => colors.blue.normal};
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
