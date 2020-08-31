import { createElement, render, Component } from './toy-react'

class MyComponent extends Component{
  render () {
    return (
      <section>
        <h1> My Component </h1>
        {this.children}
      </section>
    )
  }
}

render(
  <MyComponent id="cs" clsss="c">
    <div>abc</div>
    <div></div>
    <div></div>
    <div></div>
  </MyComponent>,
  document.body
)