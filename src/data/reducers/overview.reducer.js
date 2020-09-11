import { OVERVIEW_ACTIVITY } from "data/constants";
import { isActiveOverview } from "./../data";

function overview(state = isActiveOverview, action) {
  switch (action.type) {
    case OVERVIEW_ACTIVITY:
      return {
        isActive: action.isActive,
      };

    default:
      return state;
  }
}

export default overview;
