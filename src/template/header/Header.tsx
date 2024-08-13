import React from 'react';
import useTitlePage from '../../hooks/useTitlePage';
import { HeartIcon } from '@heroicons/react/16/solid';
import ThemeChanger from '../../components/theme-changer/ThemeChanger';
import { Link } from 'react-router-dom';
import { useMyFavoriteStore } from '../../stores/myFavoritesBooks.store';

const Header: React.FunctionComponent = () => {
  const title = useTitlePage();
  const favorites = useMyFavoriteStore((state) => state.books);

  return (
    <div className="navbar bg-base-100">
      <div className="flex-none">
        <label htmlFor="my-drawer" className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      <div className="flex-1">
        <a className="ml-2 text-xl">{title}</a>
      </div>
      <div className="flex-none">
        <div className="mr-1">
          <ThemeChanger />
        </div>

        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <HeartIcon className="size-6" />
              <span className="badge badge-sm indicator-item">
                {favorites.length}
              </span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
          >
            <div className="card-body">
              <span className="text-lg font-bold">
                {favorites.length} Favoritos
              </span>
              <ul className="divide-y-2 ">
                {favorites.slice(-3).map((fav) => (
                  <li className="py-4 font-semibold truncate overflow-hidden whitespace-nowrap">
                    {fav.title}
                  </li>
                ))}
              </ul>
              <div className="card-actions mt-2">
                <Link
                  to={'/favorites'}
                  className="btn btn-primary btn-block btn-sm"
                >
                  Mostrar listado
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
