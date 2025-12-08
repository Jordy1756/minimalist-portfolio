import type { Basics } from "@entities/basics";
import type { Certificate } from "@entities/certificate";
import type { Education } from "@entities/education";
import type { Project } from "@entities/project";
import type { Experience } from "@entities/experience";

export interface Resume {
	basics: Basics;
	experience: Experience[];
	education: Education[];
	certificates: Certificate[];
	skills: string[];
	projects: Project[];
}
