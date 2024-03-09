"use client"

import UserItem from "./UserItem"

import {
    Command,
    CommandDialog,
    CommandEmpty,
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
                    text: "profile"
                },
                {
                    link: "/",
                    text: "Inbox"
                },
                {
                    link: "/",
                    text: "Billing"
                },
            ]
        },

        {
            group: "Settings",
            items: [
                {
                    link: "/",
                    text: "General Settings"
                },
                {
                    link: "/",
                    text: "Privacy"
                },
                {
                    link: "/",
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
                                    <CommandItem key={optionKey}>{option.text}</CommandItem>
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
