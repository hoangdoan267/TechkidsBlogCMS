import React from "react"
export default class EditCategoryForm extends React.Component {

  constructor(props, article){
    super(props);
    this.state= {
      _id: this.props._id,
      title: this.props.title,
      content: this.props.content
    }
    this.handleCompanyChange = this.handleCompanyChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.submitHandle = this.submitHandle.bind(this)
  }

   componentWillReceiveProps(nextProps) {
     this.setState({
      _id: nextProps._id,
      title: nextProps.title,
      description: nextProps.description

    });
  }

  handleCompanyChange(e) {
    this.setState({title: e.target.value});
  }

  handleDescriptionChange(e) {
    this.setState({description: e.target.value});
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

              <div class="form-group">
                <label for="textArea" class="col-lg-2 control-label">Description</label>
                <div class="col-lg-8">
                  <textarea class="form-control" rows="10" id="textArea"
                  value={this.state.description}   
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
        </div>
      )
  }
  
}
