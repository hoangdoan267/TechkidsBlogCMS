import React from 'react';
import { Link } from 'react-router';

// Using "Stateless Functional Components"

export default class PostList extends React.Component{

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
                  <th>Author</th>
                  <th>Date Created</th>
                  <th>Manage</th>
              </tr>
          </thead>
          <tbody>

        {this.props.posts.map(post => {

          return (
            <tr key={post._id} className="data-list-item">
              <td></td>
              <td className="details">
                {post.title}
              </td>
              <td></td>
              <td>{post.date}</td>
              <td>
                <Link to = {`/edit-post/${post._id}`}  className="btn btn-primary btn-sm">Edit</Link>
                <Link to = {`/post/${post._id}`}  className="btn btn-success btn-sm">View</Link>
                <button class="btn btn-danger btn-sm" onClick={this.props.deletePost.bind(null, post._id, post)}>Delete</button>
              </td>
            </tr>
          );

        })}
          </tbody>
        </table>
    )
  }

}