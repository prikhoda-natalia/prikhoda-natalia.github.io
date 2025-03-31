export type ExperienceType = {
  details: {
      companyName: string;
      geo: string;
      period: string;
  };
  title: string;
  responsibilities: string[];
  tools: ToolsType;
}

export type ExperiencesType = Array<ExperienceType>;
