import React, { Component } from 'react';
import youtube from '../api/YouTube';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const KEY = 'AIzaSyCs8aHXgLRSVHLtHetPAdI1EJwMb4IeYmU';
export default class App extends Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSubmit('marmok');
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  onTermSubmit = async (term) => {
    try {
      const videoList = await youtube.get('/search', {
        params: {
          part: 'snippet',
          maxResults: 5,
          type: 'video',
          key: KEY,
          q: term,
        },
      });

      this.setState({
        videos: videoList.data.items,
        selectedVideo: videoList.data.items[0],
      });
    } catch (error) {
      throw new Error(error);
    }
  };

  render() {
    return (
      <div className='ui container'>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className='ui grid'>
          <div className='ui row'>
            <div className='ten wide column'>
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className='six wide column'>
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
