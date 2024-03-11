import styles from './accordion.module.scss';

/* eslint-disable-next-line */
export interface AccordionProps {}

export function Accordion(props: AccordionProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Accordion!</h1>
    </div>
  );
}

export default Accordion;
