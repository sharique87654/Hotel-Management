export default function Cards({ image, roomName, description, roomType }) {
    return (
        <div>
            <div className="grid ml-16 mt-28">
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700 w-72 min-h-[450px] flex flex-col  ">
                    <img
                        className="rounded-t-lg h-48 object-cover"
                        src={image || "https://plus.unsplash.com/premium_photo-1661964402307-02267d1423f5?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                        alt=""
                    />
                    <div className="p-5 flex-grow">
                        <p className="text-amber-500">{roomType}</p>
                        <br />
                        <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-yellow-100">
                            {roomName}
                        </h5>
                        <p className="mb-3 font-normal dark:text-gray-300 line-clamp-2">
                            {description}
                        </p>
                    </div>
                    <div className="p-5">
                        <a
                            href="#"
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800">
                            More Detail
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
