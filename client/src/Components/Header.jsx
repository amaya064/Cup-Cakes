import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

export default function Header() {
  const [email, setEmail] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    setEmail(storedEmail);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('userData');
    setEmail(null);
    navigate("/sign-in");
  };

  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">Muffin</span>
            <span className="text-slate-700">Store</span>
          </h1>
        </Link>
        <ul className="flex gap-4 mx-4">
          <Link to="/cup-cakes">
            <li className="text-slate-700 hover:underline">CupCakes</li>
          </Link>
          <Link to="/juice">
            <li className="text-slate-700 hover:underline">Juice</li>
          </Link>
          <Link to="/about">
            <li className="text-slate-700 hover:underline">About</li>
          </Link>
          <Link to="/">
            <li className="text-slate-700 hover:underline">Home</li>
          </Link>
        </ul>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search.."
            className="bg-transparent outline-none"
          />
          <FaSearch className="text-slate-600" />
        </form>
        <ul className="flex gap-4">
          {email ? (
            <>
              <li className="text-slate-700 hover:underline cursor-pointer" onClick={() => navigate('/profile')}>
                {email}
              </li>
             
            </>
          ) : (
            <>
              <Link to="/sign-in">
                <li className="hidden sm:inline text-slate-700 hover:underline">SignIn</li>
              </Link>
              <Link to="/sign-up">
                <li className="hidden sm:inline text-slate-700 hover:underline">SignUp</li>
              </Link>
            </>
          )}
          <Link to="/cart">
                <li className="hidden sm:inline text-slate-700 hover:underline">Cart</li>
              </Link>
        </ul>
      </div>
    </header>
  );
}
