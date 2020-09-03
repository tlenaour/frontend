import React from "react";
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';


class TableData extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        annotations: props.annotations
      }
    }
    componentWillReceiveProps(props){
      this.setState({
        annotations: props.annotations
      })
    }
      render(){
       return (
        <React.Fragment>
           <TableBody>
                {this.state.annotations.map((annotation, index) => (
                <TableRow key={index}>
                    <TableCell>{annotation.annotator}</TableCell>
                    <TableCell>{annotation.label}</TableCell>
                </TableRow>
                ))}
            </TableBody>
        </React.Fragment>
      );
    }
}
export default TableData;

  