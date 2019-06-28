import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const KEY = 'AIzaSyADaXy9_1Jfh3tarEe_kVnuBQH2PArusQE';

class App extends React.Component{
  state = { videos: [] , selectedVideo: null };

  componentDidMount(){
    this.onTermSubmit('javascript react');
  }

  onTermSubmit =  async searchTerm => {
    const response = await youtube.get('/search',{
      params:{
        part: 'snippet',
        maxResult: 5,
        key: KEY,
        q: searchTerm
      }
    });
    //console.log(response.data.items)
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  onVideoSelect = (video) => {
    // console.log('from the app' , video)
    this.setState({selectedVideo: video})
  }

  render() {
    return (
      <div className="ui container">
      <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo}/>
            </div>
            <div className="five wide column">
              {/*pass prop videos*/}
              <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
