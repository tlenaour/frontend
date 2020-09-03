import React from "react";
import Table from '@material-ui/core/Table';
import TableHeader from './TableHeader'
import TableData from "./TableData";
const API = 'http://localhost:5000/api/v1/projects';
class Projects extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        headers:[],
        projects:[]
      }
    }
    componentDidMount(){ 
      console.log('Projects mounted')  
      fetch(API)
        .then(response => response.json())
        .then(data => this.setState({ headers: Object.keys(data[0]), projects:data, isLoaded:true}))
      .catch(error => this.setState({ error, isLoaded: true }));
      console.log('Projects from state : ' +  this.state.projects)
    }
      render(){
        if(this.state.isLoaded){
       return (
        <React.Fragment>
        <Table size="small">
            <TableHeader headers={this.state.headers}/>
            <TableData projects ={this.state.projects}/>
        </Table>
        </React.Fragment>
      );
       }
       else{
         return <div></div>
       }
    }
}
  
export default Projects;

  