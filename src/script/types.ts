export type Tseason = {
    closeProjects: number,
    income: number,
    hired: number,
    dismissed: number,
    newProjects: number,
}
export type Tseasons = {
    winter: Tseason,
    summer: Tseason,
    autumn: Tseason,
    speing: Tseason
}
export type Thiredt = {
    name: number,
    departament: number,
    experience: number,
    isClosedProjects: number,
    numbersalary: number
}
export enum Department {
    Tech = "TECH",
    Design = "DESIGN",
    Project = "PROJECT"
}
