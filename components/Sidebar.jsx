import Image from "next/image"
import Link from "next/link"
import React from "react"
import { GiBirdHouse } from "react-icons/gi"
import {
    BsEnvelope,
    BsBookmark,
    BsFillPersonFill,
    BsThreeDots,
  } from "react-icons/bs"
  import { AiOutlineBell } from "react-icons/ai"
  import { BiSearch } from "react-icons/bi"


  const items = [
    {
      icon: <GiBirdHouse size={36} />,
      name: "Home",
    },
    {
      icon: <BiSearch size={30} />,
  
      name: "Search",
    },
    {
      icon: <AiOutlineBell size={32} />,
  
      name: "Notifications",
    },
    {
      icon: <BsEnvelope size={30} />,
  
      name: "Messages",
    },
    {
      icon: <BsBookmark size={30} />,
  
      name: "Bookmarks",
    },
    {
      icon: <BsFillPersonFill size={30} />,
  
      name: "Profile",
    },
    {
      icon: <BsThreeDots size={28} />,
  
      name: "More",
    },
  ]
  

const ListItem = ({ icon, name }) => {
    return (
      <li className="cursor-pointer h-[50px] w-[50px] xl:w-fit xl:pr-8 grid place-items-center rounded-full xl:px-4 hover:bg-black/10 xl:flex xl:justify-between">
        <div className="items-center gap-6 lg:flex">
          {icon}
          <p className="hidden xl:block text-lg font-semibold">{name}</p>
        </div>
      </li>
    )
  }

const Sidebar = () => {
  return (
    <div className="sticky top-0  left-0 hidden xs:flex items-center xl:items-start gap-7 flex-col w-[88px] xl:min-w-[230px] pt-2 pb-8">
      <Link href={`/`} className="xl:translate-x-3">
        <Image src="/logo.png" alt="logo" width={44} height={44} />
      </Link>
      <ul className="flex flex-col xl:w-full ">
        {items.map((item) => (
          <ListItem key={item.name} {...item} />
        ))}
      </ul>
      <button className="bg-twitter rounded-full h-[55px] w-[55px] xl:w-full grid place-items-center">
        <Image
          src="/icons/feather.png"
          alt="feather"
          width={24}
          height={24}
          className="invert xl:hidden"
        />
        <p className="hidden xl:block font-bold text-xl text-white">Tweet</p>
      </button>
      <button className="hover:bg-black/10 rounded-full w-14 h-14 grid xl:w-full xl:flex xl:items-center xl:px-4 place-items-center mt-auto">
        <div className="xl:flex items-center xl:gap-2">
          <Image
            src="/selfie.jpg"
            alt="selfie"
            width={36}
            height={36}
            className="rounded-full"
          />
          <div className="hidden xl:block flex-1 text-sm">
            <p className="font-bold">Cliff Sanchez</p>
            <p className="font-bold text-gray-600">@techbycliff</p>
          </div>
        </div>
        <BsThreeDots size={20} className="hidden xl:block ml-auto" />
      </button>
    </div>
  )
}

export default Sidebar
