import {Link, useLocation} from "react-router-dom";
import  logo_transparent from '../images/logo_transparent.png'
import {MyRoutes, NavBarLinksArray} from "../../data/MyRoutes";

function  isLoggedIn(){
    return true
}

function NavBarEntry(route){
    let currentRouterPath = useLocation().pathname
    let ui = ""
    if (route.routerLink === MyRoutes.HOME.routerLink) {
        ui = (<div className="nav_header">
            <img src={logo_transparent} alt="homepage icon"/>
            <h3 className="h3">{route.name}</h3>
        </div>)
    } else {
        let selected = currentRouterPath === route.routerLink

        let sameRoutes =  [MyRoutes.HOME.routerLink, MyRoutes.ROOMS.routerLink]
        if (sameRoutes.includes(currentRouterPath) && sameRoutes.includes(route.routerLink)) {
            selected = true
        }
        let selectedCss = "h5 bt  bt_pill bt_selected"
        let unselectedCss =  "h5 bt  bt_pill"
        ui = (<button className={selected ? selectedCss : unselectedCss}>
            <i className={route.emoji_css}/><span>{route.name}</span>
        </button>)
    }

    return (<Link to={route.routerLink}>{ui}</Link>)
}

export function NavBar() {
    let routeToBeRemoved = isLoggedIn() ? MyRoutes.SIGNUP : MyRoutes.PROFILE
    let navBarRoutes = []
    NavBarLinksArray.forEach(route=>{
        if(route.routerLink!==routeToBeRemoved.routerLink){
            navBarRoutes.push(route)
        }
    })

    let entriesMap = navBarRoutes.map(route => NavBarEntry(route))

    return (<section className="sec_nav">{entriesMap}</section>)
}
