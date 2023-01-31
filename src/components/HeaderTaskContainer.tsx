import { useContext } from 'react';
import { TasksContext } from '~/contexts/TasksContenxt';
import styles from './HeaderTaskContainer.module.css';

export function HeaderTaskContainer() {
	const { tasks } = useContext(TasksContext);
	const taskIsCompletedCount = tasks.reduce(
		(prev, curr) => (curr?.isCompleted ? prev + 1 : prev),
		0,
	);

	const createdTaskCount: number = tasks.length > 0 ? tasks.length : 0;
	const completedFromCreatedTasks: string | number =
		tasks.length > 0 ? `${taskIsCompletedCount} de ${tasks.length}` : 0;

	return (
		<div className={styles.container}>
			<div>
				Tarefas criadas <span>{createdTaskCount}</span>
			</div>
			<div>
				Concluídas <span>{completedFromCreatedTasks}</span>
			</div>
		</div>
	);
}
