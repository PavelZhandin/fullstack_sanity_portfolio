export interface IAbout {
  title: string;
  description: string;
  imgUrl: string;
}

export interface IWork {
  title: string;
  description: string;
  projectLink: string;
  codeLink: string;
  imgUrl: string;
  tags: string[];
}

export interface ISkill {
  name: string;
  bgColor: string;
  icon: string;
}

export interface IExperience {
  year: string;
  works: IWorkExperience[];
}

export interface IWorkExperience {
  name: string;
  company: string;
  desc: string;
}
