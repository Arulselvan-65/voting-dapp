import Image from "next/image";
import createVote from "../../assets/create-vote.png";
import vote from "../../assets/vote.png";

const Dashboard = () => {
    return (
        <div>
            <div className="bg-slate-400 flex justify-center items-center mt-20">
    <div className="bg-slate-100 w-full max-w-lg flex flex-col items-center justify-center"> 

        <div className="bg-slate-950 flex flex-col-reverse md:flex-row md:h-52 w-full mb-4">
            <div className="w-full h-24 md:h-full md:w-1/2 bg-pink-200 flex items-center justify-center">
                <h1>ji</h1>
            </div>
            <div className="w-full h-24 md:h-full md:w-1/2 bg-blue-400 flex items-center justify-center">
                <Image src={vote} alt="Vote pic" className="w-40"/>
            </div>
        </div>

        <div className="bg-green-500 flex flex-col-reverse md:flex-row w-full md:h-52">
        <div className="w-full h-24 md:h-full md:w-1/2 bg-pink-200 flex items-center justify-center">
                <h1>ji</h1>
            </div>
            <div className="w-full h-24 md:h-full md:w-1/2 bg-blue-400 flex items-center justify-center">
                <Image src={createVote} alt="Vote pic" className="w-40"/>
            </div>
        </div>

    </div>
</div>

        </div>
    )
}


export default Dashboard;