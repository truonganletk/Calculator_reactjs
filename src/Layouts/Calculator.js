
import Keyboard from '../Components/Keyboard'
import Screen from '../Components/Screen'

import React, { Component } from 'react'

export default class Calculator extends Component {
    state = {
        currentState: {
            firstNumber: null,
            secondNumber: null,
            operator: null,
            hasResult: false,
            hasFirst: false,
            mess: null,
            errol: false,
        }
    }

    operator = (operator, a, b) => {
        if (operator === '/') {
            if (b === '0') return "Cannot divide by zero";
            return String(Number(a) / Number(b));
        }
        if (operator === '+') return String(Number(a) + Number(b));
        if (operator === '-') return String(Number(a) - Number(b));
        if (operator === 'x') return String(Number(a) * Number(b));
    }


    setCurrentNumber = (type, value) => {
        const newState = this.state.currentState;
        if (newState.errol) {
            newState.firstNumber = null;
            newState.secondNumber = null;
            newState.operator = null;
            newState.mess = null;
            newState.hasFirst = false;
            newState.hasResult = false;
            newState.errol = false;
        }
        switch (type) {
            case "DELETE_ALL":
                newState.firstNumber = null;
                newState.secondNumber = null;
                newState.operator = null;
                newState.mess = null;
                newState.hasFirst = false;
                newState.hasResult = false;
                newState.errol = false;
                break;
            case "SET_OPERATOR":
                newState.mess = null;
                newState.hasResult = false;
                if (!newState.hasFirst) {
                    newState.firstNumber = newState.firstNumber ? newState.firstNumber : '0';
                    newState.operator = value;
                    newState.hasFirst = true;
                    newState.secondNumber = null;
                } else {
                    if (newState.secondNumber) newState.hasResult = true;
                    if (!newState.hasResult) {
                        newState.operator = value;
                    } else {
                        newState.hasResult = false;
                        newState.firstNumber = this.operator(newState.operator, newState.firstNumber, newState.secondNumber);
                        newState.secondNumber = null;
                        newState.operator = value;
                        if (newState.firstNumber === "Cannot divide by zero") {
                            newState.mess = "Cannot divide by zero";
                            newState.errol = true;
                        }
                    }
                }
                break;
            case "CALC":
                if (!newState.operator) break;
                if (!newState.secondNumber) newState.secondNumber = newState.firstNumber;
                if (newState.hasResult) newState.firstNumber = newState.mess;
                newState.mess = this.operator(newState.operator, newState.firstNumber, newState.secondNumber);
                if (newState.mess === "Cannot divide by zero") {
                    newState.errol = true;
                }
                newState.hasResult = true;
                newState.hasFirst = true;
                break;
            case "DELETE":
                if (newState.hasResult) {
                    newState.firstNumber = null;
                    newState.secondNumber = null;
                    newState.operator = null;
                    newState.mess = null;
                    newState.hasFirst = false;
                    newState.hasResult = false;
                    break;
                }
                newState.mess = null;
                newState.hasFirst ? newState.secondNumber = null : newState.firstNumber = null;
                break;
            case "DELETE_ONE":
                if (newState.hasResult) {
                    newState.firstNumber = null;
                    newState.secondNumber = null;
                    newState.operator = null;
                    newState.mess = null;
                    newState.hasFirst = false;
                    newState.hasResult = false;
                    break;
                }
                if (!newState.firstNumber && !newState.firstNumber) break;
                newState.mess = null;
                newState.hasFirst ? newState.secondNumber = newState.secondNumber.substring(0, newState.secondNumber.length - 1) : newState.firstNumber = newState.firstNumber.substring(0, newState.firstNumber.length - 1);
                break;
            case "ADD_NUMBER":
                if (newState.hasResult) {
                    newState.firstNumber = null;
                    newState.secondNumber = null;
                    newState.operator = null;
                    newState.mess = null;
                    newState.hasFirst = false;
                    newState.hasResult = false;
                }
                newState.mess = null;
                if (newState.hasFirst) {
                    if (value === '.') {
                        (newState.secondNumber ? newState.secondNumber += (newState.secondNumber.indexOf('.') === -1 ? value : '') : newState.secondNumber = '0.');
                    } else {
                        (newState.secondNumber ? newState.secondNumber += value : newState.secondNumber = value);
                        if (newState.secondNumber.indexOf('.') === -1) newState.secondNumber = String(Number(newState.secondNumber));
                    }
                } else {
                    if (value === '.') {
                        (newState.firstNumber ? newState.firstNumber += (newState.firstNumber.indexOf('.') === -1 ? value : '') : newState.firstNumber = '0.');
                    } else {
                        (newState.firstNumber ? newState.firstNumber += value : newState.firstNumber = value);
                        if (newState.firstNumber.indexOf('.') === -1) newState.firstNumber = String(Number(newState.firstNumber));
                    }
                }
                break;
            default:
                break;
        }
        console.log(newState);
        this.setState({
            currentState: newState,
        });
    }

    render() {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ width: '100vh', height: '100vh', margin: 'auto' }}>
                <div className="card shadow p-3 mb-5 bg-body rounded" style={{ width: '500px', height: '500px' }}>
                    <div className="card-body">
                        <h5><i className="fa fa-calculator"></i> Calculator</h5>
                        <Screen currentState={this.state.currentState} />
                        <Keyboard setCurrentState={this.setCurrentNumber} />
                    </div>
                </div>
            </div>
        )
    }
}
