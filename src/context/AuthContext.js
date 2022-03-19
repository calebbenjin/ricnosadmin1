import { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { NEXT_URL, API_URL } from '@/lib/index';
import PageLoader from '@/components/organisms/PageLoader';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [isStaff, setIsStaff] = useState(true);

  const router = useRouter();

  // useEffect(() => checkUserLoggedIn(), []);

  // Login user
  // =====================================
  const login = async ({ email, password }) => {
    setIsLoading(true);
    const res = await fetch(`${NEXT_URL}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      setUser(data);
      // console.log(data)
      router.push('/admin');
      // setIsLoading(false);
    } else {
      setIsLoading(false);
      setIsError(data.message);
      setIsError(null);
    }
  };

  // Check if user is logged in
  // ================================================
  const checkUserLoggedIn = async () => {
    setInitialLoading(true);
      const res = await fetch(`${NEXT_URL}/api/user`);
      const data = await res.json() ;

      console.log(data)

      if(res.ok) {
        setUser(data.user.data.user);
      } else {

        setUser(null);
      }
  };

  // Logout user
  // =====================================

  const logout = async () => {
    fetch(`${NEXT_URL}/api/logout`, {
      method: 'POST',
    })
      .then((res) => {
        setUser(null);
        router.push('/');
      })
      .catch((error) => {
        console.error('error logging out user');
      });
  };

  // Password reset
  // =====================================

  // Track item
  // =====================================

  // Get request pickup
  // =====================================

  return (
    <AuthContext.Provider value={{ user, isError, isStaff, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
