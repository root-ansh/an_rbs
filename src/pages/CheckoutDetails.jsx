import {useLocation} from "react-router-dom";


export function CheckoutDetails(){
    let location = useLocation()
    let room = location.state
    return(
        <div>
            <p> data is {JSON.stringify(room)}</p>
            <img src={room.img}/>
        </div>
    )
}
