import styles from './react-ds.module.scss';

/* eslint-disable-next-line */
export interface ReactDsProps {}

export function ReactDs(props: ReactDsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReactDs!</h1>
    </div>
  );
}

export default ReactDs;
