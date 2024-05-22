import { FaMapMarkerAlt } from "react-icons/fa";
import { LuCircleDollarSign } from "react-icons/lu";
const AppliedJob = ({ appliedJob }) => {
    const { logo, job_title, job_type, remote_or_onsite, company_name, location, salary } = appliedJob;
    return (
        <div className="card bg-base-100 border">
            <div className="md:grid md:grid-cols-3 md:gap-20">
                <div className="md:my-20">
                    <figure><img className="" src={logo} alt="Shoes" /></figure>
                </div>
                <div className="md:my-10 ">
                    <h2 className="card-title">{job_title}</h2>
                    <p className="mt-1">{company_name}</p>
                    <div className="mt-1">
                        <button className="px-5 py-2 font-extralight rounded border border-purple-600 mr-4 text-purple-700">{remote_or_onsite}</button>
                        <button className="px-5 py-2 font-extralight rounded border border-purple-600 mr-4 text-purple-700">{job_type}</button>
                    </div>
                    <div className="flex gap-2 mt-4">
                        <h2 className="flex"><FaMapMarkerAlt className="text-2xl mr-2"></FaMapMarkerAlt> {location}</h2>
                        <h2 className="flex"><LuCircleDollarSign className="text-2xl mr-2"></LuCircleDollarSign> {salary}</h2>
                    </div>

                </div>
                <div>
                    <button className="btn btn-primary md:my-20">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default AppliedJob;