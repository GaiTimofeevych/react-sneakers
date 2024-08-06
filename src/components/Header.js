function Header() {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img width={40} height={40} src="/img/logo.svg" />
        <div>
          <h3 className="text-uppercase">React Sneakers</h3>
          <p className="opacity-5">Shop best sneakers</p>
        </div>
      </div>
      <ul className="d-flex">
        <li className="mr-2 clear ml-5 d-flex align-center">
          <div className="d-flex align-center">
            <img width={18} height={18} src="/img/cart.svg" />
            <span className="ml-0 mr-0">1205 руб.</span>
          </div>
        </li>
        <li className="mr-20 ml-5 d-flex align-center">
          <div className="d-flex align-center">
            <img width={18} height={18} src="/img/favorite.svg" />
            <span className="ml-0 mr-0">Закладки</span>
          </div>
        </li>
        <li className="mr-20 ml-5 d-flex align-center">
          <div className="d-flex align-center">
            <img width={18} height={18} src="/img/user.svg" />
            <span className="ml-0 mr-0">Профиль</span>
          </div>
        </li>
      </ul>
    </header>
  );
}

export default Header;
