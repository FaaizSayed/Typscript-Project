// Project type
export enum ProjectStatus {
  Active,
  Finshed,
}

export class ProjectType {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public people: number,
    public status: ProjectStatus
  ) {}
}
