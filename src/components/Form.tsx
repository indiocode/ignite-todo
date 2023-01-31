import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { TasksContext } from '~/contexts/TasksContenxt';
import { ITask } from '~/models/Task';
import { PlusCircle } from 'phosphor-react';
import styles from './Form.module.css';

export function Form() {
	const { addNewTask } = useContext(TasksContext);
	const [newTaskText, setNewTaskText] = useState<string>('');

	function handleNewTastText(event: ChangeEvent<HTMLInputElement>) {
		setNewTaskText(event.target.value);
	}

	function handleCreateNewTast(event: FormEvent) {
		event.preventDefault();

		if (newTaskText) {
			const newTask: ITask = {
				title: newTaskText,
			};

			addNewTask(newTask);

			setNewTaskText('');
		}
	}

	const isNewTaskTextEmpty = !newTaskText;

	return (
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
	);
}
