import './global.css';
import styles from './App.module.css';

import { Container } from './components/Container';
import { Header } from './components/Header';
import { HeaderTaskContainer } from './components/HeaderTaskContainer';
import { TasksContextProvider } from './contexts/TasksContenxt';
import { Form } from './components/Form';
import { TaskList } from './components/TaskList';

export function App() {
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
