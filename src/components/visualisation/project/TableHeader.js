import React from "react";
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';


class TableHeader extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        headers: props.headers
      }
    }
      render(){
       return (
        <React.Fragment>
           <TableHead>
                <TableRow>
                {this.state.headers.map((header, index) => (
                    <TableCell key={index}>{header}</TableCell>
                ))}
                </TableRow>
            </TableHead>
        </React.Fragment>
      );
    }
}
export default TableHeader;

  