import { Trash } from 'phosphor-react';
import styles from './Task.module.css';

export function Task() {
	return (
		<div className={styles.task}>
			<div>
				<input type="checkbox" name="" id="" />
				<p>
					Integer urna interdum massa libero auctor neque turpis turpis semper.
					Duis vel sed fames integer.
				</p>
			</div>
			<button>
				<Trash size={14} />
			</button>
		</div>
	);
}
