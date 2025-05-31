const Nav = () => {
  return (
    <nav className="fixed top-2 w-full h-20">
      <div className="flex items-center justify-center bg-gray-100 border-b-2 border-gray-400">
        <ul className="nav nav-underline ">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Tab 1
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-black" href="#">
              Tab 2
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-black" href="#">
              Tab 3
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-black" href="#">
              Tab 4
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
