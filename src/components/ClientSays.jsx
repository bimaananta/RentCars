export default function ClientSays(){
    return (
        <div className="container mt-5 pt-5 w-full h-fit flex flex-col items-center px-5 mb-1">
            <h1 className="text-2xl md:text-3xl font-bold">What Our Client Says</h1>
            <p className="text-sm md:text-base text-slate-600 text-center">We are already working with much clients around the world</p>
            <div className="main p-10 grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="card shadow-md rounded-lg bg-white bg-opacity-75 px-5 py-8 flex flex-col items-center">
                    <img src="https://i0.wp.com/global.ac.id/wp-content/uploads/2015/04/speaker-3-v2.jpg?fit=768%2C768&ssl=1" className="w-[60px] h-[60px] rounded-full" />
                    <h1 className="text-lg font-semibold mt-2 mb-0">John Doe</h1>
                    <p className="text-sm text-slate-900 mb-3">CEO of MasterCard</p>
                    <div className="w-[80%] h-[2px] bg-gray-300 opacity-75"></div>
                    <h2 className="text-lg font-semibold mt-3 mb-1">Intuitive Design</h2>
                    <p className="text-xs text-slate-600 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse amet velit hic libero veritatis corrupti minus porro excepturi blanditiis expedita.</p>
                </div>
                <div className="card shadow-md rounded-lg bg-white px-5 py-8 flex flex-col items-center">
                    <img src="https://i0.wp.com/global.ac.id/wp-content/uploads/2015/04/speaker-3-v2.jpg?fit=768%2C768&ssl=1" className="w-[60px] h-[60px] rounded-full" />
                    <h1 className="text-lg font-semibold mt-2 mb-0">Jane Doe</h1>
                    <p className="text-sm text-slate-900 mb-3">IT Consultant</p>
                    <div className="w-[80%] h-[2px] bg-gray-300 opacity-75"></div>
                    <h2 className="text-lg font-semibold mt-3 mb-1">Intuitive Design</h2>
                    <p className="text-xs text-slate-600 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse amet velit hic libero veritatis corrupti minus porro excepturi blanditiis expedita.</p>
                </div>
                <div className="card shadow-md rounded-lg bg-white px-5 py-8 flex flex-col items-center">
                    <img src="https://i0.wp.com/global.ac.id/wp-content/uploads/2015/04/speaker-3-v2.jpg?fit=768%2C768&ssl=1" className="w-[60px] h-[60px] rounded-full" />
                    <h1 className="text-lg font-semibold mt-2 mb-0">Jeremy Doe</h1>
                    <p className="text-sm text-slate-900 mb-3">Tech Lead</p>
                    <div className="w-[80%] h-[2px] bg-gray-300 opacity-75"></div>
                    <h2 className="text-lg font-semibold mt-3 mb-1">Intuitive Design</h2>
                    <p className="text-xs text-slate-600 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse amet velit hic libero veritatis corrupti minus porro excepturi blanditiis expedita.</p>
                </div>
            </div>      
        </div>
    );
}