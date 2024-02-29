export default function ReasonCard({reasonData, index}){
    return (
        <div className="reason flex flex-row gap-4 p-5">
            <div className="rounded-md flex-1 flex items-center justify-center min-w-[40px] h-[40px] text-white bg-yellow-500">
                <i className={`bi bi-${reasonData.icon} text-lg`}></i>
            </div>
            <div className="text">
                <h1 className="text-lg font-medium">{`${index} . ${reasonData.title}`}</h1>
                <p className="text-sm text-slate-600">{reasonData.description}</p>
            </div>
        </div>
    );
}