const report = {
	casese: [
		{
			label: 'Confirmed',
			value: 1220,
			delta: 22,
		},
		{
			label: 'Active',
			value: 1100,
			delta: 78,
		},
		{
			label: 'Recovered',
			value: 4,
			delta: 1,
		},
		{
			label: 'Deceased',
			value: 100,
			delta: 20,
		},
		{
			label: 'Vaccine doses administered',
			value: 100,
			delta: 20,
		},
	],
};

const labelColor = [
	'text-red-600',
	'text-blue-600',
	'text-green-700',
	'text-gray-500',
	'text-pink-500'
];

const bgColor = [
	'transition duration-500 ease-in-out transform hover:-translate-y-0.5 hover:scale-105 h-15 w-15 items-center p-2 flex bg-gray-800 bg-opacity-50 hover:bg-red-700 hover:bg-opacity-30 rounded',
	'transition duration-500 ease-in-out transform hover:-translate-y-0.5 hover:scale-105 h-15 w-15 items-center p-2 flex bg-gray-800 bg-opacity-50 hover:bg-blue-700 hover:bg-opacity-30 rounded',
	'transition duration-500 ease-in-out transform hover:-translate-y-0.5 hover:scale-105 h-15 w-15 items-center p-2 flex bg-gray-800 bg-opacity-50 hover:bg-green-800 hover:bg-opacity-30 rounded',
	'transition duration-500 ease-in-out transform hover:-translate-y-0.5 hover:scale-105 h-15 w-15 items-center p-2 flex bg-gray-800 bg-opacity-50 hover:bg-gray-600 hover:bg-opacity-30 rounded ',
	'flex col-span-2 transition duration-500 ease-in-out transform hover:-translate-y-0.5 hover:scale-105 h-15 w-15 items-center p-2  bg-gray-800 bg-opacity-50 hover:bg-pink-600 hover:bg-opacity-30 rounded',
];

export { labelColor, report, bgColor };
