import './global.css';
import styles from './App.module.css';

import { ChangeEvent, FormEvent, Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { PlusCircle } from 'phosphor-react';
import { Container } from './components/Container';
import { Header } from './components/Header';
import { Task } from './components/Task';
import { ITask } from './types/Task';
import { tasks } from './data/TaskList';
import { NoContent } from './components/NoContent';
import { HeaderTaskContainer } from './components/HeaderTaskContainer';

export function App() {
	const [taskList, setTaskList] = useState<ITask[]>(tasks);
	const [newTaskText, setNewTaskText] = useState<string>('');

	function handleNewTastText(event: ChangeEvent<HTMLInputElement>) {
		setNewTaskText(event.target.value);
	}

	function handleCreateNewTast(event: FormEvent) {
		event.preventDefault();

		if (newTaskText) {
			const newTask: ITask = {
				id: uuidv4(),
				title: newTaskText,
				isCompleted: false,
			};

			setTaskList((prevTaskList) => [...prevTaskList, newTask]);

			setNewTaskText('');
		}
	}

	function deleteTask(task: ITask) {
		setTaskList((prevTaskList) =>
			prevTaskList.filter((item) => item.id !== task.id),
		);
	}

	function toggleCompleteTask(task: ITask) {
		setTaskList((prevTaskList) =>
			prevTaskList.map((item) =>
				item.id === task.id
					? { ...item, isCompleted: !item.isCompleted }
					: item,
			),
		);
	}

	const isNewTaskTextEmpty = !newTaskText;
	const existTasks = taskList.length > 0;

	return (
		<Fragment>
			<Header />

			<Container>
				<form onSubmit={handleCreateNewTast} className={styles.form}>
					<input
						type="text"
						placeholder="Adicione uma nova tarefa"
						value={newTaskText}
						onChange={handleNewTastText}
					/>
					<button type="submit" disabled={isNewTaskTextEmpty}>
						Criar <PlusCircle size={18} />
					</button>
				</form>

				<main className={styles.taskListContainer}>
					<HeaderTaskContainer taskList={taskList} />

					<div className={styles.taskList}>
						{existTasks ? (
							taskList.map((task) => (
								<Task
									key={task.id}
									task={task}
									onDeleleTask={deleteTask}
									onToggleCompleteTask={toggleCompleteTask}
								/>
							))
						) : (
							<NoContent />
						)}
					</div>
				</main>
			</Container>
		</Fragment>
	);
}
