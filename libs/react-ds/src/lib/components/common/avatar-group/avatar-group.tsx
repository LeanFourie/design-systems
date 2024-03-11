import styles from './avatar-group.module.scss';

/* eslint-disable-next-line */
export interface AvatarGroupProps {}

export function AvatarGroup(props: AvatarGroupProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to AvatarGroup!</h1>
    </div>
  );
}

export default AvatarGroup;
