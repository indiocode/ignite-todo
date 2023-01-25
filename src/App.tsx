import { Fragment } from 'react';
import { PlusCircle } from 'phosphor-react';
import { Container } from './components/Container';
import { Header } from './components/Header';
import './global.css';
import styles from './App.module.css';
import { Task } from './components/Task';
import { ITask } from './types/Task';
import { v4 as uuidv4 } from 'uuid';

const taskList: ITask[] = [
	{
		id: uuidv4(),
		title: 'Do the dishes',
		isCompleted: false,
	},
	{
		id: uuidv4(),
		title: 'Do the drinks',
		isCompleted: true,
	},
	{
		id: uuidv4(),
		title: 'Do the food',
		isCompleted: false,
	},
];

export function App() {
	return (
		<Fragment>
			<Header />

			<Container>
				<form className={styles.form}>
					<input type="text" placeholder="Adicione uma nova tarefa" />
					<button type="submit">
						Criar <PlusCircle size={18} />
					</button>
				</form>

				<main className={styles.taskListContainer}>
					<div className={styles.taskListContainerHeader}>
						<div>
							Tarefas criadas <span>0</span>
						</div>
						<div>
							Concluídas <span>0</span>
						</div>
					</div>
					<div className={styles.taskList}>
						{taskList.map((task) => (
							<Task
								key={task.id}
								title={task.title}
								isCompleted={task.isCompleted}
							/>
						))}
					</div>
				</main>
			</Container>
		</Fragment>
	);
}
