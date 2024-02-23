import scss from "./Header.module.scss";

const Header = () => {
  return (
    <div className={scss.Header}>
      <div className="container">
        <div className={scss.Content}>
          <h2>أفضل أماكن سياحي قريب من العاصمة</h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
