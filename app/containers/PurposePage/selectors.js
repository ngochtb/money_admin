import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the purposePage state domain
 */

const selectPurposePageDomain = state => state.purposePage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by PurposePage
 */

const makeSelectPurposePage = () =>
  createSelector(
    selectPurposePageDomain,
    substate => substate,
  );

export default makeSelectPurposePage;
export { selectPurposePageDomain };
