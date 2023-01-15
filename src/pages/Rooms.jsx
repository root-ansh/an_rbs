import  img_mmb from '../commons/img_mmb.png'
import  img_pb from '../commons/img_pb.png'
import {useState} from "react";

function SpaceDiv(){
    return (
        <div className="sec_space"></div>
    )
}

function Filters({hideSection}){
    // hideSection = "" or "sec_filters_hide"
    return(
        <div className={`sec_filters ${hideSection}`}>
            <SpaceDiv/>
            <div className="sec_area">
                <h5 className="h5">Place:</h5>
                <div className="sec_area_chooser">
                    <div className="area">
                        <img alt="panda" srcSet={img_mmb}></img>
                        <span>Manav Mitra Bhawan</span>
                    </div>
                    <div className="area selected">
                        <img alt="panda"  srcSet={img_pb}></img>
                        <span>Prout  Bhawan</span>
                    </div>


                </div>
            </div>
            <div className="sec_cost">
                <h5 className="h5">Room charges:</h5>
                <div className="sec_range">
                    <span>3000</span>
                    <input type="range" min="3000" max="50000" value="10000" className="slider" id="range_cost"/>
                    <span>50000</span>
                </div>
                <p>Max Price: Any cost per Annum</p>
            </div>
            <div className="sec_capacity">
                <h5 className="h5">Room Capacity: </h5>
                <div className="sec_range">
                    <span>2</span>
                    <input type="range" min="2" max="16" value="4" className="slider" id="range_capacity"/>
                    <span>16</span>
                </div>
                <p>4 people</p>
            </div>
            <div className="sec_additional_filters">
                <h5 className="h5">Additional Filters:</h5>

                <p>
                    <input type="checkbox" id="unreserved" name="unreserved" value="unreserved"/><label htmlFor="unreserved">Only show the rooms that are not yet booked</label>
                </p>
                <p>
                    <input type="checkbox" id="toilet" name="toilet" value="toilet"/><label htmlFor="toilet">Must have an attached toilet</label>
                </p>
                <p>
                    <input type="checkbox" checked id="fan" name="fan" value="fan"/><label htmlFor="fan">Must have a fan</label>
                </p>
                <br></br>

                <p><b>Toilet Type:</b></p>
                <div className="toilet_type_g">
                    <p>
                        <input type="radio" checked name="rb_type" id="rb_all" value="rb_all"/><label htmlFor="rb_all">Any</label>
                    </p>
                    <p>
                        <input type="radio" name="rb_type" id="rb_indian" value="rb_indian"/><label htmlFor="rb_indian">Indian Toilet</label>
                    </p>
                    <p>
                        <input type="radio" name="rb_type" id="rb_western" value="rb_western"/><label htmlFor="rb_western">Western Toilet</label>
                    </p>

                </div>
            </div>


        </div>
    )
}

function SingleRoom(){
    return(
        <div className="room">
            <div className="room_img">
                <div className="room_img_main">
                    <img src="" alt="" srcSet={img_mmb}></img>
                </div>
                <div className="room_img_others">
                    <img className="selected" src="" alt="" srcSet={img_mmb}></img>
                    <img src="" alt="" srcSet={img_pb}></img>
                    <img src="" alt="" srcSet={img_mmb}></img>
                    <img src="" alt="" srcSet={img_pb}></img>
                    <img src="" alt="" srcSet={img_mmb}></img>
                    <img src="" alt="" srcSet={img_pb}></img>
                    <img src="" alt="" srcSet={img_mmb}></img>
                    <img src="" alt="" srcSet={img_pb}></img>
                    <img src="" alt="" srcSet={img_mmb}></img>
                    <img src="" alt="" srcSet={img_pb}></img>

                </div>
            </div>

            <div className="room_text">
                <div className="room_title">
                    <p>
                        <span className="rt_room"># 01</span>
                        <span className="rt_capacity_ic fa-regular fa-user"></span>
                        <span className="rt_capacity"> Upto 4 people </span>
                    </p>
                </div>
                <div className="room_conditions">
                               <span className="rc">
                                   <i className="fa-solid fa-restroom"></i>
                                   <span>Condition 1</span>
                               </span>
                    <span className="rc">
                                   <i className="fa-solid fa-toilet"></i>
                                   <span>Condition 1</span>
                               </span>
                    <span className="rc">
                                   <i className="fa-solid fa-toilet"></i>
                                   <span>Condition 1</span>
                               </span>
                    <span className="rc">
                                   <i className="fa-solid fa-toilet"></i>
                                   <span>Condition 1</span>
                               </span>

                </div>

                <div className="room_description">
                    <p className="rd_main">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At deserunt esse impedit inventore
                    </p>

                </div>


                <div className="room_cost_book">
                    <div className="rcb_charges">
                        <p>
                            <span>₹16000/-</span>
                            <s>₹24000/-</s>
                        </p>
                        <p>
                            <i className="fa-solid fa-circle-info"></i>
                            <span>For 1 year</span>
                        </p>

                    </div>
                    <div className="rcb_book">
                        <button className="bt bg_green_d_t_white">RESERVE NOW</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
function FilterResults({expandSection}){
    // expandSection = "" or  "sec_result_area_fw"

    return(
        <div className={"sec_result_area "+expandSection}>

            <div className="room_list">
                <SingleRoom/>
                <SingleRoom/>
                <SingleRoom/>
                <SingleRoom/>
                <SingleRoom/>
                <SingleRoom/>
                <SingleRoom/>
                <SingleRoom/>
                <SingleRoom/>
                <SingleRoom/>


            </div>

            <SpaceDiv/>

            <div className="sec_pagination">
                <p className="h5">
                    You are currently viewing page &nbsp;
                    <span id="sp_page_current">{"currentPg"}&nbsp;</span>of &nbsp;
                    <span id="sp_page_total">{"totalPg"}&nbsp;</span>( <span id="sp_page_resultcount">{"totalResults"}&nbsp;</span> results)
                </p>
                <p>
                    <button id="bt_pageprevious" className="bt bt_pill">
                        <i className="fa fa-arrow-left"></i>
                        <span>Previous</span>
                    </button>

                    <span>&nbsp;&nbsp;&nbsp;</span>

                    <button id="bt_page1" className="bt bt_pill bt_selected">
                        <i className="fa fa-home"></i>
                        <span>Home</span>
                    </button>

                    <span>&nbsp;&nbsp;&nbsp;</span>

                    <button id="bt_pagenext" className="bt bt_pill">
                        <span>Next</span>
                        <i className="fa fa-arrow-right"></i>
                    </button>

                </p>
            </div>

        </div>
    )
}

export function Rooms(){
    let [ui,updateUi] = useState({filters: "",results: ""})


    let toggleFilters = function (){
        if(ui.filters===""){
            updateUi({filters: "sec_filters_hide", results:"sec_result_area_fw"})
        }
        else {
            updateUi({filters: "",results: ""})
        }
    }


    return(
        <div className="sec_rooms">
            <div className="sec_mobile_button">
                <button className="bt bt_pill bg_green_d_t_white" onClick={(e)=>toggleFilters()}>
                    <i className="fa-solid fa-filter"></i>
                    <span>filters</span>
                </button>
            </div>
            <Filters hideSection={ui.filters}/>

            <FilterResults expandSection={ui.results}/>


        </div>
    )
}

//<!--                               <div class="rd_features">-->
//                         <!--                                   <p>Salient Features</p>-->
//                         <!--                                   <ul>-->
//                         <!--                                       <li>Feature 1</li>-->
//                         <!--                                       <li>Feature 2</li>-->
//                         <!--                                       <li>Feature 3</li>-->
//                         <!--                                   </ul>-->
//                         <!--                               </div>-->
//                         <!--                        <button id="bt_pageprevious" class="bt bt_pill" onClick={() => onButtonClick(currentPg>1?(currentPg - 1):(1))}><i class="fa fa-arrow-left"></i><span>Previous</span></button><span>&nbsp;&nbsp;&nbsp;</span>-->
//                         <!--                        <button id="bt_page1" class="bt bt_pill bt_selected" onClick={() => onButtonClick(1)}><i class="fa fa-home"/><span>Home</span></button><span>&nbsp;&nbsp;&nbsp;</span>-->
//                         <!--                        <button id="bt_pagenext" class="bt bt_pill" onClick={() => onButtonClick(currentPg + 1)}><span>Next</span><i class="fa fa-arrow-right"/></button>-->
