import React from 'react';
import ReactDOM from 'react-dom';

// IMPORTANT!!!! uncomment the lines below to make your tests work

const header = React.createElement('h1', {}, "Neel Bhoopalam");
const sub_description = React.createElement('p', {}, "is testing out Flatiron School");
const list = React.createElement('ul', {className: 'my-interests'},
                                          [
                                            React. createElement('li', {}, 'Tennis'),
                                            React. createElement('li', {}, 'Movies'),
                                            React. createElement('li', {}, 'Soccer')
                                          ]
                                );

const meInReact = React.createElement('div', {className: 'me'}, [header, sub_description, list]  );



ReactDOM.render(
  meInReact,
  document.getElementById('root')
);

export default meInReact
