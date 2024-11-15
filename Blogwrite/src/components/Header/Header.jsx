import React from 'react';
import { Container, LogoutBtn, Logo } from '../index';
// For redirection
import { Link } from 'react-router-dom';
// To see user's state in store
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Header() {
    const authStatus = useSelector((state) => state.auth.status);
    const navigate = useNavigate();

    const navItems = [
        {
            name: 'Home',
            slug: "/",
            active: true
        },
        {
            name: "Login",
            slug: "/login",
            active: !authStatus,
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus,
        },
        {
            name: "All Posts",
            slug: "/all-posts",
            active: authStatus,
        },
        {
            name: "Add Post",
            slug: "/add-post",
            active: authStatus,
        },
    ];

    return (
        <header className="py-4 shadow bg-[#003366]">
            <Container>
                <nav className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="mr-4">
                        <Link to="/">
                            <span className="inline-block w-full max-w-[250px]">
                                <Logo width="200px"/>
                            </span>
                        </Link>
                    </div>

                    {/* Navigation Menu */}
                    <ul className="flex space-x-5">
                        {navItems.map((item) => (
                            item.active ? (
                                <li key={item.name}>
                                    <button
                                        onClick={() => navigate(item.slug)}
                                        className="inline-block px-6 py-2 rounded-full bg-transparent text-[#EEF5DB] duration-200 hover:bg-[#EEF5DB] hover:text-[#003366] text-xl font-semibold"
                                        aria-label={`Go to ${item.name}`}
                                    >
                                        {item.name}
                                    </button>
                                </li>
                            ) : null
                        ))}

                        {/* Logout Button */}
                        {authStatus && (
                            <li>
                                <LogoutBtn />
                            </li>
                        )}
                    </ul>
                </nav>
            </Container>
        </header>
    );
}

export default Header;
