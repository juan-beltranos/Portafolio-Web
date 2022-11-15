import { useEffect, useState } from "react";
import { projectApi } from "../api/portafolioApi";

export const useProjects = () => {

  const [ projects, setProjects ] = useState([]);

  const getProjects = async () => {
    const res = await projectApi.get("/proyectos");
    console.log(res);
    setProjects(res.data.data);
  };

  useEffect(() => {
    getProjects();
  }, []);


  return {
    projects,
  };
};
