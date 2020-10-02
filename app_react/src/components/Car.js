import React from 'react';

class Car extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            brand: 'Ford',
            model: 'Mustang',
            color: 'red',
            year: 1964,
        };
    };

    changeColor = () => {
        this.setState({ color: 'blue' }, () => {
            console.log(this.state.color);
        });
    }

    render() {
        return (
            <>
                <h1>My { this.props.brand }</h1>
                <p>
                    It is a { this.state.color } { this.state.model } from { this.props.year }
                </p>
                <button type="button" onClick={this.changeColor}>Change Color</button>
            </>
        );
    };
}

export default Car;