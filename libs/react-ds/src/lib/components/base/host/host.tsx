import styles from './host.module.scss';

/* eslint-disable-next-line */
export interface HostProps {}

export function Host(props: HostProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Host!</h1>
    </div>
  );
}

export default Host;
