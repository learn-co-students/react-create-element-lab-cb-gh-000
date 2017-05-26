//Code React element here
const meInReact = React.createElement("div", { className: "me" }, [
  React.createElement("h1", null, "An Awesome Person"),
  React.createElement("p", null, "Who is learning React"),
  React.createElement("ul", { className: "me__interests" }, [
    React.createElement("li", null, "JavaScript"),
    React.createElement("li", null, "React"),
    React.createElement("li", null, "Movies"),
    React.createElement("li", null, "Ice cream")
  ]),
]);
