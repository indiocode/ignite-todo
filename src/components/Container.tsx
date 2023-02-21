import type { ReactElement, ReactNode } from 'react';

import styles from './Container.module.css';

interface IContainerProps {
	children: ReactNode;
}

export function Container({ children }: IContainerProps): ReactElement {
	return <div className={styles.container}>{children}</div>;
}
