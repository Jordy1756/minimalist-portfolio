import type { Profile } from "@entities/profile.entity";
import type { Location } from "@entities/location.entity";

export interface Basics {
	name: string;
	label: string;
	email: string;
	url: string;
	ogImage: string;
	avatar: {
		src: string;
		alt: string;
	};
	summary: string;
	location: Location;
	resume: string;
	profiles: Profile[];
}
