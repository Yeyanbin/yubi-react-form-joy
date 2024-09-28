
import React, { createContext, useContext, useState } from 'react';


interface IUserContext {
  isLogin: boolean;
  user?: string;
  updateUser?: (user: string) => void;
}

interface IAuthContext {
  auth?: number;
  updateAuth?: (auth: number) => void;
}

const UserContext = createContext<IUserContext>({ isLogin: false });
const AuthContext = createContext<IAuthContext>({ auth: 0 });

const AppContext = ({ children }) => {
  const [user, setUser] = useState();
  const [auth, setAuth] = useState(0);
  const [isLogin, setIsLogin] = useState(false);

  const updateUser = (value) => setUser(value);
  const updateAuth = (value) => setAuth(value);

  checkLogin().then((userResp) => {
    if (userResp.ret === 0) {
      // 已经登录了
      const { name, authLevel } = userResp.data;

      updateUser(name);
      updateAuth(authLevel);
      setIsLogin(true);
    } else {
      // 未登录
      setIsLogin(false);
    }
  });

  return (
    <UserContext.Provider value={{ user, updateUser, isLogin }}>
      <AuthContext.Provider value={{ auth, updateAuth }}>{children}</AuthContext.Provider>
    </UserContext.Provider>
  );
}

const useAppContext = () => {
  const userContext = useContext(UserContext);
  const authContext = useContext(AuthContext);
  return { ...userContext, ...authContext };
}

export {
  AppContext,
  useAppContext,
};

const checkLogin = () => ({} as any);