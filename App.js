import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import AuthContext from './app/auth/context';
import AppNavigator from './app/components/navigation/AppNavigation';
import AuthNavigator from './app/components/navigation/AuthNavigation';
import auth from "./app/auth/storage";
import OfflineIndicator from './app/components/OfflineIndicator';

export default function App() {
  const [user, setUser] = useState()

  const restoreUser = async () => {
    const restoredUser = await auth.getUser();
    if (restoreUser) setUser(restoredUser);
  }

  useEffect(() => {
    restoreUser();
  }, [])

  
  
  return (
    <AuthContext.Provider value={{user, setUser}}>
      <OfflineIndicator/>
      <NavigationContainer>
        {user ? <AppNavigator/> : <AuthNavigator/>}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
