
import React from "react";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <HelloWorldComponent />

        <hr />

        <GreetingsComponent />

        <hr />

        <h3>Hello Wiktor! {5+199}</h3>
        <h3>Hello Robert!</h3>
        <h3>Hello Magda!</h3>
        <h3>Hello Joanna!</h3>

        <hr />

        <MyTextComponent />
      </div>
    );
  }
}
class HelloWorldComponent extends React.Component {
  render() {
    return <h1>Hello World!!!</h1>;
  }
}
class MyTextComponent extends React.Component {
  render() {
    return <p>Start editing to see some magic happen :)</p>;
  }
}
class GreetingsComponent extends React.Component {
  render() {
    return (
      <div>
        <h2>I love React!</h2>
        <h2>I great technology!</h2>
      </div>
    );
  }
}
