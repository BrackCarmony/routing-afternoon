import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class ClassList extends Component {
    constructor() {
        super();

        this.state = {
            students: []
        }
    }

    componentDidMount() {
        return axios.get(`/students?class=${this.props.match.params.class}`).then(res => {
            this.setState({
                students: res.data
            })
        })
    }

    render() {
        const students = this.state.students.map((student, i) => (
            <Link to={`/student/${student.id}`} key={i}>
                <h3>{ student.first_name } { student.last_name }</h3>
            </Link>
        ))

        return (
            <div className='box'>
                <h1>{ this.props.match.params.class }</h1>
                <h2>ClassList:</h2>
                { students }
            </div>
        )
    }

}
