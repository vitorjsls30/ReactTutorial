import React from 'react';
import Article from '../components/Article';

export default class Featured extends React.Component {
  render() {
    return (
      <div class="col-md-12">
        <h1 class="page-header">Featured</h1>
        <Article title={'Featured Blog Post'} />
      </div>
    );
  }
}
