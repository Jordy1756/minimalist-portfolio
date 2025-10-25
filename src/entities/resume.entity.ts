import type { Basics } from "@entities/basics.entity";
import type { Certificate } from "@entities/certificate.entity";
import type { Education } from "@entities/education.entity";
import type { Project } from "@entities/project.entity";
import type { Experience } from "@entities/experience.entity";

export interface Resume {
	basics: Basics;
	experience: Experience[];
	education: Education[];
	certificates: Certificate[];
	skills: string[];
	projects: Project[];
}
