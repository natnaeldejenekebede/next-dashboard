"use client"
import { Inbox, Settings, User, DollarSign, LogOut, Lock, Bell, ChevronRightIcon }  from "lucide-react"
import UserItem from "./UserItem"

import {
    Command,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "@/components/ui/command"

export default function Sidebar() {
    const menuList = [
        {
            group: "General",
            items: [
                {
                    link: "/",
                    icon: <User />,
                    text: "Profile"
                },
                {
                    link: "/inbox",
                    icon: <Inbox />,
                    text: "Inbox"
                },
                {
                    link: "/billing",
                    icon: <DollarSign />,
                    text: "Billing"
                },
                {
                    link: "/billing",
                    icon: <Bell />,
                    text: "Notifications"
                }
            ]
        },
        {
            group: "Settings",
            items: [
                {
                    link: "/general-settings",
                    icon: <Settings />,
                    text: "General Settings"
                },
                {
                    link: "/privacy",
                    icon: <Lock />,
                    text: "Privacy"
                },
                {
                    link: "/logs",
                    icon: <LogOut />,
                    text: "Logs"
                },
            ]
        }
    ];
    

    return (
        <div className="flex flex-col gap-4 w-[300px] border-r min-h-screen p-4">
            <div> 
                <UserItem/>   
            </div>
            <div className="grow">
                <Command>
                    <CommandList>
                        {menuList.map((menu: any, key: number) => (
                            <CommandGroup key={key} heading={menu.group}>
                                {menu.items && Array.isArray(menu.items) && menu.items.map((option: any, optionKey: number) => (
                                   <CommandItem key={optionKey} className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 hover:text-gray-800 cursor-pointer">
                                   <span className="text-lg">{option.icon}</span> 
                                   <span className="text-sm font-medium">{option.text}</span> 
                                   {option.badge && <span className="bg-red-500 text-white text-xs px-1 rounded-full">{option.badge}</span>} 
                                   {option.subMenu && <ChevronRightIcon className="w-4 h-4 text-gray-500" />} 
                               </CommandItem>
                               
                                ))}
                            </CommandGroup>
                        ))}
                    </CommandList>
                </Command>
            </div>
            <div>Settings | </div>
        </div>
    );
}
