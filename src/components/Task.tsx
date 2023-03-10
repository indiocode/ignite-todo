import { Trash } from 'phosphor-react';
import type { ReactElement } from 'react';
import { useContext } from 'react';

import { TasksContext } from '~/contexts/TasksContenxt';
import type { ITask } from '~/models/Task';

import styles from './Task.module.css';

interface ITaskProps {
	task: ITask;
}

export function Task({ task }: ITaskProps): ReactElement {
	const { removeTask, toggleCompleteTask } = useContext(TasksContext);
	function handleDeleteTask(): void {
		removeTask(task);
	}

	function handleToggleCompleteTask(): void {
		toggleCompleteTask(task);
	}

	const classNameTitle: string = task?.isCompleted
		? styles.taskTitleIsCompleted
		: styles.taskTitle;

	return (
		<div className={styles.container}>
			<div>
				<label className={styles.checkItem}>
					<input
						type="checkbox"
						onChange={handleToggleCompleteTask}
						checked={task?.isCompleted}
					/>
					<span className={styles.checkmark}></span>
				</label>
				<p className={classNameTitle}>{task?.title}</p>
			</div>
			<button onClick={handleDeleteTask}>
				<Trash size={18} />
			</button>
		</div>
	);
}
