"use client"

import { User } from "@prisma/client"
import Container from "../Container"
import Logo from "./Logo"
import Search from "./Search"
import UserMenu from "./UserMenu"

interface NavbarProps {
  currentUser? : User | null
}

const Navbar = ({currentUser}: NavbarProps) => {
    return (
        <div className="fixed top-0 w-full z-10 bg-white shadow-xs text-black">
          <div className="py-4 border-b-[1px]">
                <Container>
                   <div className="flex flex-row itmes-center justify-between gap-3 md:gap-0">
                     <Logo/>
                     <Search/>
                     <UserMenu currentUser={currentUser}/>
                   </div>
                </Container>
          </div>
        </div>
    )
}

export default Navbar