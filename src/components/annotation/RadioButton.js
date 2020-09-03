import React from "react";

class RadioButton extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        id: props.id,
        labels: props.labels
      }
      this.onValueChange = this.onValueChange.bind(this);
      this.formSubmit = this.formSubmit.bind(this);
    }
    
    onValueChange(event) {
        this.setState({  
          selectedOption: event.target.value
        });
      }

      createRadioButtonList(labels){
        console.log(labels)
        const radioButtons = labels.map((radioButton, index) =>
            <div key={index}>
                <label>
                    <input type="radio" 
                    id={this.state.id}
                    onChange={this.onValueChange}
                    value={radioButton}
                    checked={this.state.selectedOption === radioButton}/>
                    {radioButton}
                </label>
            </div>);
            return (
                radioButtons
        );
      }
      formSubmit(event) {
        event.preventDefault();
        console.log(this.state.selectedOption)
      }

      render(){
       const radioButtonList = this.createRadioButtonList(this.props.labels)
       return (
        <React.Fragment>
            <form  onSubmit={this.formSubmit}>
            {/*<fieldset>
              <legend>Annotate the image</legend>*/}
            {radioButtonList}
            <button type="submit">Save annotation</button>
            </form>  
        </React.Fragment>
      );
    }
}
  
export default RadioButton;

  