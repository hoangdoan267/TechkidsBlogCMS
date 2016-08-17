import React from "react"
import LivePreview from "./preview"
import CategorySelect from "../containers/select-category-container"
import FileBox from './file-box';
export default class PostForm extends React.Component {

  constructor(props, article, time){
    super(props)
    this.state = {
      title: '',
      content: '',
      category: '',
      image_url: ''
    }
    this.handleCompanyChange = this.handleCompanyChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.handleCategoryChange = this.handleCategoryChange.bind(this)
    this.handleImageChange = this.handleImageChange.bind(this)
    this.submitHandle = this.submitHandle.bind(this)

  }

  handleCompanyChange(e) {
    this.setState({title : e.target.value});
  }

  handleDescriptionChange(e) {
    this.setState({content : e.target.value})
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
    e.preventDefault()
    console.log(this.state)
    this.props.submit(this.state)
  }

  render(){
    console.log(this.state)
    return (
        <div>
        <FileBox changeImage={this.handleImageChange} />
        <form class="form-horizontal" onSubmit={this.submitHandle} > 
            <fieldset>
              <div class="form-group">
                <div class ="col-sm-8 col-sm-offset-2">
                  <a href="http://assemble.io/docs/Cheatsheet-Markdown.html" target="_blank">Don't know how to use Markdown?</a>
                </div>
              </div>
              <div class="form-group">
                <label for="CompanyName" class="col-sm-2 control-label">Title</label>
                <div class="col-sm-8">
                  <input type="text" class="form-control" id="CompanyName" placeholder="Title" 
                  onChange={this.handleCompanyChange}
                  required/>
                </div>
              </div>



              <CategorySelect select = {this.handleCategoryChange}/>
              
              <div class="form-group">
                <label for="CompanyName" class="col-sm-2 control-label">Thumbnail Image</label>
                <div class="col-sm-8">
                  <div class="input-group">
                    <input type="text" class="form-control" id="imageurl" placeholder="Image URL"
                    required
                    />
                    <span class="input-group-btn">
                      <button class="btn btn-primary" type="button" data-toggle="modal" data-target="#myModal">Choose File!</button>
                    </span>
                  </div>
                </div>
              </div>

              <div class="form-group">
                <div class="col-sm-4 col-sm-push-2">
                  <div class="thumbnail">
                    <img src ="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjQyIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDI0MiAyMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzEwMCV4MjAwCkNyZWF0ZWQgd2l0aCBIb2xkZXIuanMgMi42LjAuCkxlYXJuIG1vcmUgYXQgaHR0cDovL2hvbGRlcmpzLmNvbQooYykgMjAxMi0yMDE1IEl2YW4gTWFsb3BpbnNreSAtIGh0dHA6Ly9pbXNreS5jbwotLT48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwhW0NEQVRBWyNob2xkZXJfMTU2OTkyYzM1ODQgdGV4dCB7IGZpbGw6I0FBQUFBQTtmb250LXdlaWdodDpib2xkO2ZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIE9wZW4gU2Fucywgc2Fucy1zZXJpZiwgbW9ub3NwYWNlO2ZvbnQtc2l6ZToxMnB0IH0gXV0+PC9zdHlsZT48L2RlZnM+PGcgaWQ9ImhvbGRlcl8xNTY5OTJjMzU4NCI+PHJlY3Qgd2lkdGg9IjI0MiIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSI4OS44NTkzNzUiIHk9IjEwNS4xIj4yNDJ4MjAwPC90ZXh0PjwvZz48L2c+PC9zdmc+" id="thumbnail_image"/>
                  </div>
                </div>
                <div class="col-sm-6">
                </div>
              </div>

              <div class="form-group">
                <label for="textArea" class="col-sm-2 control-label">Content</label>
                <div class="col-sm-8">
                  <textarea class="form-control" rows="10" id="textArea" 
                  onChange={this.handleDescriptionChange}
                  required></textarea>
                 </div>
              </div>

              <div class="form-group">
                <div class="col-sm-8 col-sm-offset-2">
                  <button type="submit" class="btn btn-primary">Submit</button>
                </div>
              </div>
            </fieldset>
          </form>

          <div class="alert alert-dismissible" id="notification"></div>
          <LivePreview content={this.state} />
        </div>
      )
  }
  
}
