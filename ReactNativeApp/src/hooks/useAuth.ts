import {useState, useEffect} from 'react';
import {Storage, StorageKeys} from '../utils/storage';

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  isAuthenticated: boolean;
}

export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    token: null,
    isLoading: true,
    isAuthenticated: false,
  });

  // Initialize auth state on app start
  useEffect(() => {
    initializeAuth();
  }, []);

  const initializeAuth = async () => {
    try {
      const [token, userData] = await Promise.all([
        Storage.getItem<string>(StorageKeys.USER_TOKEN),
        Storage.getItem<User>(StorageKeys.USER_DATA),
      ]);

      setAuthState({
        user: userData,
        token,
        isLoading: false,
        isAuthenticated: !!token && !!userData,
      });
    } catch (error) {
      console.error('Error initializing auth:', error);
      setAuthState(prev => ({...prev, isLoading: false}));
    }
  };

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      setAuthState(prev => ({...prev, isLoading: true}));

      // TODO: Replace with actual API call
      // const response = await authService.login(email, password);
      
      // Mock response for now
      const mockUser: User = {
        id: '1',
        email,
        name: 'John Doe',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      const mockToken = 'mock-jwt-token';

      // Store auth data
      await Promise.all([
        Storage.setItem(StorageKeys.USER_TOKEN, mockToken),
        Storage.setItem(StorageKeys.USER_DATA, mockUser),
      ]);

      setAuthState({
        user: mockUser,
        token: mockToken,
        isLoading: false,
        isAuthenticated: true,
      });

      return true;
    } catch (error) {
      console.error('Login error:', error);
      setAuthState(prev => ({...prev, isLoading: false}));
      return false;
    }
  };

  const register = async (
    name: string,
    email: string,
    password: string,
  ): Promise<boolean> => {
    try {
      setAuthState(prev => ({...prev, isLoading: true}));

      // TODO: Replace with actual API call
      // const response = await authService.register(name, email, password);
      
      // Mock response for now
      const mockUser: User = {
        id: '1',
        email,
        name,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      const mockToken = 'mock-jwt-token';

      // Store auth data
      await Promise.all([
        Storage.setItem(StorageKeys.USER_TOKEN, mockToken),
        Storage.setItem(StorageKeys.USER_DATA, mockUser),
      ]);

      setAuthState({
        user: mockUser,
        token: mockToken,
        isLoading: false,
        isAuthenticated: true,
      });

      return true;
    } catch (error) {
      console.error('Register error:', error);
      setAuthState(prev => ({...prev, isLoading: false}));
      return false;
    }
  };

  const logout = async () => {
    try {
      setAuthState(prev => ({...prev, isLoading: true}));

      // TODO: Call logout API if needed
      // await authService.logout();

      // Clear stored data
      await Promise.all([
        Storage.removeItem(StorageKeys.USER_TOKEN),
        Storage.removeItem(StorageKeys.USER_DATA),
      ]);

      setAuthState({
        user: null,
        token: null,
        isLoading: false,
        isAuthenticated: false,
      });
    } catch (error) {
      console.error('Logout error:', error);
      setAuthState(prev => ({...prev, isLoading: false}));
    }
  };

  const updateUser = async (userData: Partial<User>): Promise<boolean> => {
    try {
      if (!authState.user) return false;

      const updatedUser = {...authState.user, ...userData, updatedAt: new Date().toISOString()};

      // TODO: Replace with actual API call
      // await userService.updateProfile(updatedUser);

      // Update stored data
      await Storage.setItem(StorageKeys.USER_DATA, updatedUser);

      setAuthState(prev => ({
        ...prev,
        user: updatedUser,
      }));

      return true;
    } catch (error) {
      console.error('Update user error:', error);
      return false;
    }
  };

  const refreshToken = async (): Promise<boolean> => {
    try {
      if (!authState.token) return false;

      // TODO: Replace with actual API call
      // const response = await authService.refreshToken(authState.token);
      
      // For now, just return true
      return true;
    } catch (error) {
      console.error('Refresh token error:', error);
      await logout();
      return false;
    }
  };

  return {
    ...authState,
    login,
    register,
    logout,
    updateUser,
    refreshToken,
  };
}; 