import { ITask } from '~/models/Task';
import styles from './HeaderTaskContainer.module.css';

interface IHeaderTaskContainerProps {
	taskList: ITask[];
}

export function HeaderTaskContainer({ taskList }: IHeaderTaskContainerProps) {
	const taskIsCompletedCount = taskList.reduce(
		(prev, curr) => (curr.isCompleted ? prev + 1 : prev),
		0,
	);

	const createdTaskCount: number = taskList.length > 0 ? taskList.length : 0;
	const completedFromCreatedTasks: string | number =
		taskList.length > 0 ? `${taskIsCompletedCount} de ${taskList.length}` : 0;

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
