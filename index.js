//Code React element here
var H1 =   React.createElement('h1',{}, "An Awesome Person")
var P =   React.createElement('p',{}, "Who is learning React")
var UL  =  React.createElement('ul', {},
      [
        React.createElement('li', {}, 'JavaScript'),
        React.createElement('li',  {},'React'),
        React.createElement('li', {},'Movies'),
          React.createElement('li', {}, 'Ice cream')
      ]
    )

var meInReact = React.createElement('div' , {className:"me"},[H1,P,UL])

ReactDOM.render( meInReact,document.getElementById('main'))
