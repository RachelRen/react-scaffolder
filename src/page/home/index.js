import React, { Component } from 'react';

import Counter from 'Components/counter';
import defaultCourseImg from 'Images/defaultCourseImg.png';
import { request } from '../../util/ajax';


class Home extends Component {
    constructor() {
        super();
        this.state = {
            value: 76,
        };
    }
    componentDidMount() {
        request('http://localhost:3002/userre').then((data) => {
            console.log('test rere tet rere rer', data);
        });
    }
    render() {
        return (
            <div>
                <span>Home</span>
                <span>{this.state.value}</span>
                <img alt="test" src={defaultCourseImg} />
                <Counter />
            </div>
        );
    }
}


export default Home;
