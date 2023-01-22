import img_mmb from "../commons/images/img_mmb.png";
import img_pb from "../commons/images/img_pb.png";
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {MyRoutes} from "../data/MyRoutes";

function SpaceDiv(){
    return (
        <div className="sec_space"></div>
    )
}


function AreaFilter({selectedArea, allAreas}){
    let [selected,setSelected ]= useState(selectedArea)

    function updateSelection(name){
        console.log("update selection called via "+name)
        setSelected(name)
    }

    function AreaHtml(area){
        let css = area.name===selected? "area area_selected" : "area"

        return(
            <div key={area.name} className={css} onClick={()=>updateSelection(area.name)}>
                <img alt={area.name} srcSet={area.img}></img>
                <span>{area.name}</span>
            </div>
        )
    }

    let areaHtmlList = allAreas.map(it=>AreaHtml(it))


    return(
        <div className="sec_area">
            <h5 className="h5">Place:</h5>
            <div className="sec_area_chooser">
                {areaHtmlList}
            </div>
        </div>
    )
}

function RangeFilter({min,max,step,initial,titleText,initialText,lateralText}){
    let [currentValue, setCurrentValue] = useState(initial)

    return(
        <div className="sec_range_filter">
            <h5 className="h5">{titleText}</h5>
            <div className="sec_range">
                <span>{min}</span>
                <input id={titleText} name={titleText} type="range" min={min} max={max} value={currentValue} step={step} className="slider" onChange={e=>setCurrentValue(e.target.value)} />
                <span>{max}</span>
            </div>
            <p >{initialText+currentValue+lateralText}</p>
        </div>
    )
}


//todo
function MiscFilters(){
    return(
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
    )
}

function Filters({hideSection}){
    // hideSection = "" or "sec_filters_hide"
    let areaParams = {
        areas:  [
            {img:img_mmb,name:"Manav Mitra Bhawan"},
            {img:img_pb,name:"Prout Bhawan"}
        ],
        selected: "Prout Bhawan"
    }
    let rf1 = {
        min: "3000"
        , max: "50000"
        , step: "1000"
        , initial: "16000"
        , titleText: "Room charges:"
        , initialText: "Max Rs. "
        , lateralText: "/year"
    }
    let rf2 = {
        min: "2"
        , max: "16"
        , step: "1"
        , initial: "8"
        , titleText: "Room Capacity:"
        , initialText: "Max "
        , lateralText: " people in 1 room"
    }
    return(
        <div className={`sec_filters ${hideSection}`}>
            <AreaFilter selectedArea={areaParams.selected} allAreas={areaParams.areas} />
            <RangeFilter step={rf1.step} initial={rf1.initial} initialText={rf1.initialText} titleText={rf1.titleText} min={rf1.min} max={rf1.max} lateralText={rf1.lateralText} />
            <RangeFilter step={rf2.step} initial={rf2.initial} initialText={rf2.initialText} titleText={rf2.titleText} min={rf2.min} max={rf2.max} lateralText={rf2.lateralText} />
            <MiscFilters/>
        </div>
    )
}

function SingleRoom({room}){
    let roomRequestLink = MyRoutes.room_checkout_detail.routerLink.replace(":request_id", room.id)
    let navigateTo = useNavigate()
    let [selectedImg,setSelectedImg] = useState(room.img)

    let imgListUi = room.imgList.map(link =>{
        let css = selectedImg===link? "selected" : ""
        let onClick = (e)=>setSelectedImg(link)
        return (<img className={css} src={link} srcSet={link} onClick={onClick} key={link} alt="room"/>)
    })


    let conditionsUi = room.conditions.map(it=>{
        let categoryCSS = "rc rc_neutral"
        let icon = it.icon ? it.icon : "fa-solid fa-check"

        if(it.type && it.type===2){
            categoryCSS = "rc rc_bad"
            icon = "fa-solid fa-exclamation"
        }
        if(it.type && it.type===3){
            categoryCSS = "rc rc_average"
            icon = "fa-solid fa-check"
        }
        if(it.type && it.type===4){
            categoryCSS = "rc rc_good"
            icon = "fa-regular fa-star"
        }
        if(it.icon) icon = it.icon

        //<i class="fa-solid fa-triangle-exclamation"></i>

        let text = it.text.toUpperCase()
        return(<span key={text} className={categoryCSS}><i className={icon}/><span>{text}</span></span>)
    })

    let amount = room.amount? room.amount : 0
    let amountS = amount*1.3


    let buttonConfig = {
        text : room.isReserved? "RESERVED" : "RESERVE NOW!",
        disabled: room.isReserved,
        css : room.isReserved? "bt bt_flat bg_gray2_text_black" : "bt bg_green_d_t_white"
    }
    let buttonClick = (e)=>{
        navigateTo(roomRequestLink,{state:room})
    }


    return(
        <div className="room">
            <div className="room_img">
                <div className="room_img_main">
                    <img src="" alt="" srcSet={selectedImg}></img>
                </div>
                <div className="room_img_others">
                    {imgListUi}
                </div>
            </div>

            <div className="room_text">
                <div className="room_title">
                    <p>
                        <span className="rt_room"># {room.roomNo}</span>
                        <span className="rt_capacity_ic fa-regular fa-user"></span>
                        <span className="rt_capacity"> Upto {room.maxPeople} people </span>
                    </p>
                </div>
                <div className="room_conditions">
                    {conditionsUi}
                </div>

                <div className="room_description">
                    <p className="rd_main">{room.description}</p>

                </div>
                <div className="room_cost_book">
                    <div className="rcb_charges">
                        <p><span>₹{amount}/-</span><s>₹ {amountS} /-</s></p>
                        <p><i className="fa-solid fa-circle-info"></i><span>For 1 year</span></p>
                    </div>
                    <div className="rcb_book">
                        {/*<Link to={{pathname: roomRequestLink,state:{xx:JSON.stringify(room)}}} >*/}
                        {/*</Link>*/}
                        <button
                            className={buttonConfig.css}
                            disabled={buttonConfig.disabled}
                            onClick={buttonClick}
                        >
                            {buttonConfig.text}
                        </button>


                    </div>
                </div>
            </div>
        </div>
    )
}




function FilterTogglrButton(){
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
        <div className="sec_mobile_button">
            <button className="bt bt_pill bg_green_d_t_white" onClick={(e)=>toggleFilters()}>
                <i className="fa-solid fa-filter"></i>
                <span>filters</span>
            </button>
        </div>
    )
}
function FilterResults({expandSection}){
    // expandSection = "" or  "sec_result_area_fw"
    let roomJs = {
        id:"room_103",
        isReserved:false,
        amount:16000,
        roomNo:103,
        maxPeople:8,
        img: img_mmb,
        imgList: [img_mmb,img_pb,img_mmb,img_pb,img_mmb,img_pb,img_mmb,img_pb],
        conditions:[
            {type:4,icon:"fa-solid fa-restroom",text:"indian toilet"},
            {text:"24 Hr Water Supply"},
            {text:"24 Hr Electricity Supply"},
            {type:2,text:"No fan"},
        ],
        description: "this is a description.this is a description.this is a description.this is a description.this is a description.this is a description."
    }
    return(
        <div className={"sec_result_area "+expandSection}>

            <div className="room_list">
                <SingleRoom room={roomJs}/>
                <SingleRoom room={roomJs}/>
                <SingleRoom room={roomJs}/>
                <SingleRoom room={roomJs}/>
                <SingleRoom room={roomJs}/>
                <SingleRoom room={roomJs}/>


            </div>

            <SpaceDiv/>

            <div className="sec_pagination">
                <FilterTogglrButton/>
                <hr/>
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

export function Rooms(params={}){
    let filters = params.roomsFilterVisibilityCSS && params.roomsFilterVisibilityCSS.filters !== undefined ? params.roomsFilterVisibilityCSS.filters : ""
    let results = params.roomsFilterVisibilityCSS && params.roomsFilterVisibilityCSS.results !==undefined ? params.roomsFilterVisibilityCSS.results :""
    return(
        <div className="sec_rooms">
            <Filters hideSection={""}/>
            <FilterResults expandSection={""}/>
        </div>
    )
}
