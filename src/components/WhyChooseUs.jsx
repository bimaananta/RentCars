export default function WhyChooseUs(){
    return (
        <div className="container mt-5 pt-5 w-full h-fit flex flex-col items-center px-5">
            <h1 className="font-bold text-2xl md:text-3xl mb-1">Why Choose Us</h1>
            <p className="text-center text-sm md:text-base text-slate-600">The reason why you need to choose us</p>
            <div className="main p-10 grid grid-cols-1 md:grid-cols-2">
                <div className="reason flex flex-row gap-4 p-5">
                    <div className="rounded-md flex-1 flex items-center justify-center min-w-[40px] h-[40px] text-white bg-yellow-500">
                        <i className="bi bi-car-front-fill text-lg"></i>
                    </div>
                    <div className="text">
                        <h1 className="text-lg font-medium">1. Wide Selection of Cars</h1>
                        <p className="text-sm text-slate-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aliquid nesciunt veritatis magni pariatur delectus sapiente sunt nam molestias repellat!</p>
                    </div>
                </div>
                <div className="reason flex flex-row gap-4 p-5">
                    <div className="rounded-md flex-1 flex items-center justify-center min-w-[40px] h-[40px] text-white bg-yellow-500">
                        <i className="bi bi-currency-dollar text-lg"></i>
                    </div>
                    <div className="text">
                        <h1 className="text-lg font-medium">2. Competitive Prices</h1>
                        <p className="text-sm text-slate-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aliquid nesciunt veritatis magni pariatur delectus sapiente sunt nam molestias repellat!</p>
                    </div>
                </div>
                <div className="reason flex flex-row gap-4 p-5">
                    <div className="rounded-md flex-1 flex items-center justify-center min-w-[40px] h-[40px] text-white bg-yellow-500">
                        <i className="bi bi-clipboard2-check-fill text-lg"></i>
                    </div>
                    <div className="text">
                        <h1 className="text-lg font-medium">3. Easy booking Process</h1>
                        <p className="text-sm text-slate-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aliquid nesciunt veritatis magni pariatur delectus sapiente sunt nam molestias repellat!</p>
                    </div>
                </div>
                <div className="reason flex flex-row gap-4 p-5">
                    <div className="rounded-md flex-1 flex items-center justify-center min-w-[40px] h-[40px] text-white bg-yellow-500">
                        <i className="bi bi-shield-lock text-lg"></i>
                    </div>
                    <div className="text">
                        <h1 className="text-lg font-medium">4. Trust and Reliability</h1>
                        <p className="text-sm text-slate-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aliquid nesciunt veritatis magni pariatur delectus sapiente sunt nam molestias repellat!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}