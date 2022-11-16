import React, { Component } from 'react'

export default class Screen extends Component {
    render() {
        const { currentState } = this.props;
        let showText = '';
        if (currentState.hasFirst) {
            showText = currentState.secondNumber ? currentState.secondNumber : '0';
        } else {
            showText = currentState.firstNumber ? currentState.firstNumber : '0';
        }

        return (
            <div className="border border-success px-3 mb-3 text-end">
                <p className='pt-2'>
                    {currentState.firstNumber ? currentState.firstNumber : '0'}
                    {currentState.hasFirst ? currentState.operator : ''}
                    {currentState.hasResult ? (currentState.secondNumber ? currentState.secondNumber : '') + '=' : ''}
                </p>
                <h3 className='p-0'>
                    {currentState.mess ? currentState.mess : showText}
                </h3>
            </div>
        )
    }
}
