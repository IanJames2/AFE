import React from "react"


export const NavBar = () => {
  return (
  <>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a href="/"><img class="afe_logo" src= "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fatlantic-speed.com%2Fimages%2FF198648690.jpg&f=1&nofb=1" alt="alt" width="75px" height="75px"></img></a>         

  <a class="navbar-brand" href="">Adults Furthering Education</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/">School List <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/add_a_school">Add A School To Your School List</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Select A School From Your List
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/schools/applied">List Of Schools Applied For</a>
      </li>

    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Find A School</button>
    </form>
  </div>
</nav>  
</>
)
}
