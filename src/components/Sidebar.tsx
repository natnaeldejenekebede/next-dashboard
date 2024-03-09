"use client"

import UserItem from "./UserItem"
export default function Sidebar() {

    // const menuList =[
    //     {
    //     group: "Settings",
    //     items: [
    //         {
    //             link: "/",
    //             text: "General Settings"
    //         },
    //         {
    //             link: "/",
    //             text: "Privacy"
    //         },
    //         {
    //             link: "/",
    //             text: "Notifications"
    //         },
    //         {
    //             link: "/",
    //             text: "Logs"
    //         },
    //      ]
    //   }
    // ]
    return (
        <div className="flex flex-col gap-4 w-[300px] border-r min-h-screen p-4">
            <div> 
                <UserItem/>   
            </div>
            <div className="grow ">



            </div>
            <div>Settings | </div>

        </div>
    )
}