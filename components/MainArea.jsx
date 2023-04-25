import Image from "next/image"
import { BiArrowBack } from "react-icons/bi"
import { CiLocationOn } from "react-icons/ci"
import { BsLink45Deg, BsCalendar4Week } from "react-icons/bs"
const MainArea = () => {
  return (
    <div id="mainContainer" className=" w-full md:max-w-[600px] xs:border-l border-gray-100 lg:border-r lg:min-w-[600px] h-[1000px]">

      <div id="backName" className="z-20 pt-1 pb-1 bg-white/75 backdrop-blur-md  h-[53px] flex gap-7 left-0 items-center pl-4">
        <BiArrowBack size={26} className="" />
        <div className="flex flex-col">
          <h1 className="font-bold lg:text-lg xl:text-xl">Cliff Sanchez</h1>
          <p className="text-sm opacity-75">2,400 Tweets</p>
        </div>
      </div>

      <div className="relative">
        <Image src="/bg.png" alt="selfie" width={600} height={200} />
        <div className="absolute -bottom-14 left-4 w-24 h-24 sm:w-36 sm:h-36 rounded-full bg-white  z-10">
          <Image
            src="/selfie.jpg"
            className="rounded-full p-1"
            alt="selfie"
            width={300}
            height={300}
          />
        </div>
      </div>
      <div className="ml-auto flex justify-end p-4">
        <button className="h-9 ml-auto px-4 rounded-full bg-gray-50 border text-sm font-semibold">
          Edit profile
        </button>
      </div>
      <div className=" px-6">
        <div className="flex gap-1 items-center">
          <h3 className="text-lg font-bold">Cliff Sanchez</h3>
          <Image src="/verified.png" alt="verified" width={17} height={17} />
        </div>
        <p className="-mt-1">@techbycliff</p>
      </div>
      <div className="px-6 mt-4">
        Full-stack web dev | Cyclist | Cat daddy 🐱 | Night owl 🦉 | Vaper 🌿 |
        Less build something awesome together! 💻🚴‍♀️🌃🐾🔥
      </div>
      <div>
        <div className="flex gap-3 items-center px-6 mt-4">
          <CiLocationOn size={22} />
          <p className="-ml-1.5">Los Angeles, CA</p>
          <BsLink45Deg size={22} />
          <a
            href="https://next-portfolio-2023-neon.vercel.app/"
            className="text-blue-600"
            target="_blank"
          >
            <span className="-ml-1.5">next-portfolio-2023-neon.vercel.app</span>
          </a>
        </div>
      </div>
      <div className="px-6 mt-2 flex items-center gap-2">
        <BsCalendar4Week size={20} />
        Joined March 2019
      </div>
      <div className="flex gap-1.5 items-center px-6 mt-4">
        <span className="font-semibold">1</span> <p>Following</p>
        <span className="font-semibold ml-3">290k</span> <p>Followers</p>
      </div>
    </div>
  )
}

export default MainArea
