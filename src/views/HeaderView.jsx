import { Link, NavLink } from "react-router-dom";

const HeaderView = () => {
  return (
    <div className="d-flex align-items-center justify-content-between p-3">
      <Link to={"/home"} className="d-flex align-items-center gap-3">
        <img height={40} src="/c-logo.png" alt="" />
        <h3 className="text-light">Coinmania</h3>
      </Link>
      <nav className="d-flex align-items-center gap-3">
        <NavLink className={" text-light text-decoration-none"} to={"/"}>
          Giriş Yap
        </NavLink>
        <NavLink className={"text-light text-decoration-none"} to={"/home"}>
          Anasayfa
        </NavLink>
      </nav>
    </div>
  );
};

export default HeaderView;
