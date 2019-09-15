// Methods for immutable operations
export /**
 * Merge two arrays/dictionaries without mutating any of the source array/dictionary
 * Helps remove all the spread operators from our reducer file as Redux Sauce
 *
 * @param {*} acc array/dictionary
 * @param {*} value array/dictionary
 * @returns New array/dictionary
 */
const iMerge = (acc, value) =>
  Array.isArray(acc) ? [...acc, ...value] : { ...acc, ...value };

/**
 * Delete a an item/key-value-pair from array/dictionary without mutating the source
 *
 * @param {*} acc array/dictionary
 * @param {*} value item/key to remove
 * @param {*} [match=x => x !== value] optional function to match the value
 * @returns New array/dictionary
 */
export const iDelete = (acc, value, match = x => x !== value) => {
  if (Array.isArray(acc)) return acc.filter(match);
  const { [value]: deleted, ...others } = acc;
  // eslint-disable-next-line
  console.log(`Deleted: ${deleted}`);
  return others;
};

/**
 * Create Reducer with Dictionary of functions instead of switch statement
 *
 * @param {*} [initialState={}] Initial state for the reducer
 * @param {*} handlers Dictionary that maps each action type to their respective operation
 * @returns Reducer
 */
const Reduxer = (initialState = {}, handlers) => {
  if (!handlers) {
    return state => state;
  }

  return (state = initialState, action) => {
    if (!action ?.type || !handlers[action.type]) {
      return state;
    }

    return handlers[action.type](state, action);
  };
};

export default Reduxer;
