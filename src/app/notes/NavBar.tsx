"use client"

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import logo from "@/app/assets/logo.png"
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import AddNoteDialog from "@/components/AddNoteDialog";


export default function NavBar() {
    const [showAddNoteDialog, setShowAddNoteDialog] = useState(false)
    return (
        <>
            <div className="p-4 shadow">
                <div className="max-w-7xl m-auto flex flex-wrap gap-3
         items-center justify-between">
                    <Link href="/notes" className="flex items-center gap-1">
                        <Image src={logo} alt="Logo" width={40} height={40} />
                        <span className="font-bold">ai-notes</span>
                    </Link>
                    <div className="flex items-center gap-2">
                        <UserButton afterSignOutUrl="/" afterSwitchSessionUrl="/"
                            appearance={{
                                elements: {
                                    avatarBox: {
                                        width: "2.5rem",
                                        height: "2.5rem"
                                    }
                                }
                            }} />
                        <Button onClick={() => setShowAddNoteDialog(true)}>
                            <Plus size={20} className="mr-2" />
                            Add note
                        </Button>
                    </div>
                </div>
            </div>
            <AddNoteDialog open={showAddNoteDialog} setOpen={setShowAddNoteDialog} />
        </>
    )
}