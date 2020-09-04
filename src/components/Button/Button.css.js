import styled from "styled-components";

export const RootButton = styled.button`
  color: ${({ theme: { colors }, primary }) =>
    primary ? colors.blue.normal : colors.black.normal};
  cursor: inherit;
  border: none;
  background-color: transparent;
  cursor: ${(props) =>
    props.to || props.onClick || props.type === "submit"
      ? "pointer"
      : "default"};
  font-size: 0.9rem;
`;
export const RegularButton = styled(RootButton)`
  background: ${({ theme, primary }) =>
    primary ? theme.colors.white.normal : theme.colors.white.normal};
  margin: ${({ theme }) => `${theme.spacing.sm / 2}px`};
  padding: ${({ theme }) => `${theme.spacing.sm / 2}px ${theme.spacing.sm}px`};
  border: ${({ theme }) => `2px solid ${theme.colors.gray.normal}`};
  &:hover {
    color: ${({ theme: { colors } }) => colors.white.normal};
    background: ${({ theme: { colors } }) => colors.blue.normal};
    border: ${({ theme }) => `2px solid ${theme.colors.blue.normal}`};
  }
`;
export const BackgroundButton = styled(RegularButton)`
  color: ${({ theme: { colors } }) => colors.white.normal};
  background: ${({ theme: { colors } }) => colors.blue.normal};
  border: ${({ theme }) => `2px solid ${theme.colors.blue.normal}`};
`;
