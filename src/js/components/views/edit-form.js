import React from "react"
import LivePreview from "./preview"
import FileBox from './file-box';
import CategorySelect from "../containers/select-category-container"
export default class EditForm extends React.Component {

  constructor(props, article){
    super(props);
    this.state= {
      _id: this.props._id,
      title: this.props.title,
      content: this.props.content,
      category: this.props.category,
      image_url: this.props.image_url
    }
    this.handleCompanyChange = this.handleCompanyChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.handleCategoryChange = this.handleCategoryChange.bind(this)
    this.handleImageChange = this.handleImageChange.bind(this)
    this.submitHandle = this.submitHandle.bind(this)
  }

   componentWillReceiveProps(nextProps) {
     this.setState({
      _id: nextProps._id,
      title: nextProps.title,
      content: nextProps.content,
      category: nextProps.category,
      image_url: nextProps.image_url
    });
  }

  handleCompanyChange(e) {
    this.setState({title: e.target.value});
  }

  handleDescriptionChange(e) {
    this.setState({content: e.target.value});
  }

  handleCategoryChange(e) {
    this.setState({category: e.target.value})
  }

  handleImageChange() {
    let url = $('#imageurl').val()
    this.setState({image_url: url})
    $('#thumbnail_image').attr('src', url)
  }

  submitHandle(e){
    e.preventDefault();
    this.props.submit(this.state)
  }

  render(){
    console.log(this.state)
    return (
        <div class="row">
          <div class="col-sm-12">
            <div class="form-group">
              <img class="img-thumbnail img-responsive" src={this.state.image_url} id="thumbnail_image"/>
            </div>
            <div class="form-group">
                <div class="input-group">
                  <input type="hidden" class="form-control" id="imageurl" placeholder="Image URL"
                  required
                  />
                  <span class="input-group-btn">
                    <button class="btn btn-primary" type="button" data-toggle="modal" data-target="#myModal">File Manager</button>
                  </span>
                </div>
            </div>
          </div>
          <FileBox changeImage={this.handleImageChange} />
          <form onSubmit={this.submitHandle} class="col-sm-6"> 
              <fieldset>
                <div class="form-group">
                    <input type="text" class="form-control" id="CompanyName" placeholder="Title" 
                    onChange={this.handleCompanyChange}
                    value={this.state.title} 
                    required/>
                </div>

                <CategorySelect select = {this.handleCategoryChange} default = {this.state.category}/>

                <div class="form-group">
                    <a href="http://assemble.io/docs/Cheatsheet-Markdown.html" target="_blank">Don't know how to use Markdown?</a>
                </div>
                
                <div class="form-group">
                    <textarea class="form-control" rows="20" id="textArea" 
                    onChange={this.handleDescriptionChange}
                    value={this.state.content}
                    required></textarea>
                </div>

                <div class="form-group">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
              </fieldset>
              <div class="alert alert-dismissible" id="notification"></div>
            </form>

          
          <LivePreview content={this.state} />
        </div>
      )
  }
  
}
