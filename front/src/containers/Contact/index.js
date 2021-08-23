import { connect } from 'react-redux';
import Contact from 'src/components/Contact';
import {
  createContactSetInputValueAction,
  createContactAction,
} from 'src/actions/contact';

const mapStateToProps = (state) => ({
  //civility: state.contact.civility,
  lastname: state.contact.lastname,
  firstname: state.contact.firstname,
  email: state.contact.email,
  subject: state.contact.subject,
  //content: state.contact.content,
  openLogIn: state.user.openLogIn,
  openLogUp: state.user.openLogUp,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (newValue, name) => {
    dispatch(createContactSetInputValueAction(newValue, name));
  },
  handleContact: () => {
    dispatch(createContactAction());
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
