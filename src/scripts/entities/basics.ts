import type { Profile } from "@scripts/entities/profile";
import type { Location } from "@scripts/entities/location";

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
