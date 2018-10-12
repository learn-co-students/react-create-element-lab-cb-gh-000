import React from 'react';
import ReactDOM from 'react-dom';

// IMPORTANT!!!! uncomment the lines below to make your tests work
const title = React.createElement('h1', {}, 'An Awesome Person');
const par = React.createElement('p', {}, 'Who is learning React');

const li_s = [];
const text = ['JavaScript', 'React', 'Movies', 'Ice cream'];

text.forEach(elem => {
  li_s.push(React.createElement('li', {}, elem));
});

const list = React.createElement('ul', {className: 'my-interests'}, li_s);

const meInReact = React.createElement('div', {className: 'me'}, [title, par, list]);

ReactDOM.render(
  meInReact,
  document.getElementById('global')
);

export default meInReact
