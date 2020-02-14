/**
 *
 * CurrencyPage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectCurrencyPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function CurrencyPage() {
  useInjectReducer({ key: 'currencyPage', reducer });
  useInjectSaga({ key: 'currencyPage', saga });

  return (
    <div>
      <Helmet>
        <title>CurrencyPage</title>
        <meta name="description" content="Description of CurrencyPage" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

CurrencyPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  currencyPage: makeSelectCurrencyPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(CurrencyPage);
