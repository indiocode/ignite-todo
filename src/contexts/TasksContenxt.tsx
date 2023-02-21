/* eslint-disable no-unused-vars */
import type { ReactElement, ReactNode } from 'react';
import { createContext, useEffect, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

import type { ITask } from '~/models/Task';
import {
	addNewTaskAction,
	deleteTaskAction,
	toggleCompleteTaskAction,
} from '~/reducers/tasks/action';
import { tasksReducer } from '~/reducers/tasks/reducer';

interface TasksContextTypes {
	tasks: ITask[];
	addNewTask: (task: ITask) => void;
	removeTask: (task: ITask) => void;
	toggleCompleteTask: (task: ITask) => void;
}

export const TasksContext = createContext({} as TasksContextTypes);

interface TasksProviderProps {
	children: ReactNode;
}

export function TasksContextProvider({
	children,
}: TasksProviderProps): ReactElement {
	const [tasksState, dispatch] = useReducer(
		tasksReducer,
		{
			tasks: [],
		},
		(initialValue) => {
			const storedStateAsJSON = localStorage.getItem(
				'@IGNITE_TODO:TASKS_STATE:1.0.0',
			);

			if (!storedStateAsJSON) return initialValue;

			return JSON.parse(storedStateAsJSON);
		},
	);

	const { tasks } = tasksState;

	function addNewTask(task: ITask): void {
		const newTask: ITask = {
			id: uuidv4(),
			title: task.title,
			isCompleted: false,
		};

		dispatch(addNewTaskAction(newTask));
	}

	function removeTask(task: ITask): void {
		dispatch(deleteTaskAction(task));
	}

	function toggleCompleteTask(task: ITask): void {
		dispatch(toggleCompleteTaskAction(task));
	}

	useEffect(() => {
		const stateJSON = JSON.stringify(tasksState);
		localStorage.setItem('@IGNITE_TODO:TASKS_STATE:1.0.0', stateJSON);
	}, [tasksState]);

	return (
		<TasksContext.Provider
			value={{
				tasks,
				addNewTask,
				removeTask,
				toggleCompleteTask,
			}}>
			{children}
		</TasksContext.Provider>
	);
}
