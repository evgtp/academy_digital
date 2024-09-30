import style from "./Header.module.scss";

export default function Header() {
  return (
    <div className={style.header}>
      <h1 className={style.header__title}>UserManagement</h1>
    </div>
  );
}
