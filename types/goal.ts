export interface IGoal {
	_id: string;
	user: string;
	name: string;
	value: number;
	wallet: number;
	created_at: string;
	updated_at: string;
}

export interface ICreateGoal {
	name: string;
	value: number;
	wallet: number;
}
