import { Trash } from 'phosphor-react';
import { ITask } from '~/types/Task';
import styles from './Task.module.css';

export function Task({ title, isCompleted }: ITask) {
	return (
		<div className={styles.task}>
			<div>
				<label className={styles.checkItem}>
					<input type="checkbox" checked={isCompleted} />
					<span className={styles.checkmark}></span>
				</label>
				<p>{title}</p>
			</div>
			<button>
				<Trash size={18} />
			</button>
		</div>
	);
}
