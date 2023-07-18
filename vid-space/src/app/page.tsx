import VideoRender from "./components/VideoRender"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Search bar at the top */}
      <div className="bg-gray-800 py-4 px-8 text-white flex justify-between items-center">
        <input
          type="text"
          className="px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Search..."
        />
        {/* Add your search button or other search-related elements here */}
      </div>

      <div className="flex flex-grow">
        {/* Collapsible bar to the left */}
        <div className="bg-gray-200 p-4 w-1/6">
          {/* Add your collapsible content here */}
          {/* Example: <p>Collapsible Content</p> */}
        </div>

        {/* Centered VideoRender */}
        <div className="flex flex-grow justify-center items-center">
          <VideoRender />
        </div>
      </div>
    </main>
  )
}
