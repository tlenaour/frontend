import React from "react";
import Annotations from "./Annotations";
import Button from '@material-ui/core/Button';
const API = 'http://localhost:5000/api/v1/annotations';

class AnnotationReview extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        annotations:[],
        isLoaded:false,
        current_img_url: '',
        current_annotation_index:0,
        current_annotations: [],
      }
      this.handleNextImage = this.handleNextImage.bind(this);
      this.handlePreviousImage = this.handlePreviousImage.bind(this);

    }  

    componentDidMount(){ 
      fetch(API)
        .then(response => response.json())
        .then(data => this.setState({ annotations: data, current_img_url: data[0].file_url, current_annotations:data[0].annotations, isLoaded:true}))
      .catch(error => this.setState({ error, isLoaded: true }));
      console.log('Projects from state : ' +  this.state.projects)
    }

    handleNextImage(event){
      console.log(this.state.annotations)
      console.log(this.state.current_annotation_index)
      this.setState({  
        project_type: event.target.value,
        current_annotation_index: this.state.current_annotation_index+1,
        current_img_url:this.state.annotations[this.state.current_annotation_index+1].file_url,
        current_annotations:this.state.annotations[this.state.current_annotation_index+1].annotations
      });
    }
    handlePreviousImage(event){
      console.log(this.state.annotations)
      console.log(this.state.current_annotation_index)
      this.setState({  
        project_type: event.target.value,
        current_annotation_index: this.state.current_annotation_index-1,
        current_img_url:this.state.annotations[this.state.current_annotation_index-1].file_url,
        current_annotations:this.state.annotations[this.state.current_annotation_index-1].annotations
      });
    }
      render(){
      if(this.state.isLoaded){
       return (
        <React.Fragment>
            <img src={this.state.current_img_url} alt="logo" />
            <Annotations 
            /*id="1"*/ 
            annotations={this.state.current_annotations}
            />
            <Button onClick={this.handlePreviousImage} variant="contained">Previous image</Button>
            <Button onClick={this.handleNextImage} variant="contained">Next image</Button>

        </React.Fragment>
      );
    }
    else{
      return <div></div>
    }
  }
}
export default AnnotationReview;
