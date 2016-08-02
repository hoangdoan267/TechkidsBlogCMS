import React from "react"
import LivePreview from "./preview"
export default class PostForm extends React.Component {

  constructor(props, article, time){
    super(props)
    this.state = {
      title: '',
      content: '',
    }
    this.handleCompanyChange = this.handleCompanyChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.submitHandle = this.submitHandle.bind(this)
  }

  handleCompanyChange(e) {
    this.setState({title : e.target.value});
  }

  handleDescriptionChange(e) {
    this.setState({content : e.target.value})
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
        <form class="form-horizontal" onSubmit={this.submitHandle} > 
            <fieldset>
              <div class="form-group">
                <div class ="col-lg-8 col-lg-offset-2">
                  <a href="http://assemble.io/docs/Cheatsheet-Markdown.html">Don't know how to use Markdown?</a>
                </div>
              </div>
              <div class="form-group">
                <label for="CompanyName" class="col-lg-2 control-label">Title</label>
                <div class="col-lg-8">
                  <input type="text" class="form-control" id="CompanyName" placeholder="Company Name" 
                  onChange={this.handleCompanyChange}
                  required/>
                </div>
              </div>
              <div class="form-group">
                <label for="textArea" class="col-lg-2 control-label">Content</label>
                <div class="col-lg-8">
                  <textarea class="form-control" rows="10" id="textArea" 
                  onChange={this.handleDescriptionChange}
                  required></textarea>
                 </div>
              </div>

              <div class="form-group">
                <div class="col-lg-8 col-lg-offset-2">
                  <button type="submit" class="btn btn-primary">Submit</button>
                </div>
              </div>
            </fieldset>
          </form>
          <LivePreview content={this.state} />
        </div>
      )
  }
  
}
