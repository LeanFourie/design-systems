import styles from './alert.module.scss';

/* eslint-disable-next-line */
export interface AlertProps {}

export function Alert(props: AlertProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Alert!</h1>
    </div>
  );
}

export default Alert;
