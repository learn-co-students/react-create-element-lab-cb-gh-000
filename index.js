//Code React element here
const list =
  React.createElement('div', {class:'me'},
    React.createElement('h1', {}, 'An Awesome Person'),
    React.createElement('p', {}, 'Who is learning React'),
    React.createElement('ul', {class:'me__interests'},
      [
        React.createElement('li', {}, 'JavaScript'),
        React.createElement('li', {}, 'React'),
        React.createElement('li', {}, 'Movies'),
        React.createElement('li', {}, 'ce cream'),
      ]
    ));

ReactDOM.render(list, document.getElementById('main'));
