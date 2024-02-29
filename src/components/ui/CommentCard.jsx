export default function CommentCard({comment}){
    const stars = [...Array(comment.stars)].map((_, index) => (
        <i className="bi bi-star-fill text-yellow-500" key={index}></i>
    ));

    return (
        <div className="card shadow-md rounded-lg bg-white bg-opacity-75 px-5 py-8 flex flex-col items-center">
            <img src="https://i0.wp.com/global.ac.id/wp-content/uploads/2015/04/speaker-3-v2.jpg?fit=768%2C768&ssl=1" className="w-[80px] h-[80px] rounded-full" />
            <h1 className="text-lg font-semibold mt-2 mb-0">{comment.username}</h1>
            <p className="text-sm text-slate-900">{comment.job}</p>
            <div className="flex flex-row gap-1 mb-2">
                {stars}
                {(stars.length !== 5) ? [...Array(5 - stars.length)].map((_, index) => (
                    <i className="bi bi-star-fill text-gray-300" key={index}></i>
                )) : (<></>)}
            </div>
            <p className="text-sm text-slate-600 text-center">{comment.comment}</p>
        </div>
    );
}