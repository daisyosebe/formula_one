// Importing css, nav, and Link
import {Link} from "react-router-dom";
import Nav from "../nav/Nav"
import "./Header.css"

// Exporting functional component
export default function Header(){

  return (

      <div className="headerBox">
        <header>
          {/* Image link to homepage */}
          {/* <div className="logoLink">
            <Link to="/"><img className="logo" src="./dist/images/Daisy.png" alt="" /></Link>
          </div> */}
          <Nav />
        </header>
      </div>

  )
}