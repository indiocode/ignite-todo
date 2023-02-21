import { PlusCircle } from 'phosphor-react';
import type { ChangeEvent, FormEvent, ReactElement } from 'react';
import { useContext, useState } from 'react';

import { TasksContext } from '~/contexts/TasksContenxt';
import type { ITask } from '~/models/Task';

import styles from './Form.module.css';

export function Form(): ReactElement {
	const { addNewTask } = useContext(TasksContext);
	const [newTaskText, setNewTaskText] = useState<string>('');

	function handleNewTastText(event: ChangeEvent<HTMLInputElement>): void {
		setNewTaskText(event.target.value);
	}

	function handleCreateNewTast(event: FormEvent): void {
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
