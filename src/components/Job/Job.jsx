
import { FaMapMarkerAlt } from "react-icons/fa";
import { LuCircleDollarSign } from "react-icons/lu";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
    const { id,logo,job_title, company_name, remote_or_onsite, location,job_type, salary,} = job;
    return (
        <div className="card card-compact  bg-base-100 border py-4 ">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div>
                    <button className="px-5 py-2 font-extralight rounded border border-purple-600 mr-4 text-purple-700">{remote_or_onsite}</button>
                    <button className="px-5 py-2 font-extralight rounded border border-purple-600 mr-4 text-purple-700">{job_type}</button>
                </div>
                <div className="flex gap-3">
                    <h2 className="flex"><FaMapMarkerAlt className="text-2xl mr-2"></FaMapMarkerAlt> {location}</h2>
                    <h2 className="flex"><LuCircleDollarSign className="text-2xl mr-2"></LuCircleDollarSign> {salary}</h2>
                </div>
                <div className="card-actions ">
                    <Link to={`/job/${id}`}>
                    <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Job;