import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utility/localStorage";


const JobDetail = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    console.log(job)

    const handleApplyJob = ()=>{
        saveJobApplication(idInt);
        toast.success(' You applied successfully', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            
            });
    }

    const {job_description,job_responsibility,educational_requirements,experiences,salary,job_title,contact_information} = job;
    return (
        <div>
            <div >
                <div className="w-full bg-no-repeat bg-cover  "
                 style={{backgroundImage : `url(${'/public/assets/images/bg2.png'})`}}>
                    <h2 className="text-4xl h-52 font-bold py-20 text-center items-center">Job detail</h2>
                </div>
                <div className="grid grid-cols-4 gap-4">

                    <div className="grid col-span-3 border px-5">
                        <p className="py-3"><span className="font-bold">job Description</span> : {job_description}</p>
                        <p className="py-3"><span className="font-bold">Job Responsibility</span> : {job_responsibility}</p>
                        <p className="py-3"><span className="font-bold">Educational Requirment : </span>{educational_requirements}</p>
                        <p className="py-3"><span className="font-bold">Experience</span>{experiences}</p>
                    </div>
                    <div className="border px-4 bg-slate-50 py-3">
                        <h2 className="text-xl font-bold">Job Detail</h2>
                        <p className="py-3"><span className="font-bold">salary : </span> {salary}</p>
                        <p className="py-3"><span className="font-bold">Job Title : </span> {job_title}</p>
                        <h2>Contact Information</h2>
                        <p><span className="font-bold">Phone : </span> {contact_information.phone}</p>
                        <p><span className="font-bold">Email : </span> {contact_information.email}</p>
                        <p><span className="font-bold">Adress : </span> {contact_information.address}</p>
                        <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply now</button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetail;