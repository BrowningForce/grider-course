import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions/index';

import { Link } from 'react-router-dom';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderButtonsForAuthedUser = (stream) => {
    return this.props.currentUserId === stream.userId ? (
      <div className='right floated content'>
        <Link to={`/streams/edit/${stream.id}`} className='ui button primary'>
          Edit
        </Link>
        <Link
          to={`/streams/delete/${stream.id}`}
          className='ui button negative'
        >
          Delete
        </Link>
      </div>
    ) : null;
  };

  renderStreams = () => {
    return this.props.streams.map((stream) => {
      return (
        <div className='item' key={stream.id}>
          {this.renderButtonsForAuthedUser(stream)}
          <i className='large middle aligned icon camera' />
          <div className='content'>
            <h4 className='header'>{stream.title}</h4>
            <p className='description'>{stream.description}</p>
          </div>
        </div>
      );
    });
  };

  renderCreateButton = () => {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link className='ui button primary' to='/streams/new'>
            Create Stream
          </Link>
        </div>
      );
    }
  };

  render() {
    return (
      <div className='container'>
        <div className='ui celled list'>{this.renderStreams()}</div>
        {this.renderCreateButton()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
