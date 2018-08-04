import React from 'react';
import ReactDOM from 'react-dom';

var title = React.createElement('h1',{},'An Awesome Person');

var paragraph = React.createElement('p',{},'Who is learning React');

var meInReact = React.createElement('div' ,{className : "me"} ,

[ title , paragraph
,
React.createElement('ul',{className :"my-interests"},
[
  React.createElement('li',{},'JavaScript'),
  React.createElement('li',{},'React'),
  React.createElement('li',{},'Movies'),
  React.createElement('li',{},'Ice cream')
]


)
]

);

ReactDOM.render(
  meInReact,
  document.getElementById('global')
);

export default meInReact
