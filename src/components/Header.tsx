import type { ReactElement } from 'react';

import RocketLogo from '~/assets/rocket-logo.svg';

import styles from './Header.module.css';

export function Header(): ReactElement {
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
