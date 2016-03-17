import React from 'react';
import {List} from 'immutable';

const pair=[];
const tally = 0;


export default React.createClass({
  render: function() {
    return React.cloneElement(this.props.children, {
      pair: pair,
      tally: tally
    });
  }
});