const NavBar = (props) => {
  return (
    <div>
      <nav className="w-full justify-between flex-wrap bg-indigo-900 p-4 mx-auto">
        <div className="items-center">{props.children}</div>
      </nav>
    </div>
  );
};

export default NavBar;
