
import { FC } from "react";
import { SignMessage } from '../../components/SignMessage';
import { SendTransaction } from '../../components/SendTransaction';
import { SendVersionedTransaction } from '../../components/SendVersionedTransaction';
import { FundProject } from '../../components/FundProject';
import { ProjectImage } from '../../components/ProjectImage';
import { useState, useEffect } from 'react';


export const CurrentView: FC = ({ }) => {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)
  useEffect(() => {
    fetch('https://api.rudown.com/api/get-current-projects/')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])
 
  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No active projects</p>

  return (




    <div className="md:hero mx-auto p-4">
      <div className="md:hero-content flex flex-col">
        <h1 className="text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500 mt-10 mb-8">
          Our current projects
        </h1>
        <h3 className="text-center text-3xl font-bold">
          (Not real, only examples in Development stage)
        </h3>
        {/* CONTENT GOES HERE */}
        <div className="text-center">
          {data?.map((project) => (

            <div className="project-item" key={project.id}>
              <ProjectImage imageUrl={project.image} title={project.title} />
              <div className="fund-status">
                <div className="fund-status-bar" style={{width: project.percent+"%"}}></div>
                <h3>{project.funded} SOL / {project.goal} SOL ({project.percent}% Funded)</h3>
              </div>
              <div className="description">
                {project.description}
              </div>
              <FundProject address={project.address} />
            </div>
          ))}
          
        </div>
      </div>
    </div>
  );
};
