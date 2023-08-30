import CollapsibleBar from "./components/CollapsibleBar"
import Login from "./components/LoginButton"
import VideoRender from "./components/VideoRender"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="bg-gray-800 py-4 px-8 text-white flex justify-between items-center">
        {/* Nav bar at the top */}
        <h1 className="bg-purple-600 rounded-lg px-2 py-1 text-xl">VidSpace</h1>
        <input
          type="text"
          className="px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Search..."
        />
        <Login/>
      </div>
      <div className="bg-gray-600">
        <CollapsibleBar />
      </div>
      <div className="flex flex-grow bg-gray-600 py-4">
        <div className="flex flex-grow justify-center items-center mx-4">
          {/* Video Render Area*/}
          <VideoRender />
        </div>
      </div>
    </main>
  )
}
