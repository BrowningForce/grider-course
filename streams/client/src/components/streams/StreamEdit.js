import React from 'react';
import { connect } from 'react-redux';
import { fetchOneStream } from '../../actions';
import { Field, reduxForm } from 'redux-form';

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchOneStream(this.props.match.params.id);
  }
  
  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    return <div>StreamEdit</div>;
  }
};

const mapStateToProps = (state, ownProps) => {
return { stream: state.streams[ownProps.match.params.id]};
}

export default connect(mapStateToProps, { fetchOneStream })(StreamEdit);
