import { Link } from "react-router-dom";
const NavBar = (props) => {
  return (
    <div>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800">
        <div className="container flex flex-wrap justify-evenly pl-4 mx-auto">
          <Link to = '/'>
          <button className="block text-white mt-4">Home</button>
          </Link>
          {props.children}
          
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
