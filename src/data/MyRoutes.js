export const MyRoutes = {
    HOME: {
        path: "/",
        routerLink: "/",
        name: "Ananda Nagar Room Booking System.",
        emoji_css: "fa fa-fire",
    },
    ROOMS: {
        path: "rooms",
        routerLink: "/rooms",
        name: "Rooms",
        emoji_css: "fa-solid fa-bed",

    },

    room_detail:{
        path: "room_detail",
        routerLink: "/rooms/:room_id",
        name: "internal",

    },

    room_checkout_detail: {
        path: "room_checkout_detail",
        routerLink: "/checkout/:request_id/details",
        name:"internal"
    },
    room_checkout_pay: {
        path: "room_checkout_pay",
        routerLink: "/checkout/:request_id/pay",
        name:"internal"
    },


    HISTORY:{
        path: "history",
        routerLink: "/history",
        name: "Booking History",
        emoji_css: "fa-solid fa-book",

    },

    SIGNUP:{
        path: "signup",
        routerLink: "/signup",
        name: "Signup",
        emoji_css: "fa-regular fa-star",

    },

    PROFILE:{
        path: "profile",
        routerLink: "/profile",
        name: "Profile",
        emoji_css: "fa-regular fa-user",

    },


    profile_edit:{
        path: "profile_edit",
        routerLink: "/profile/edit",
        name:"internal"
    },


}


export const NavBarLinksArray = [MyRoutes.HOME,MyRoutes.ROOMS,MyRoutes.HISTORY,MyRoutes.SIGNUP,MyRoutes.PROFILE]
