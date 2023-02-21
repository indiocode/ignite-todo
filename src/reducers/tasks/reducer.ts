import type { ITask } from '~/models/Task';

import { ActionTypes } from './action';

interface TaskState {
	tasks: ITask[];
}

export interface Action {
	type: ActionTypes;
	payload: {
		task: ITask;
	};
}

export function tasksReducer(state: TaskState, action: Action): TaskState {
	switch (action.type) {
		case ActionTypes.ADD_NEW_TASK:
			return {
				tasks: [...state.tasks, action.payload.task],
			};
		case ActionTypes.DELETE_TASK:
			return {
				...state,
				tasks: state.tasks.filter((task) => task.id !== action.payload.task.id),
			};

		case ActionTypes.TOGGLE_COMPLETE_TASK:
			return {
				...state,
				tasks: state.tasks.map((task) =>
					task.id === action.payload.task.id
						? { ...task, isCompleted: !task.isCompleted }
						: task,
				),
			};

		default:
			return state;
	}
}
