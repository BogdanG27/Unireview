const reviews = [
	{
		author: 'Kate Chopin',
		review: 'I like it!',
		stars: 5,
	},
	{
		author: 'Kate Bulan',
		review: 'I hate it!',
		stars: 1,
	},
];

export const resolvers = {
	Query: {
		reviews: () => reviews,
	},
};