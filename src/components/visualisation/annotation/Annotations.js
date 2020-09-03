import React from "react";
import Table from '@material-ui/core/Table';
import TableHeader from './TableHeader'
import TableData from "./TableData";

class Annotations extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        headers: Object.keys(props.annotations[0]),
        annotations: props.annotations
      }
    }
    componentWillReceiveProps(props){
      this.setState({
        headers: Object.keys(props.annotations[0]),
        annotations: props.annotations
      })
    }

      render(){
       return (
        <React.Fragment>
        <Table size="small">
            <TableHeader headers={this.state.headers}/>
            <TableData annotations ={this.state.annotations}/>
        </Table>
        </React.Fragment>
      );
    }
}
  
export default Annotations;

  