import { Projects } from "./src/scripts/types";
import { projects } from "./src/scripts/data";
import { TechProject, TurboProject, ChemicalProject } from "./src/scripts/types";
const calculateDetailCost = (params: { width: number; height: number; weight: number }): number => {
    return (params.width * params.height) / params.weight * 150;
  };
  const printDepartmentBudget = (departmentName: string, totalBudget: number): void => {
    console.log(`Название отдела: ${departmentName} - бюджет на отдел: ${totalBudget.toFixed(2)}`);
    console.log("---------------");
  };
const printProjectDetails = (project: TechProject | TurboProject | ChemicalProject): number => {
    console.log(project.name);
    let totalProjectBudget = 0;
    project.details.forEach((detail) => {
      const cost = calculateDetailCost(detail.params);
      totalProjectBudget += cost;
      console.log(`${detail.title} - стоимость: ${cost.toFixed(2)}`);
    });
    console.log(`Общий бюджет на проект: ${totalProjectBudget.toFixed(2)}`);
    console.log("---------------");
    return totalProjectBudget;
};
const calculate = (projects: Projects): void => {
    for (const projectType in projects) {
      if (Object.prototype.hasOwnProperty.call(projects, projectType)) {
        const projectList = projects[projectType];
        let totalDepartmentBudget = 0;
        projectList.forEach((project) => {
          const projectBudget = printProjectDetails(project);
          totalDepartmentBudget += projectBudget;
        });
        printDepartmentBudget(projectType, totalDepartmentBudget);
      }
    }
  };
  calculate(projects);