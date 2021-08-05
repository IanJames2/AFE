import React from "react"


export const NavBar = () => {
  return (
  <>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a href="/"><img className="afe_logo" src= "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fatlantic-speed.com%2Fimages%2FF198648690.jpg&f=1&nofb=1" alt="alt" width="75px" height="75px"></img></a>         

  <a className="navbar-brand" href="">Adults Furthering Education</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">School List <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/add_a_school">Add A School To Your School List</a>
      </li>
      {/* <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Select A School From Your List
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li> */}
      {/* <li className="nav-item">
        <a className="nav-link" href="/schools/applied">Applied Schools List</a>
      </li> */}

      {/* <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search School Here"
          aria-label="Search"
        ></input>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Find A School
        </button>
      </form> */}
    </ul>
  </div>
</nav>  
</>
)
}
