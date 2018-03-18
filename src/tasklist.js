import React,{Component} from 'react';

class Tasklist extends Component{

    render(){
        return(
            <div className="list" style={{marginTop:"30px"}}>
                <ul>
                    {this.props.Task.map((subject,id)=>{
                        return(
                            <div className="container" key={id}>
                            <div className="form-group form-inline">
                            <li style={{paddingTop:"6px"}}>
                                {subject}
                             </li>
                            {'  '}
                            <button className="btn btn-danger"onClick={()=>this.props.removeTask(id)}>
                                <i class="fas fa-times" style={{color:"white"}}></i>
                            </button>
                            </div>
                            </div>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default Tasklist;