import React from 'react';
import ReactDOM from 'react-dom';

const head = React.createElement('h1', {}, 'An Awesome Person');
const para  = React.createElement('p', {}, 'Who is learning React');
const li1 = React.createElement('li', {}, 'JavaScript');
const li2 = React.createElement('li', {}, 'React');
const li3 = React.createElement('li', {}, 'Movies');
const li4 = React.createElement('li', {}, 'Ice cream');
const list = React.createElement('ul', {className: 'my-interests'}, [li1,li2,li3, li4]);
const meInReact = React.createElement('div', {className: 'me'}, [head, para , list] );

// IMPORTANT!!!! uncomment the lines below to make your tests work

ReactDOM.render(
  meInReact,
  document.getElementById('root')
);

export default meInReact
