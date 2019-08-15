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
  render(){
    return <div>StreamList</div>;
  }
}

export default connect(null, { fetchStreams })(StreamList);
