import React,{Component} from 'react';
import SubjectAdder from './subjectAdder';
import Tasklist from './tasklist';
class Component1 extends Component{
    constructor(props){
        super(props);
        this.state = {
            subject: [],
            subjectname: '',
        }
        this.Addnewtask = this.Addnewtask.bind(this);
        this.removeTask = this.removeTask.bind(this);
    }

    Addnewtask(task){
        let Nexttask = this.state.subject.slice();
        Nexttask = Nexttask.concat(task);
        this.setState({
            subject: Nexttask
        });
    }

    removeTask(index){
        let nextTask = this.state.subject.slice();
        nextTask.splice(index,1);
        this.setState({
            subject: nextTask,
            subjectname: this.state.subjectname
        });
    }
    render(){
        return(
            <div className="container-fluid" style={{marginTop:"40px",}}>
                <div className="body">
                    <h2>To Do List</h2>
                    <SubjectAdder Addnewtask={this.Addnewtask}/>
                    <Tasklist Task={this.state.subject} removeTask={this.removeTask}/>
                </div>
            </div>
        );
    }
}

export default Component1; 