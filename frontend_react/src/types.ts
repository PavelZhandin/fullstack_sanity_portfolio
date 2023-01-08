export interface IAbout {
  _id: string;
  title: string;
  description: string;
  imgUrl: string;
}

export interface IWork {
  _id: string;
  title: string;
  description: string;
  projectLink: string;
  codeLink: string;
  imgUrl: string;
  tags: string[];
}

export interface ISkill {
  _id: string;
  name: string;
  bgColor: string;
  icon: string;
}

export interface IExperience {
  _id: string;
  year: string;
  works: IWorkExperience[];
}

export interface IWorkExperience {
  _id: string;
  name: string;
  company: string;
  desc: string;
}

export interface ITestimonial {
  _id: string;
  name: string;
  company: string;
  imgUrl: string;
  feedback: string;
}

export interface IBrand {
  _id: string;
  imgUrl: string;
  name: string;
}
