

const Banner = () => {
    return (
        <div
         className="my-6 bg-no-repeat bg-cover"
         style={{backgroundImage : `url(${'/public/assets/images/bg1.png'})`}}
         
         >
            <div className="md:grid grid-cols-2 items-center">
                <div className="">
                    <h2 className="md:text-6xl font-bold my-1">One Step <br /> Closer To Your <br /> <span className="text-purple-500">Dream Job</span></h2>
                    <p className="my-4">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className="btn btn-primary"> Get Started</button>
                </div>
                <div className="">
                    <img className="w-full" src="/public/assets/images/user.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;