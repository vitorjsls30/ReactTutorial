import React from 'react';
import {Link} from 'react-router';

export default class Layout extends React.Component {
  navigate() {
    this.props.router.push('/');
  }
  render() {
    console.log(this.props);
    const {router} = this.props;
    console.log(router.isActive("archives"));
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
