/* eslint-disable no-unused-vars */
import { ITask } from '~/models/Task';

export enum ActionTypes {
	ADD_NEW_TASK = 'ADD_NEW_TASK',
	DELETE_TASK = 'DELETE_TASK',
	TOGGLE_COMPLETE_TASK = 'TOGGLE_COMPLETE_TASK',
}

export function addNewTaskAction(task: ITask) {
	return {
		type: ActionTypes.ADD_NEW_TASK,
		payload: {
			task,
		},
	};
}

export function deleteTaskAction(task: ITask) {
	return {
		type: ActionTypes.DELETE_TASK,
		payload: {
			task,
		},
	};
}

export function toggleCompleteTaskAction(task: ITask) {
	return {
		type: ActionTypes.TOGGLE_COMPLETE_TASK,
		payload: {
			task,
		},
	};
}
