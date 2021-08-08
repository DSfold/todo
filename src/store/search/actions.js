import { EDIT_SEARCH } from "./constants";

export function edit(value = "") {
  return {
    type: EDIT_SEARCH,
    payload: {
      value,
    },
  };
}
