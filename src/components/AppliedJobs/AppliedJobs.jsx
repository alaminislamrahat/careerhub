import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/localStorage";
import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs,setDisplayJobs] = useState([]);

    const handleJobFilter = filter =>{
        if(filter === 'all'){
            setDisplayJobs(appliedJobs);
        }
        else if(filter === 'remote'){
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs);
        }
        else if ( filter === 'onsite'){
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onsiteJobs);
        }
    }

    useEffect(() => {
        const storedJobId = getStoredJobApplication();
        if (jobs.length > 0) {
            const jobsApplied = [];
            for (const id of storedJobId) {
                const job = jobs.find(job => job.id === id);
                if (job) {
                    jobsApplied.push(job)
                }
            }
            // console.log(jobs,storedJobId,jobsApplied)
            setAppliedJobs(jobsApplied);
            setDisplayJobs(jobsApplied);

        }
    }, [jobs])
    return (
        <div>
            <div
                className="w-full bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(${'/public/assets/images/bg2.png'})` }}>
                <h2 className="text-4xl font-bold text-center py-20  items-center">Applied Jobs</h2>
            </div>
            <div className="flex justify-end my-4">
                <details className="dropdown">
                    <summary className="m-1 btn">open or close</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={()=>handleJobFilter('all')}><a>all</a></li>
                        <li onClick={()=>handleJobFilter('onsite')}><a>Onsite</a></li>
                        <li onClick={()=>handleJobFilter('remote')}><a>remote</a></li>
                    </ul>
                </details>
            </div>
            <div className="grid grid-cols-1 gap-10 my-16">
                {
                    displayJobs.map(appliedJob => <AppliedJob key={appliedJob.id} appliedJob={appliedJob}></AppliedJob>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;