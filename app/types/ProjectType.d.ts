export type ProjectType = {
  name: string;
  description: string;
  tools: ToolsType;
  links: DetailsType;
}

export type ProjectsType = Array<ProjectType>;
