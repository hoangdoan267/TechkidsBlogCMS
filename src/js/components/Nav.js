import React from "react";
import {Link, withRouter, browserHistory, IndexLink} from "react-router";

export default class Nav extends React.Component{

  constructor(){
    super();
  }

	render(){

		const { location } = this.props;
    const dashboardClass = location.pathname.match(/^\/dashboard/) || location.pathname === "/" ? "active" : "";
    const postsClass = location.pathname.match(/^\/posts/) ? "active" : "";
    const addNewClass = location.pathname.match(/^\/add-post/) ? "active" : "";
    const categoriesClass = location.pathname.match(/^\/categories/) ? "active" : "";
    const fileClass = location.pathname.match(/^\/file-manager/) ? "active" : "";
 
		return(
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <Link to = "dashboard" className="navbar-brand">TechKids Blogs</Link>
          </div>

          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li class={dashboardClass}><Link to = "dashboard" activeClassName="test">Dashboard</Link></li>
              <li class={postsClass} ><Link to = "posts">Blog Posts Manager</Link></li>
              <li class={categoriesClass} ><Link to = "categories">Categories Manager</Link></li>
            </ul>
          </div>
        </div>
      </nav>

		);
	}
}