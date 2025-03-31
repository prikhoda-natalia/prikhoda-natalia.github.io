import {ToolsType} from '~/types/ToolType';

export type SkillType = {
  blurb: string;
  title: string;
  tools: ToolsType;
};

export type SkillsType = Array<SkillType>;
