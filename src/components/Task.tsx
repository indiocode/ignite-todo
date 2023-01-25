import { Trash } from 'phosphor-react';
import { ITask } from '~/types/Task';
import styles from './Task.module.css';

interface ITaskProps {
	task: ITask;
	onDeleleTask: (task: ITask) => void;
	onToggleCompleteTask: (task: ITask) => void;
}

export function Task({ onDeleleTask, onToggleCompleteTask, task }: ITaskProps) {
	function handleDeleteTask() {
		onDeleleTask(task);
	}

	function handleToggleCompleteTask() {
		onToggleCompleteTask(task);
	}

	const classNameTitle: string = task.isCompleted
		? styles.taskTitleIsCompleted
		: styles.taskTitle;

	return (
		<div className={styles.container}>
			<div>
				<label className={styles.checkItem}>
					<input
						type="checkbox"
						onChange={handleToggleCompleteTask}
						checked={task.isCompleted}
					/>
					<span className={styles.checkmark}></span>
				</label>
				<p className={classNameTitle}>{task.title}</p>
			</div>
			<button onClick={handleDeleteTask}>
				<Trash size={18} />
			</button>
		</div>
	);
}
