import React from 'react';
import { connect } from 'react-redux';
import {fetchStreams} from '../../actions';

// const StreamList = () => {
//   return <div>StreamList</div>;
// };
//use class bassed comp bc we to call our action creator inside compdidmount ( attempt fetch stream one tiome)
class StreamList extends React.Component {
  componentDidMount(){
    this.props.fetchStreams();
  }
  renderList(){
      return this.props.streams.map(stream => {
        return (
            <div className="item" key={stream.id}>
              <i className="large middle icon camera"/>
              <div className="content">
                {stream.title}
                <div className="description">{stream.description}</div>
              </div>
            </div>
        );
      });
  }

  render(){
    //console.log(this.props.streams);
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  //turn streams object into an array into our component
  return { streams: Object.values(state.streams) };

};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
