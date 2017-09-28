import React from 'react';
import ReactDOM from 'react-dom';

// IMPORTANT!!!! uncomment the lines below to make your tests work
class meInReact extends React.Component{
  render(){
    return(
      <div class="me">
        <h1>An Awesome Person</h1>
        <p>Who is learning React</p>

        <ul class="my-interests">
          <li>JavaScript</li>
          <li>React</li>
          <li>Movies</li>
          <li>Ice cream</li>
        </ul>
      </div>
    )
  }
}
ReactDOM.render(
  <meInReact />,
  document.getElementById('root')
);

export default meInReact
