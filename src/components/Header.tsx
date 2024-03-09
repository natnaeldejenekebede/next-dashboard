"use client"; // Mark the parent component as a Client Component

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
            text: "This is a notification",
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
                            <Bell className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        {notifications.map((item: any, key: number) => (
                            <DropdownMenuItem key={key} classNama='p-1 cursor-pointer hover:bg-neutral-50 transition' >
                                <p>{item.text}</p>
                                <p>{item.date}</p>
                                <span> {item.read ? 'Read' : 'Unread'} </span>
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
}
