import styled from "styled-components";
import { ToastContainer } from "react-toastify";

export const StyledContainer = styled(ToastContainer).attrs({})`
  .Toastify__toast-container {
  }
  .Toastify__toast {
    color:${({ theme: { colors } }) => colors.blue.normal};
  }
  .Toastify__progress-bar {
    background: none;
    background-color:${({ theme: { colors } }) => colors.blue.normal};
  }
  }
`;
