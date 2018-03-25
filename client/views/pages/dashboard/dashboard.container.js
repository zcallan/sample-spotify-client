import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userAuthSuccess } from 'actions';
import Dashboard from './Dashboard';


const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ userAuthSuccess }, dispatch );
};

export default connect( mapStateToProps, mapDispatchToProps )( Dashboard );
