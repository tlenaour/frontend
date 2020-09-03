import React from "react";
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { InputLabel } from "@material-ui/core";
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom'

class CreateProjectForm extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        error: null,
        project_name: '',
        project_name_in_error:true,
        labelers_in_error:true,
        project_type_in_error:true,
        project_type:'',
        labelers:[],
        thomas:false,
        florent:false,
        laetitia:false,
        abderrahmane:false,
        sended:false
      }
      this.onListChange = this.onListChange.bind(this);
      this.onCheckBoxChange = this.onCheckBoxChange.bind(this);
      this.formSubmit = this.formSubmit.bind(this);
      this.onTextFieldChange = this.onTextFieldChange.bind(this);
    }

    onListChange(event) {
        this.setState({  
          project_type: event.target.value
        });
      }
      onCheckBoxChange(event){
          if(event.target.checked){
              let new_labelers = this.state.labelers
              new_labelers.push(event.target.name)
            this.setState({
                labelers:new_labelers
            })
          }else{
            let new_labelers = this.state.labelers.filter(function(ele){ return ele != event.target.name; });
          this.setState({
              labelers:new_labelers
          })
          }
        this.setState({
            [event.target.name]: event.target.checked,
        })
      }
      onTextFieldChange(event){
        this.setState({project_name_in_error: event.target.value.length === 0,
        project_name:event.target.value});
      }
    
      formSubmit(event) {
        event.preventDefault();
        console.log('project_name : ' + this.state.project_name)
        console.log('project_type : ' + this.state.project_type)
        console.log('labelers : ' + this.state.labelers)
        let project_id = Math.floor(Math.random() * 100) + 1;
        let data = {"project_id":  project_id, "project_name": this.state.project_name, "project_type": this.state.project_type}
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        fetch('http://localhost:5000/api/v1/projects', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ sended: true}));
      }

      render(){
        if(this.state.sended){
            return <Redirect to='/projects' />
        }else{
       return (
        <React.Fragment>
        <form onSubmit={this.formSubmit}>
        <TextField 
        error={this.state.project_name_in_error} 
        id="project_name" 
        label="Project name" 
        helperText="Must not be empty"
        onChange={this.onTextFieldChange}/>
        <br></br><br></br>
        <FormControl>
        <InputLabel id="project_type_label">Project Type</InputLabel>
        <Select
            labelId="project_type_label"
            id="project_type"
            error={this.state.project_type.length === 0}
            value={this.state.project_type}
            onChange={this.onListChange}>
            <MenuItem value={'object_detection'}>Object detection</MenuItem>
            <MenuItem value={'classification'}>Classification</MenuItem>
        </Select>
        </FormControl>
        <br></br><br></br>
        <FormControl required error={this.state.labelers.length === 0} component="fieldset">
        <FormLabel component="legend">Choose labelers</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={this.state.thomas} onChange={this.onCheckBoxChange} name="thomas" />}
            label="Thomas"
          />
          <FormControlLabel
            control={<Checkbox checked={this.state.florent} onChange={this.onCheckBoxChange} name="florent" />}
            label="Florent"
          />
          <FormControlLabel
            control={<Checkbox checked={this.state.laetitia} onChange={this.onCheckBoxChange} name="laetitia" />}
            label="Laëtitia"
          />
          <FormControlLabel
            control={<Checkbox checked={this.state.abderrahmane} onChange={this.onCheckBoxChange} name="abderrahmane" />}
            label="Abderrahmane"
          />
        </FormGroup>
        <FormHelperText>You must pick at least one labeler</FormHelperText>
      </FormControl><br></br>
      <Button type="submit" disabled={this.state.has_error} variant="contained">Create project</Button>
        </form>
        </React.Fragment>
      );
       }
    }
}
  
export default CreateProjectForm;

  