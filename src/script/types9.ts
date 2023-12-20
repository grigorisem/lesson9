export type Tparams = {
    width: number,    
    height: number,
    weight: number
}
export type Tdetail = {
    title: string,
    params: Tparams
}
export type Tproject = {
    name:string,
    details: Tdetail[],
    mainEngineer: string,
    deadline: string
}
export type Tdepartment = {
    tech: Tproject[],
    turbo: Tproject[],
    chemical: Tproject[]
}