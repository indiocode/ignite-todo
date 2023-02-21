import type { ReactElement } from 'react';
import { useContext } from 'react';

import { TasksContext } from '~/contexts/TasksContenxt';

import { NoContent } from './NoContent';
import { Task } from './Task';
import styles from './TaskList.module.css';

export function TaskList(): ReactElement {
	const { tasks } = useContext(TasksContext);
	const existTasks = tasks?.length > 0;

	return (
		<div className={styles.taskList}>
			{existTasks ? (
				tasks.map((task) => <Task key={task?.id} task={task} />)
			) : (
				<NoContent />
			)}
		</div>
	);
}
