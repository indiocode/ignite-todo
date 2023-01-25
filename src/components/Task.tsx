import { Trash } from 'phosphor-react';
import styles from './Task.module.css';

export function Task() {
	return (
		<div className={styles.task}>
			<div>
				<label className={styles.checkItem}>
					<input type="checkbox" />
					<span className={styles.checkmark}></span>
				</label>
				<p>
					Integer urna interdum massa libero auctor neque turpis turpis semper.
					Duis vel sed fames integer.
				</p>
			</div>
			<button>
				<Trash size={18} />
			</button>
		</div>
	);
}
