import Clipboard from '~/assets/clipboard.svg';
import styles from './NoContent.module.css';

export function NoContent() {
	return (
		<div className={styles.container}>
			<img src={Clipboard} />
			<div>
				<p>Você ainda não tem tarefas cadastradas</p>
				<span>Crie tarefas e organize seus itens a fazer</span>
			</div>
		</div>
	);
}
