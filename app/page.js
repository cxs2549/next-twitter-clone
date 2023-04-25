import Sidebar from "@/components/Sidebar"
import MainArea from "@/components/MainArea"
import RightSide from "@/components/RightSide"

const Home = () => {
  return (
    <main
      id="main-container"
      className="flex overflow-x-hidden justify-center lg:gap-8 lg:px-5 xl:px-4 max-w-[1350px] mx-auto"
    >
      <Sidebar />
      <MainArea />
      <RightSide />
    </main>
  )
}

export default Home

