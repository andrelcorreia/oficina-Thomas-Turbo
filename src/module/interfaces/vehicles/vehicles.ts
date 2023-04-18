
export interface Vehicle {
	id: string;
	brand: string;
	model: string;
	year_of_manufacture: number;
	plate: string;
	mileage: number;
	color: string;
	comments: string | null;
	document_owner: string;
	owner_name: string;
}

export interface CreateVehicle {
	brand: string;
	model: string;
	year_of_manufacture: number;
	plate: string;
	mileage: number;
	color: string;
	comments: string | null;
	document_owner: string;
	owner_name: string;
}

export interface UpdateVehicle {
	id?: string;
	brand: string;
	model: string;
	year_of_manufacture: number;
	plate: string;
	mileage: number;
	color: string;
	comments: string | null;
	document_owner: string;
	owner_name: string;
}
