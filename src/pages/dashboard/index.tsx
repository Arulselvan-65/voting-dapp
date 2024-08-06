import Image from "next/image";
import createVote from "../../assets/create-vote.png";
import vote from "../../assets/vote.png";
import Button from "../../components/Button";


const Dashboard = () => {
    return (
        <div>

<div className="circle-container">
                <div className="violet-circle"></div>
            </div>

            <div className="flex justify-center items-center md:mt-10">
                <div className="w-full max-w-4xl flex flex-col items-center justify-center">

                    <div className="flex flex-col md:flex-row w-full md:h-60 h-auto mt-16 md:mt-0">
                        <div className="w-full md:w-1/2 flex items-center justify-center ">
                            <Image src={vote} alt="vote now" className="h-auto w-[13rem] object-contain" />
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center p-3">
                            <p className="text-lg text-gray-600 text-center md:text-start md:mt-0 mt-2 mx-2">
                                Cast your vote securely and transparently, ensuring that your opinion counts in shaping the future.
                            </p>
                            <div className="mt-4">
                                <Button text={"Vote Now"} />
                            </div>
                        </div>

                    </div>


                    <div className="flex flex-col md:flex-row w-full md:h-60 h-auto mt-16 md:mt-5">
                        <div className="w-full md:w-1/2 flex items-center justify-center">
                            <Image src={createVote} alt="create vote" className="h-auto w-[13rem] object-contain" />
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center p-4">
                            <p className="text-lg text-gray-600 text-center md:text-start md:mt-0 mt-2 mx-2">
                                Launch your own voting session to collect valuable feedback, opinions, or decisions from the community.
                            </p>
                            <div className="mt-4">
                                <Button text={"Create Vote"} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}


export default Dashboard;