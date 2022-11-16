import React, { Component } from 'react'

export default class Keyboard extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='p-0 col-3'>
                        <button onClick={() => {this.props.setCurrentState("DELETE")}} className='btn btn-light py-3 border  w-100'>CE</button>
                    </div>
                    <div className='p-0 col-3'>
                        <button onClick={() => {this.props.setCurrentState("DELETE_ALL")}} className='btn btn-light py-3 border  w-100'>C</button>
                    </div>
                    <div className='p-0 col-3'>
                        <button onClick={() => {this.props.setCurrentState("DELETE_ONE")}} className='btn btn-light py-3 border  w-100'><i className="fa fa-backspace"></i></button>
                    </div>
                    <div className='p-0 col-3'>
                        <button onClick={() => {this.props.setCurrentState("SET_OPERATOR",'/')}} className='btn btn-light py-3 border  w-100'>/</button>
                    </div>
                    <div className='p-0 col-3'>
                        <button onClick={() => {this.props.setCurrentState("ADD_NUMBER",'7')}} className='btn btn-light py-3 border  w-100'>7</button>
                    </div>
                    <div className='p-0 col-3'>
                        <button onClick={() => {this.props.setCurrentState("ADD_NUMBER",'8')}} className='btn btn-light py-3 border  w-100'>8</button>
                    </div>
                    <div className='p-0 col-3'>
                        <button onClick={() => {this.props.setCurrentState("ADD_NUMBER",'9')}} className='btn btn-light py-3 border  w-100'>9</button>
                    </div>
                    <div className='p-0 col-3'>
                        <button onClick={() => {this.props.setCurrentState("SET_OPERATOR",'x')}} className='btn btn-light py-3 border  w-100'>x</button>
                    </div>
                    <div className='p-0 col-3'>
                        <button onClick={() => {this.props.setCurrentState("ADD_NUMBER",'4')}} className='btn btn-light py-3 border  w-100'>4</button>
                    </div>
                    <div className='p-0 col-3'>
                        <button onClick={() => {this.props.setCurrentState("ADD_NUMBER",'5')}}  className='btn btn-light py-3 border  w-100'>5</button>
                    </div>
                    <div className='p-0 col-3'>
                        <button onClick={() => {this.props.setCurrentState("ADD_NUMBER",'6')}}  className='btn btn-light py-3 border  w-100'>6</button>
                    </div>
                    <div className='p-0 col-3'>
                        <button onClick={() => {this.props.setCurrentState("SET_OPERATOR",'+')}}  className='btn btn-light py-3 border  w-100'>+</button>
                    </div>
                    <div className='p-0 col-3'>
                        <button onClick={() => {this.props.setCurrentState("ADD_NUMBER",'1')}}  className='btn btn-light py-3 border  w-100'>1</button>
                    </div>
                    <div className='p-0 col-3'>
                        <button onClick={() => {this.props.setCurrentState("ADD_NUMBER",'2')}}  className='btn btn-light py-3 border  w-100'>2</button>
                    </div>
                    <div className='p-0 col-3'>
                        <button onClick={() => {this.props.setCurrentState("ADD_NUMBER",'3')}}  className='btn btn-light py-3 border  w-100'>3</button>
                    </div>
                    <div className='p-0 col-3'>
                        <button onClick={() => {this.props.setCurrentState("SET_OPERATOR",'-')}}  className='btn btn-light py-3 border  w-100'>-</button>
                    </div>
                    <div className='p-0 col-6'>
                        <button onClick={() => {this.props.setCurrentState("ADD_NUMBER",'0')}} className='btn btn-light py-3 border  w-100'>0</button>
                    </div>
                    <div className='p-0 col-3'>
                        <button onClick={() => {this.props.setCurrentState("ADD_NUMBER",'.')}} className='btn btn-light py-3 border  w-100'>,</button>
                    </div>
                    <div className='p-0 col-3'>
                        <button onClick={() => {this.props.setCurrentState("CALC")}} className='btn btn-light py-3 border  w-100'>=</button>
                    </div>
                </div>
            </div>
        )
    }
}
