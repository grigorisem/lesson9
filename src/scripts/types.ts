type Params = {
  width: number;
  height: number;
  weight: number;
};

type Detail = {
  title: string;
  params: Params;
};

type ProjectBase = {
  name: string;
  details: Detail[];
  mainEngineer: string;
  deadline: string;
};

export type TechProject = ProjectBase;

export type TurboProject = ProjectBase;

export type ChemicalProject = ProjectBase;

export type Projects = {
  tech: TechProject[];
  turbo: TurboProject[];
  chemical: ChemicalProject[];
};