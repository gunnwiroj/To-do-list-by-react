import React, { Component } from 'react';

class SubjectAdder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subjectname: '',

        }
        this.addTask = this.addTask.bind(this);
    }

    addTask(e) {
        this.setState({
            subjectname: e.target.value
        })
    }

    render() {
        return (
            <div className="container is-fluid" style={{marginTop:"15px"}}>
                <div className="field has-addons has-addons-centered">
                <div className="control">
                    <input className="input" style={{width:"400px",textAlign:"right"}}onChange={this.addTask} placeholder={"Add New Task . . ."}></input>
                </div>
                <div className="control">
                    <a className="button" onClick={() => this.props.Addnewtask(this.state.subjectname)}>
                        <i className="fas fa-plus"></i>
                    </a>
                </div>
                </div>
            </div>
        );
    }
}

export default SubjectAdder;