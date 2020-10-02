import React from 'react';
import axios from 'axios';

class Photos extends React.Component
{
    constructor() {
        super();
        this.state = {
            photos: [],
        };
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/photos')
            .then(res => {
                this.setState({ photos : res.data }, () => {
                    console.log(this.state);
                })
            })
            .catch(error => console.log(error.response));
    }

    render() {
        return (
            <>
                <div>
                    { this.state.photos.map(photo => <h1 key={photo.title}>{photo.title}</h1>) }
                </div>
            </>
        )
    }
}

export default Photos;