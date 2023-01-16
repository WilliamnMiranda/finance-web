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
	__v: 0;
}

export interface IFinancesCurrentMonth {
	expenses: Finance[];
	deposits: Finance[];
}
