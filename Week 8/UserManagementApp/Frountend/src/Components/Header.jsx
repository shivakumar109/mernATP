import { NavLink } from "react-router";

function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img className="rounded-full w-12 h-12 object-cover shadow-sm" src="https://cdn.pixabay.com/photo/2016/04/15/18/05/computer-1331579_1280.png" alt="Logo" />
          <span className="text-2xl font-bold text-blue-800 tracking-tight">UserAdmin</span>
        </div>
        <ul className="flex gap-2 text-lg font-medium">
          <li>
            <NavLink to="/" className={({ isActive }) => `px-4 py-2 rounded-lg transition-colors ${isActive ? "bg-blue-100 text-blue-800 font-semibold" : "text-gray-600 hover:bg-gray-100"}`}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/add-user" className={({ isActive }) => `px-4 py-2 rounded-lg transition-colors ${isActive ? "bg-blue-100 text-blue-800 font-semibold" : "text-gray-600 hover:bg-gray-100"}`}>
              Add User
            </NavLink>
          </li>
          <li>
            <NavLink to="/users-list" className={({ isActive }) => `px-4 py-2 rounded-lg transition-colors ${isActive ? "bg-blue-100 text-blue-800 font-semibold" : "text-gray-600 hover:bg-gray-100"}`}>
              Users List
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;