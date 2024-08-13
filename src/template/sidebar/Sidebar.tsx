import React from 'react';
import useTitlePage from '../../hooks/useTitlePage';
import { BookOpenIcon, HeartIcon } from '@heroicons/react/16/solid';
import { NavLink } from 'react-router-dom';

const sidebarRoutes = [
  {
    to: '/',
    icon: () => <BookOpenIcon className="size-6" />,
    label: 'Listado de libros',
  },
  {
    to: '/favorites',
    icon: () => <HeartIcon className="size-6" />,
    label: 'Mis favoritos',
  },
];

const Sidebar: React.FunctionComponent = () => {
  const title = useTitlePage();

  // Hack para cerrar el menu del sidebar
  const closeHack = () => document.getElementById('my-drawer')?.click();

  return (
    <div className="drawer-side z-50">
      <label
        htmlFor="my-drawer"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
        <li className="py-4 px-1">
          <strong>{title}</strong>
        </li>
        {sidebarRoutes.map((Route) => (
          <li className="mt-1">
            <NavLink
              to={Route.to}
              onClick={() => closeHack()}
              className={({ isActive, isPending }) =>
                isPending ? 'pending' : isActive ? 'active' : ''
              }
            >
              <Route.icon /> {Route.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
