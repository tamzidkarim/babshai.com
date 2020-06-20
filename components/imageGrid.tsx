export default function ImageGrid() {
  return (
    <div className="p-6">
      <div className="flex mb-4">
        <div className="relative w-1/2 bg-gray-400 m-2">
          <img className="h-auto w-full" src="/card.jpg" alt="" />
          <button className="center bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700">
            View
          </button>
        </div>
        <div className="relative w-1/2 bg-gray-400 m-2">
          <img className="h-auto w-full" src="/card.jpg" alt="" />
          <button className="center bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700">
            View
          </button>
        </div>
      </div>
      <div className="flex mb-4">
        <div className="relative w-1/2 bg-gray-400 m-2">
          <img className="h-auto w-full" src="/card.jpg" alt="" />
          <button className="center bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700">
            View
          </button>
        </div>
        <div className="relative w-1/2 bg-gray-400 m-2">
          <img className="h-auto w-full" src="/card.jpg" alt="" />
          <button className="center bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700">
            View
          </button>
        </div>
      </div>
    </div>
  );
}
