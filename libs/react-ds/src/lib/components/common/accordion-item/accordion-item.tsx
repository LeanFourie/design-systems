import styles from './accordion-item.module.scss';

/* eslint-disable-next-line */
export interface AccordionItemProps {}

export function AccordionItem(props: AccordionItemProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to AccordionItem!</h1>
    </div>
  );
}

export default AccordionItem;
