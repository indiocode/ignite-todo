import type { ReactElement } from 'react';

import styles from './App.module.css';
import { Container } from './components/Container';
import { Form } from './components/Form';
import { Header } from './components/Header';
import { HeaderTaskContainer } from './components/HeaderTaskContainer';
import { TaskList } from './components/TaskList';
import { TasksContextProvider } from './contexts/TasksContenxt';
import './global.css';

export function App(): ReactElement {
	return (
		<TasksContextProvider>
			<Header />

			<Container>
				<main className={styles.taskListContainer}>
					<Form />
					<HeaderTaskContainer />
					<TaskList />
				</main>
			</Container>
		</TasksContextProvider>
	);
}
