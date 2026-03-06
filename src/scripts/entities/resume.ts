import type { Basics } from "@scripts/entities/basics";
import type { Certificate } from "@scripts/entities/certificate";
import type { Education } from "@scripts/entities/education";
import type { Project } from "@scripts/entities/project";
import type { Experience } from "@scripts/entities/experience";

export interface Resume {
	basics: Basics;
	experience: Experience[];
	education: Education[];
	certificates: Certificate[];
	skills: string[];
	projects: Project[];
}
