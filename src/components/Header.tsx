"use client"; 

import React, { useState } from "react";
import { Bell } from "lucide-react";
import { CommandDemo } from "./Command";
import { Button } from "./ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
    const [notifications, setNotifications] = useState([
        {
            text: "This is a notifications",
            date: "22-04-2024",
            read: false
        },
        {
            text: "This is another notification",
            date: "22-04-2024",
            read: false,
        }
    ]);

    return (
        <div className="grid grid-cols-2 gap-4 border-b p-4">
            <CommandDemo />
            <div className="flex items-center justify-end">
                <DropdownMenu>
                    <DropdownMenuTrigger> 
                        <Button variant="outline" size="icon">
                        <div className={`h-3 w-3 rounded-full my-1 ${notifications.find((x: any) => x.read === true) ? ' bg-green-500' : 'bg-neutral-200'}`}></div>

                            <Bell className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        {notifications.map((item: any, key: number) => (
                            <DropdownMenuItem key={key} className='p-1 cursor-pointer hover:bg-neutral-50 transition flex item-start gap-2'>
                                <div className={`h-3 w-3 rounded-full my-1 ${!item.read ? ' bg-green-500' : 'bg-neutral-200'}`}></div>
                                <p>{item.text}</p>
                                <p className="text-xs text-neutral-500">{item.date}</p>
                                <span>{item.read ? 'Read' : 'Unread'}</span>
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
}
