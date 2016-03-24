import React, { Component } from 'react';
import Alert from '../src/alert.js';
import '../assets/alerts.less';

export default class Simple extends Component {
    render() {
        return (
            <div>
                <Alert myStyle="success">This is success</Alert>
                <Alert myStyle="info">This is info</Alert>
                <Alert myStyle="warning">This is warning</Alert>
                <Alert myStyle="danger">This is danger</Alert>
            </div>
        );
    }
};
