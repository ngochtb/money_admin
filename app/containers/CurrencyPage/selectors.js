import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the currencyPage state domain
 */

const selectCurrencyPageDomain = state => state.currencyPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by CurrencyPage
 */

const makeSelectCurrencyPage = () =>
  createSelector(
    selectCurrencyPageDomain,
    substate => substate,
  );

export default makeSelectCurrencyPage;
export { selectCurrencyPageDomain };
