import Searchbar from "../Searchbar/Searchbar"
import logo from "../../image/logo-2DayWeather.png"
import "./Navbar.css"


function Navbar({onSearch}) {
  

  return (
    <>
    <nav className='containerNav'>
        <span className='containerLogo'>
            <img className='logo' id="logo" height={75} src={logo} alt="logo" />
        </span>
          <Searchbar className='search' onSearch={onSearch}/>
        
        
    </nav>
    </>
  )
}

export default Navbar