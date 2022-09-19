import Menu from "./Menu";
import Details from "./Details";
const Main = () =>{
    const yellow = "yellow";
    const orange = "orange";
    const green = "green";
    return(
        <div className = "box-shadow">
            
            
            <Menu />
            <br/>
          
            <h3  className="margin-left lft">Active Deposite <spar className= "Numbercircles"> 2 </spar> <button className="float-right">+</button></h3>
            <Details yl = {yellow} gr = {green}/>
            <br/>
            <br/>
            <br/>
            <h3 className="margin-left lft">Closed Deposite  <spar className= "Numbercircles"> 2 </spar></h3>
            <Details yl = {yellow}  gr ={orange} />
        </div>
    )
}
export default Main;