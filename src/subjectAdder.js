import React,{Component} from 'react';

class SubjectAdder extends Component{
    constructor(props){
        super(props);
        this.state = {
            subjectname:'',
            
        }
        this.addTask = this.addTask.bind(this);
    }

    addTask(e){
        this.setState({
            subjectname: e.target.value
        })
    }
    
    render() {
        return(
            <div className="container-fluid row">
                <div className="input-group form-inline" style={{marginTop:"30px"}}>
                <input className="form-control col-md-5" onChange={this.addTask} style={{marginLeft:"350px"}} placeholder={"Add New Task . . ."}></input>
                <br/>
                <div className="input-group-append">
                <button className="btn btn-light border " onClick={()=>this.props.Addnewtask(this.state.subjectname)}>
                    <i className="fas fa-plus"></i>
                </button>
                </div>
                </div>
            </div>
        );
    }
}   

export default SubjectAdder;