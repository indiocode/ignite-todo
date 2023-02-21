import { v4 as uuidv4 } from 'uuid';

import type { ITask } from '~/models/Task';

export const tasks: ITask[] = [
	{
		id: uuidv4(),
		title: 'Do the dishes',
		isCompleted: false,
	},
	{
		id: uuidv4(),
		title: 'Do the drinks',
		isCompleted: true,
	},
	{
		id: uuidv4(),
		title: 'Do the food',
		isCompleted: false,
	},
];
