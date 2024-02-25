export default function SearchBar(){
    return (
        <div className="container mt-5 w-full h-fit flex justify-center">
            <div className="w-[70%] h-fit p-5 border bg-white rounded-lg shadow-md flex flex-row gap-5">
                <div className="search-part">
                    <p className="text-sm text-slate-600 font-semibold mb-1">Location :</p>
                    <i className="bi bi-geo-alt-fill text-lg text-slate-900"></i>
                    <select name="location" id="location" className="bg-transparent outline-none p-1">
                        <option value="1">Select location</option>
                    </select>
                </div>
                <div className="search-part">
                    <p className="text-sm text-slate-600 font-semibold mb-1">Car Type :</p>
                    <i className="bi bi-car-front text-lg text-slate-900"></i>
                    <select name="carType" id="carType" className="bg-transparent outline-none p-1">
                        <option value="1">Select Car Type</option>
                    </select>
                </div>
                <div className="search-part">
                    <p className="text-sm text-slate-600 font-semibold mb-1">Car Type :</p>
                    <i className="bi bi-car-front text-lg text-slate-900"></i>
                    <select name="carType" id="carType" className="bg-transparent outline-none p-1">
                        <option value="1">Select </option>
                    </select>
                </div>
                <div className="search-part">
                    <p className="text-sm text-slate-600 font-semibold mb-1">Car Type :</p>
                    <i className="bi bi-car-front text-lg text-slate-900"></i>
                    <select name="carType" id="carType" className="bg-transparent outline-none p-1">
                        <option value="1">Select Car Type</option>
                    </select>
                </div>
            </div>
        </div>
    )
}