/**
 *
 * PurposePage
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
import makeSelectPurposePage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function PurposePage() {
  useInjectReducer({ key: 'purposePage', reducer });
  useInjectSaga({ key: 'purposePage', saga });

  return (
    <div>
      <Helmet>
        <title>PurposePage</title>
        <meta name="description" content="Description of PurposePage" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

PurposePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  purposePage: makeSelectPurposePage(),
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
)(PurposePage);
