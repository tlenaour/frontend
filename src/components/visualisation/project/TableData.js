import React from "react";
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';


class TableData extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        projects: props.projects
      }
    }
    componentDidMount(){   
      {/*fetch(API)
        .then(response => response.json())
        .then(data => {console.log(data);this.setState({ headers: Object.keys(data[0]), projects:data})})
      .catch(error => this.setState({ error, isLoading: false }));*/}
        console.log('Tabledata mounted')
    }
      render(){
        console.log(this.state.projects)
       return (
        <React.Fragment>
           <TableBody>
                {this.state.projects.map((project, index) => (
                <TableRow key={index}>
                    <TableCell>{project.project_id}</TableCell>
                    <TableCell>{project.project_name}</TableCell>
                    <TableCell>{project.project_type}</TableCell>
                </TableRow>
                ))}
            </TableBody>
        </React.Fragment>
      );
    }
}
export default TableData;

  