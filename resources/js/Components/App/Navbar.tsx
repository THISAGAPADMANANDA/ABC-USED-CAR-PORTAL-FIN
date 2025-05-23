import React from 'react';
import { Link, usePage } from '@inertiajs/react';
import { FormEventHandler, useEffect } from 'react';
import { useForm } from '@inertiajs/react';
import { MagnifyingGlassCircleIcon } from '@heroicons/react/24/outline';

function Navbar() {
  const { props } = usePage();
  const auth = props.auth as { user: any | null };
  const keyword = props.keyword as string || '';
  const { user } = auth;

  const searchForm = useForm({
    keyword: keyword
  });
  
  const { url } = usePage();

  const onSubmit: FormEventHandler = (e) => {
    e.preventDefault();

    searchForm.get(url, {
      preserveScroll: true,
      preserveState: true,
    });
   };

  return (
    <>
    <div className="navbar bg-base-100">
  <div className="flex-1">
          <Link href="/" className="btn btn-ghost text-xl">ABCCARS</Link>
  </div>
  <div className="flex-none gap-4">
    <form onSubmit={onSubmit} className="join flex-1">
      <div className="flex-1">
        <input
         value={searchForm.data.keyword}
         onChange={(e) => 
          searchForm.setData('keyword', e.target.value)}
                className="input input-bordered join-item w-full" 
                placeholder="Search" />
      </div>
      <div className="indicator">
        <button className="btn join-item">
          <MagnifyingGlassCircleIcon className={'size-4'}/>
          Search
        </button>
      </div>
    </form>
          {user && (
            <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <Link href={route('profile.edit')} className="justify-between">
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <li><Link href={route('logout')} method={"post"} as="button">Logout</Link></li>
      </ul>
            </div>
          )}
          {!user && (
            <>
    <Link href={route('login')} className={"btn"}>Login</Link>
    <Link href={route('register')} className={"btn btn-primary"}>Register</Link>
            </>
          )}
  </div>
</div>
    <div className={"navbar bg-base-100 border-t min-h-4"}>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 z-20 py-0">
          <li><Link href={route('cars.index')}>Browse Cars</Link></li>
          <li><Link href={route('about')}>About Us</Link></li>
          <li><Link href={route('contact')}>Contact</Link></li>
        </ul>
      </div>
    </div>
  </>
  );
}

export default Navbar;
