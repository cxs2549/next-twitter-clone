import Image from "next/image"
import React from "react"
import { BiSearch } from "react-icons/bi"

const Search = () => {
  return (
    <div className=" top-0 pt-1 pb-1 bg-white/50 backdrop-blur-md fixed min-w-[350px] z-30">
      <div className="px-4 sticky top-2 bg-gray-100 rounded-full flex items-center gap-3">
        <BiSearch size={24} className="text-gray-400" />
        <input
          type="search"
          placeholder="Search Twitter"
          className="w-full focus:outline-none h-12 bg-gray-100"
        />
      </div>
    </div>
  )
}

const RightSide = () => {
  return (
    <div className="hidden w-full lg:flex flex-col min-w-[290px] max-w-[350px] sticky top-0 gap-4 overflow-y-scroll no-scroll mt-2 z-30">
      <Search />
      {/* you might like */}
      <div className="border border-gray-100 mt-[60px] flex flex-col gap-4 bg-gray-50 rounded-lg w-full pb-5">
        <h3 className="px-4 py-3 text-xl font-bold text-gray-800">
          You might like
        </h3>
        <div className="flex px-4 justify-between">
          <div className="flex gap-3 mr-auto">
            <Image
              src="/yml/image-1.jpg"
              alt="selfie"
              width={50}
              height={50}
              className="rounded-full"
            />
            <div className="flex text-sm flex-col">
              <div className="flex items-center gap-1">
                <p className="font-semibold">Everyday Astronaut</p>
                <Image
                  src="/verified.png"
                  alt="verified"
                  width={16}
                  height={16}
                />
              </div>
              <p className="text-gray-600">@Erdayastronaut</p>
            </div>
          </div>
          <button className="bg-black text-white h-9 px-6 text-sm font-semibold rounded-full">
            Follow
          </button>
        </div>
        <div className="flex px-4 justify-between">
          <div className="flex gap-3 mr-auto">
            <Image
              src="https://randomuser.me/api/portraits/men/15.jpg"
              alt="selfie"
              width={50}
              height={50}
              className="rounded-full"
            />
            <div className="flex text-sm flex-col">
              <p className="font-semibold">Casual Gamer Guy</p>
              <p className="text-gray-600">@edwin_munch</p>
            </div>
          </div>
          <button className="bg-black text-white h-9 px-6 text-sm font-semibold rounded-full">
            Follow
          </button>
        </div>
        <p className="px-4 pt-3 font-medium text-twitter text-sm">Show more</p>
      </div>
      {/* whassappening */}
      <div className="border border-gray-100 flex flex-col gap-4 bg-gray-50 rounded-lg w-full pb-5">
        <h3 className="px-4 py-3 text-xl font-bold text-gray-800">
          {`What's happening`}
        </h3>

       
        <div className="flex px-4 justify-between">
          <div className="text-sm">
            <p>NHL &bull; 5 hours ago</p>
            <p className="font-semibold">Golden Knights at Jets</p>
          </div>
          <Image
            src="/wh/image-2.jpg"
            alt="feather"
            width={128}
            height={24}
            className="rounded-lg"
          />
        </div>
        <div className="flex px-4 justify-between">
          <div className="text-sm">
            <p>F1 &bull; 5 hours ago</p>
            <p className="font-semibold">Golden Knights at Jets</p>
          </div>
          <Image
            src="/wh/image-3.jpg"
            alt="feather"
            width={128}
            height={24}
            className="rounded-lg"
          />
        </div>
        <div className="flex px-4 justify-between">
          <div className="text-sm">
            <p>FOX &bull; 5 hours ago</p>
            <p className="font-semibold">Golden Knights at Jets</p>
          </div>
          <Image
            src="/wh/image-4.jpg"
            alt="feather"
            width={128}
            height={24}
            className="rounded-lg"
          />
        </div>
        <div className="flex px-4 justify-between">
          <div className="text-sm">
            <p>Univision &bull; 5 hours ago</p>
            <p className="font-semibold">Golden Knights at Jets</p>
          </div>
          <Image
            src="/wh/image-5.jpg"
            alt="feather"
            width={128}
            height={24}
            className="rounded-lg"
          />
        </div>
        <p className="px-4 pt-3 text-twitter text-sm font-medium">Show more</p>
      </div>
      {/* site links */}
      <ul className="flex flex-wrap gap-y-2 gap-x-3 pb-8 text-xs justify-center items-center">
        <li>Terms of Service</li>
        <li>Privacy Policy</li>
        <li>Cookie Policy</li>
        <li>Accessibility</li>
        <li>Ads info</li>
        <li>More</li>
        <li>© 2023 cs.dev for X Corp.</li>
      </ul>
    </div>
  )
}

export default RightSide
