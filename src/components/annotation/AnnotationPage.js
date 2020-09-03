import React from "react";
import RadioButton from "./RadioButton"
const API = 'http://localhost:5000/api/v1/images_to_annotate';

class AnnotationPage extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        annotations:[],
        isLoaded:false,
        img_url: '',
        current_annotation:0,
        instruction: props.instruction,
        labels: []
      }
    } 
    componentDidMount(){ 
      fetch(API)
        .then(response => response.json())
        .then(data => {
          console.log('labels : ' + data[0].labels)
          this.setState({ image_to_annotate: data, img_url: data[0].file_url, labels: data[0].labels, isLoaded:true})})
      .catch(error => this.setState({ error, isLoaded: true }));
      console.log('Projects from state : ' +  this.state.projects)
    }

      render(){
      if(this.state.isLoaded){
       return (
        <React.Fragment>
            <img src={this.state.img_url} alt="logo" />
            <h1>{this.state.instruction} </h1>
            <RadioButton 
            /*id="1"*/ 
            labels={this.state.labels}
            />
        </React.Fragment>
      );
    }
    else{
      return <div></div>
    }
  }
}
export default AnnotationPage;
