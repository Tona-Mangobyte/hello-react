import React  from 'react'

export class MyComponent extends React.Component {

    render() {
        return <div><h3>Hello, { this.props.name }</h3></div>
    }
}
