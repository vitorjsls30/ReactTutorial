import React from 'react';
import Article from '../components/Article';

export default class Archives extends React.Component {
  render() {
    const {query} = this.props.location;
    const {params} = this.props;
    const {article} = params;
    const {date, filter} = query;

    const Articles = [
      'Some Blog Post',
      'Some other Blog post',
      'Yet Another Blog Post',
      'Still more',
      'Fake Blog Post',
      'Partial Blog Post'
    ].map((title, i) => <Article key={i} title={title} /> );

    return (
      <div class="col-md-8">
          <h1 class="page-header">
              Page Heading
              <small>Secondary Text</small>
          </h1>

          {Articles}

          <ul class="pager">
              <li class="previous">
                  <a href="#">&larr; Older</a>
              </li>
              <li class="next">
                  <a href="#">Newer &rarr;</a>
              </li>
          </ul>

      </div>
    );
  }
}
