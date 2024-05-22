import { useEffect, useState } from "react";
import Job from "../Job/Job";
import { data } from "autoprefixer";

const FeaturedJobs = () => {
    const [jobs,setJobs] = useState([]);

    // this is not the right way to show data length 
    const [dataLength, setDataLength] = useState(4);
    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    return (
        <div>
            <div className="text-center">
                <h2 className="text-5xl font-bold">Featured Jobs : {jobs.length}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ducimus, magnam unde tenetur minus fugit.</p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-5">
                {
                    jobs.slice(0,dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className="text-center mt-4"> 
            <div className={ dataLength === jobs.length && 'hidden'}>
                <button
                onClick={()=> setDataLength(jobs.length)}
                 className="btn btn-primary"> see all jobs</button>
            </div>
            </div>
        </div>
    );
};

export default FeaturedJobs;