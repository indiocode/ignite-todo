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

	return (
		<div className={styles.task}>
			<div>
				<label className={styles.checkItem}>
					<input
						type="checkbox"
						onChange={handleToggleCompleteTask}
						checked={task.isCompleted}
					/>
					<span className={styles.checkmark}></span>
				</label>
				<p>{task.title}</p>
			</div>
			<button onClick={handleDeleteTask}>
				<Trash size={18} />
			</button>
		</div>
	);
}
