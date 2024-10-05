import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const location = useLocation();

  const navItems = [
    {
      path: '/dashboard',
      label: 'Dashboard',
      requireAuth: true,
      notShowInUrls: ['/dashboard'],
      className: 'className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"',
      style: { padding: '5px 10px' }
    },
    {
      path: '/profile',
      label: 'Profile',
      requireAuth: true,
      isProfilePic: true,
      showInUrls: ['/', '/dashboard', '/profile'],
      notShowInUrls: ['/profile'],
      className: 'border-2 border-gray-300 rounded-full',
    },
    {
      path: '/sign-in',
      label: 'Sign In',
      requireAuth: false,
      showInUrls: ['/', '/sign-up'],
      className: 'className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"',
      style: { padding: '5px 10px' }
    },
  ];

  return (
    <div className="bg-slate-100 shadow-lg">
      <div className="flex justify-between items-center mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold">Auth App</h1>
        </Link>
        <ul className="flex gap-4 justify-between items-center">
          {navItems.map((item, index) => {
            const shouldShow =
              ((item.requireAuth && currentUser) || (!item.requireAuth && !currentUser)) &&
              (!item.showInUrls || item.showInUrls.includes(location.pathname)) &&
              (!item.notShowInUrls || !item.notShowInUrls.includes(location.pathname));

            if (shouldShow) {
              return (
                <Link
                  key={index}
                  to={item.path}
                  className={item.className}
                  style={item.style}
                >
                  {item.isProfilePic ? (
                    <img
                      src={currentUser.profilePicture}
                      alt="profile"
                      className="h-7 w-7 rounded-full object-cover"
                    />
                  ) : (
                    <li>{item.label}</li>
                  )}
                </Link>
              );
            }
            return null;
          })}
        </ul>
      </div>
    </div>
  );
}
