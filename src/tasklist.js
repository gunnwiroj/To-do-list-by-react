import React, { Component } from 'react';

class Tasklist extends Component {

    render() {
        return (
            <div className="list" style={{ marginTop: "30px" }}>
                <ul>
                    {this.props.Task.map((subject, id) => {
                        return (
                            <div className="container is-fluid" key={id}>
                                <article className="message" style={{ width: "460px" ,marginTop:"10px"}}>
                                    <div className="message-header">
                                        <p>Task {id + 1}</p>
                                    </div>
                                    <div className="message-body">
                                        {subject}
                                        <a className="button is-danger is-small is-outlined" onClick={() => this.props.removeTask(id)} style={{marginLeft:"20px"}}>
                                            <i className="fas fa-times" style={{ color: "is-danger" }}></i>
                                        </a>
                                    </div>
                                </article>

                            </div>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default Tasklist;