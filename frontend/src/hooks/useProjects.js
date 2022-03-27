import { useEffect, useState } from "react";
import { projectApi } from "../api/portafolioApi";

export const useProjects = () => {

  const [ projects, setProjects ] = useState([]);

  useEffect(() => {
    getProjects();
  }, [projects]);

  const getProjects = async () => {
    const res = await projectApi.get("/proyectos");
    setProjects(res.data.data);
  };

  return {
    projects,
  };
};
