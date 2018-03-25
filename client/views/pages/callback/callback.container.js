import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userAuthSuccess } from 'actions';
import Callback from './Callback';


const mapDispatchToProps = dispatch => {
  return bindActionCreators({ userAuthSuccess }, dispatch );
};

export default connect( null, mapDispatchToProps )( Callback );
