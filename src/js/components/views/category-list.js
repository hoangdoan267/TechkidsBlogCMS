import React from 'react';
import { Link } from 'react-router';

// Using "Stateless Functional Components"

export default class CategoryList extends React.Component{

  constructor(){
    super()
  }

  render(){
    return (
        <table class="table table-striped table-hover">
          <thead>
              <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Manage</th>
              </tr>
          </thead>
          <tbody>

        {this.props.categories.map(category => {

          return (
            <tr key={category._id} className="data-list-item">
              <td></td>
              <td className="details">
                {category.title}
              </td>
              <td>{category.description}</td>
              <td>
                <Link to = {`/edit-category/${category._id}`}  className="btn btn-primary btn-sm">Edit</Link>
                <button class="btn btn-danger btn-sm" onClick={this.props.delete.bind(null, category._id, category)}>Delete</button>
              </td>
            </tr>
          );

        })}
          </tbody>
        </table>
    )
  }

}