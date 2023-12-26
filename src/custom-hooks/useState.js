import { reRender } from "..";

let componentStates = [];
let componentStatesIndex = -1;

export const setCurrentIndex = (index) => {
 componentStatesIndex = index;
}

export const useState = (initialStateValue) => {
  componentStatesIndex++;

  const currentComponentStatesIndex = componentStatesIndex;

  if (!componentStates[currentComponentStatesIndex]) {
    componentStates[currentComponentStatesIndex] = initialStateValue;
  }

const setStateValue = (updatedStateValue) => {
  componentStates[currentComponentStatesIndex] = updatedStateValue;
  reRender();
}
  
  return [componentStates[currentComponentStatesIndex], setStateValue];
}
