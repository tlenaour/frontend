import React, {Component} from 'react';
import './App.css';
import AnnnotationPage from "./components/annotation/AnnotationPage"
import Projects from "./components/visualisation/project/Projects"
import AnnotationReview from './components/visualisation/annotation/AnnotationReview'
import CreateProjectForm from './components/creation/project/CreateProjectForm'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class App extends Component{
  constructor() {
    super();
    this.state = {
      labels: [{"value": "urothelial", "label": "urothelial"}, 
              {"value": "conglomerate", "label": "conglomerate"}, 
              {"value": "artefact", "label": "artefact"}],
      instruction: 'Annotate the image',
      img_url: "https://www.auto-moto.com/wp-content/uploads/sites/9/2020/01/peugeot-208-750x410.jpeg",
      headers:['project_id', 'name', 'type', 'nb_assets'],
      projects:[{'project_id': '123648', 'name':'First project', 'type':'Object detection', 'nb_assets': 10}],
      annotations: [{'annotator': 'Thomas', 'label':'Urothelial'}, {'annotator': 'Miche', 'label':'Artefact'}],
      anchorEl: null
    };
    this.handleClick = this.handleClick.bind(this)
    this.handleClose = this.handleClose.bind(this)

  }
  handleClick(event) {
    this.setState({  
      anchorEl: event.currentTarget
    });
  }
  handleClose(event) {
    this.setState({  
      anchorEl: null
    });
  }



  render(){
    return (
    <div className="App">
      <Router>
      <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" color="primary" onClick={this.handleClick}>
        Projects
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={this.state.anchorEl}
        keepMounted
        open={Boolean(this.state.anchorEl)}
        onClose={this.handleClose}
      >
         <Link to="/create_project"><MenuItem onClick={this.handleClose}>Create</MenuItem> </Link>
        <MenuItem onClick={this.handleClose}>View</MenuItem>
      </Menu>
        <nav>
          <ul>
            <li>
              <Link to="/projects"><Button aria-controls="simple-menu" aria-haspopup="true">Projects</Button></Link>
            </li>
            <li>
              <Link to="/create_project">Create new project</Link>
            </li>
            <li>
              <Link to="/review">Review</Link>
            </li>
            <li>
              <Link to="/annotate">Annotate</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/projects">
          <Projects />
          </Route>
          <Route path="/create_project">
          <CreateProjectForm />
          </Route>
          <Route path="/review">
          <AnnotationReview 
        img_url={this.state.img_url}
        annotations={this.state.annotations} 
       />
          </Route>
          <Route path="/annotate">
          <AnnnotationPage
         img_url={this.state.img_url}
         instruction={this.state.instruction} 
         labels={this.state.labels}
       />
          </Route>
        </Switch>
      </div>
    </Router>

       {/*<AnnnotationPage
         img_url={this.state.img_url}
         instruction={this.state.instruction} 
         labels={this.state.labels}
       />

       <Projects
       headers={this.state.headers}
       projects={this.state.projects}  
       />
       <AnnotationReview 
        img_url={this.state.img_url}
        annotations={this.state.annotations} 
       />*/}

    </div>
    );
  }
}
export default App;
