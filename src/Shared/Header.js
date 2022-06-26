import React from 'react';
import { Link } from 'react-router-dom';
import './Shared.css'

const Header = () => {
    const bloodDoner = <>
        <li><Link to='/'>A+ (A POSITIVE)</Link></li>
        <li><Link to='/'>A- (A NEGATIVE)</Link></li>
        <li><Link to='/'>B+ (B POSITIVE)</Link></li>
        <li><Link to='/'>B- (B NEGATIVE)</Link></li>
        <li><Link to='/'>AB+ (AB POSITIVE)</Link></li>
        <li><Link to='/'>AB- (AB NEGATIVE)</Link></li>
        <li><Link to='/'>O+ (O POSITIVE)</Link></li>
        <li><Link to='/'>O- (O NEGATIVE)</Link></li>
    </>

    return (
        <div class="navbar my-nav bg-[#EC4E2B]">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li tabindex="0">
                            <Link to='/' class="justify-between">
                                Donor List
                                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </Link>
                            <ul class="p-2 blood-doner">
                                {
                                    bloodDoner
                                }

                            </ul>
                        </li>
                        <li><Link to='/'>Search</Link></li>
                        <li><Link to='/'>Blog</Link></li>
                        <li><Link to='/'>Be a Donor</Link></li>
                        <li><Link to='/'>Login</Link></li>
                    </ul>
                </div>
                <Link to='/' class="btn btn-ghost normal-case text-xl">daisyUI</Link>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    <li><Link to='/'>Home</Link></li>
                    <li tabindex="0">
                        <Link to='/'>
                            Donor List
                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </Link>
                        <ul class="p-2 blood-doner">
                            {bloodDoner}
                        </ul>
                    </li>
                    <li><Link to='/'>Search</Link></li>
                    <li><Link to='/'>Blog</Link></li>
                    <li><Link to='/'>Be a Donor</Link></li>
                    <li><Link to='/'>Registration</Link></li>
                    <li><Link to='/'>Login</Link></li>
                </ul>
            </div>
           
        </div>
    );
};

export default Header;