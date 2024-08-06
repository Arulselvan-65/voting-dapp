import Image from "next/image";
import createVote from "../../assets/create-vote.png";
import vote from "../../assets/vote.png";

const Dashboard = () => {
    return (
        <div>
            <div className="flex justify-center items-center mt-10">
                <div className="w-full max-w-4xl flex flex-col items-center justify-center">

                    <div className="flex flex-col-reverse md:flex-row  w-full">
                        <div className="w-full h-80  md:w-1/2 flex items-center justify-center">
                            <h1 className="text-lg font-semibold">ji</h1>
                        </div>
                        <div className="w-full h-96 md:h-80  md:w-1/2 flex items-center justify-center">
                            <Image src={vote} alt="Vote pic" className="h-48 w-48"/>
                        </div>
                    </div>


                    <div className="flex flex-col-reverse md:flex-row  w-full">
                        <div className="w-full h-80  md:w-1/2 flex items-center justify-center">
                            <h1 className="text-lg font-semibold">ji</h1>
                        </div>
                        <div className="w-full h-96 md:h-80  md:w-1/2 flex items-center justify-center">
                            <Image src={createVote} alt="Vote pic" className="h-48 w-[13rem]"/>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    )
}


export default Dashboard;