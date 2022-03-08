import React, { Component } from 'react'

export default class Server extends Component {
    constructor(props) {
        super(props)
        this.state={
            count:0
        }
    }
    handleClick=()=>{
        console.log(this)
    }
    render() {
        return (
            <div className='text-center text-2xl '>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick} className='rounded-2xl bg-blue-400 p-4 mt-4'>click</button>
            </div>
        )
    }
}
