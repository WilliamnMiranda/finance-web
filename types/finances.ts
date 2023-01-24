export interface Finance {
	installments: {
		amount: number;
		quantity: number;
	};
	_id: string;
	user: string;
	value: number;
	type: string;
	category: string;
	card: string;
	created_at: string;
	updated_at: string;
	__v: number;
}

export interface IFinancesCurrentMonth {
	expenses: number;
	deposits: number;
}
