import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import history from '../../history';
import { fetchOneStream, deleteStream } from '../../actions';

import Modal from '../Modal';

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchOneStream(this.props.match.params.id);
  }
  
  renderActions = () => {
    const id = this.props.match.params.id;
    return (
      <>
        <button onClick={() => this.props.deleteStream(id)} className='ui button negative'>Delete</button>
        <Link to='/' className='ui button'>Cancel</Link>
      </>
    );
  }

  renderContent = () => {
    if (!this.props.stream) {
      return 'Are you sure you want to delete this stream?';
    }

    return `Are you sure you want to delete the stream "${this.props.stream.title}"?`;
  }

  render() {
    return (
        <Modal
          title='Delete Stream'
          body={this.renderContent()}
          actions={this.renderActions()}
          onDismiss={() => history.push('/')}
        />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchOneStream, deleteStream } )(StreamDelete);
