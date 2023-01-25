import styles from './Header.module.css';

import RocketLogo from '~/assets/rocket-logo.svg';

export function Header() {
	return (
		<header className={styles.container}>
			<img src={RocketLogo} alt="Logotipo do Todo" />
			<h1>
				<span>to</span>
				<span>do</span>
			</h1>
		</header>
	);
}
