import React, { Component } from 'react'
import Spinner from './Magnify-1s-200px.gif'

export default class Loading extends Component {
    render() {
        return (
            <div className='text-center'>
                <img src={Spinner} alt="Spinner" />
            </div>
        )
    }
}
