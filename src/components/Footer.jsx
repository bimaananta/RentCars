export default function Footer(){
    return (
        <footer id="footer" className="pt-11">
            <div className="main w-full h-fit bg-slate-900 text-white p-10 grid grid-cols-4">
                <div className="col flex flex-col">
                    <h1 className="font-medium">Follow Us</h1>
                    <div className="w-[80px] h-[2px] bg-yellow-500 mb-3"></div>
                    <ul className="flex flex-row gap-3 list-none">
                        <ul className="w-[30px] h-[30px] rounded-full p-2 bg-white flex justify-center items-center"><i className="bi text-slate-900 bi-instagram"></i></ul>
                        <ul className="w-[30px] h-[30px] rounded-full p-2 bg-white flex justify-center items-center"><i className="bi text-slate-900 bi-facebook"></i></ul>
                        <ul className="w-[30px] h-[30px] rounded-full p-2 bg-white flex justify-center items-center"><i className="bi text-slate-900 bi-twitter-x"></i></ul>
                        <ul className="w-[30px] h-[30px] rounded-full p-2 bg-white flex justify-center items-center"><i className="bi text-slate-900 bi-youtube"></i></ul>
                    </ul>
                </div>
                <div className="col flex flex-col">
                    <h1 className="font-medium">Services</h1>
                    <div className="w-[80px] h-[2px] bg-yellow-500 mb-3"></div>
                    <ul className="flex flex-col text-white list-inside" itemType="circle">
                        <li className="text-sm">Rental</li>
                        <li className="text-sm">Cars</li>
                        <li className="text-sm">List</li>
                    </ul>
                </div>
                <div className="col flex flex-col">
                    <h1 className="font-medium">News</h1>
                    <div className="w-[80px] h-[2px] bg-yellow-500 mb-3"></div>
                    <ul className="flex flex-col text-white list-inside" itemType="circle">
                        <li className="text-sm">News</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}