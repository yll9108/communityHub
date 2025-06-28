import React from "react";
import JobCard from "./JobCard";
import { jobItems } from "../components/shared/mockData";
import Title, { TitleType } from "../components/shared/Title";

function JobPage() {
    return (
        <div>
            <Title type={TitleType.subTitle}>Latest Job Opportunities</Title>
            <div className="flex flex-wrap justify-center">
                {jobItems.map((job, index) => (
                    <JobCard key={index} {...job} />
                ))}
            </div>
        </div>
    );
}

export default JobPage;
