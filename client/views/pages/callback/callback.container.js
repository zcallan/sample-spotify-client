import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userAuthSuccess, userAuthFail } from 'actions';
import Callback from './Callback';


const mapDispatchToProps = dispatch => {
  return bindActionCreators({ userAuthSuccess, userAuthFail }, dispatch );
};

export default connect( null, mapDispatchToProps )( Callback );
