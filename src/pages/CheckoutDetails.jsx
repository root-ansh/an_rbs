import {useLocation} from "react-router-dom";
import {NavBar} from "../commons/components/NavBar";
import {Footer} from "../commons/components/Footer";
import img_mmb from "../commons/images/img_mmb.png";
import img_pb from "../commons/images/img_pb.png";
import {RoomFeaturesUi} from "./Rooms";

export function CheckoutDetails() {
    let location = useLocation()
    let room = location.state

    return (
        <>
            <NavBar/>
            <section className="sec_checkout">
                <div className="ct_title">
                    <h4>You have selected Room #{room.roomNo} </h4>
                </div>

                <div className="ct_images">
                    <div className="cti_main">
                        <img src={img_mmb} alt=""/>
                    </div>
                    <div className="cti_list">
                        <img className="ri_selected" src={img_mmb} alt=""/>
                        <img src={img_pb} alt=""/>
                        <img src={img_mmb} alt=""/>
                        <img src={img_mmb} alt=""/>
                        <img src={img_mmb} alt=""/>
                    </div>
                </div>

                <div className="ct_roominfo">
                    <h5>Room Details</h5>
                    <table className="tb tb_room">
                        <col style={{width:"30%"}}/>
                        <thead>
                            <tr>    <th>Property</th>                   <th>Details</th></tr>
                        </thead>

                        <tbody>
                            <tr>    <td>Room Number</td>                <td>{room.roomNo}</td>  </tr>
                            <tr>    <td>Annual Maintenance Cost</td>    <td>Rs. {room.amount}/-</td></tr>
                            <tr>    <td>Floor</td>                      <td>{room.floor}</td></tr>
                            <tr>    <td>Maximum Capacity</td>           <td> upto {room.maxPeople} People</td></tr>
                            <tr>    <td>Features</td>                   <td>{room.conditions.map(RoomFeaturesUi)}</td></tr>
                            <tr>    <td>Additional Details</td>         <td>{room.description}</td></tr>

                        </tbody>


                    </table>
                </div>
                <div className="ct_userinfo">
                    <h5>User Details</h5>
                    <form>
                        <label htmlFor="fname">First Name</label>
                        <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

                        <label htmlFor="lname">Last Name</label>
                        <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

                        <label htmlFor="country">Country</label>
                        <select id="country" name="country">
                            <option value="australia">Australia</option>
                            <option value="canada">Canada</option>
                            <option value="usa">USA</option>
                        </select>

                        <input type="submit" value="Proceed to checkout"/>
                    </form>
                </div>


            </section>
            <Footer/>
        </>
    )
}
