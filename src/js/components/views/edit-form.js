import React from "react"
import LivePreview from "./preview"
import CategorySelect from "../containers/select-category-container"
export default class EditForm extends React.Component {

  constructor(props, article){
    super(props);
    this.state= {
      _id: this.props._id,
      title: this.props.title,
      content: this.props.content,
      category: this.props.category
    }
    this.handleCompanyChange = this.handleCompanyChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.handleCategoryChange = this.handleCategoryChange.bind(this)
    this.submitHandle = this.submitHandle.bind(this)
  }

   componentWillReceiveProps(nextProps) {
     this.setState({
      _id: nextProps._id,
      title: nextProps.title,
      content: nextProps.content,
      category: nextProps.category
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

  submitHandle(e){
    e.preventDefault();
    this.props.submit(this.state)
  }

  render(){
    console.log(this.state)
    return (
        <div>
        <form class="form-horizontal" onSubmit={this.submitHandle} > 
            <fieldset>
              <div class="form-group">
                <label for="CompanyName" class="col-lg-2 control-label">Title</label>
                <div class="col-lg-8">
                  <input type="text" class="form-control" id="CompanyName" placeholder="Company Name"
                  value={this.state.title} 
                  onChange={this.handleCompanyChange}
                  required/>
                </div>
              </div>
              <CategorySelect select = {this.handleCategoryChange} default = {this.state.category}/>
              <div class="form-group">
                <label for="textArea" class="col-lg-2 control-label">Description</label>
                <div class="col-lg-8">
                  <textarea class="form-control" rows="10" id="textArea"
                  value={this.state.content}   
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
