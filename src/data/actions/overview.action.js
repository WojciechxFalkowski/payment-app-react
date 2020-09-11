import { OVERVIEW_ACTIVITY } from "data/constants";
export const overview = ({ isActive }) => {
  return {
    type: OVERVIEW_ACTIVITY,
    isActive,
  };
};
