import React from "react";

export type JobType = {
    position: string;
    jobType: string;
    companyName: string;
    pay: string | number;
    location: string;
    postedAt: string | number;
};

function JobCard(props: JobType) {
    return (
        <>
            <div className="card w-96 bg-base-100 shadow-sm">
                <div className="card-body">
                    <div className="flex justify-between">
                        <h2 className="text-3xl font-bold">{props.position}</h2>
                        <span className="badge badge-s badge-warning">
                            {props.jobType}
                        </span>
                    </div>
                    <span className="text-xl">{props.companyName}</span>
                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                        <li>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-4 me-2 inline-block text-success"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                            <span>{props.pay}</span>
                        </li>
                        <li>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-4 me-2 inline-block text-success"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                            <span>{props.location}</span>
                        </li>
                        <li>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-4 me-2 inline-block text-success"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                            <span>{props.postedAt}</span>
                        </li>
                    </ul>
                    <div className="mt-6">
                        <button className="btn btn-primary btn-block">
                            Apply Now
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default JobCard;
