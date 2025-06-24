import AsyncStorage from '@react-native-async-storage/async-storage';

export const Storage = {
  // Store data
  setItem: async (key: string, value: any): Promise<void> => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (error) {
      console.error('Error saving data:', error);
      throw error;
    }
  },

  // Get data
  getItem: async <T>(key: string): Promise<T | null> => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {
      console.error('Error reading data:', error);
      return null;
    }
  },

  // Remove data
  removeItem: async (key: string): Promise<void> => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing data:', error);
      throw error;
    }
  },

  // Clear all data
  clear: async (): Promise<void> => {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.error('Error clearing data:', error);
      throw error;
    }
  },

  // Get all keys
  getAllKeys: async (): Promise<readonly string[]> => {
    try {
      return await AsyncStorage.getAllKeys();
    } catch (error) {
      console.error('Error getting all keys:', error);
      return [];
    }
  },

  // Multi get
  multiGet: async (keys: string[]): Promise<readonly [string, string | null][]> => {
    try {
      return await AsyncStorage.multiGet(keys);
    } catch (error) {
      console.error('Error multi getting data:', error);
      return [];
    }
  },

  // Multi set
  multiSet: async (keyValuePairs: [string, string][]): Promise<void> => {
    try {
      await AsyncStorage.multiSet(keyValuePairs);
    } catch (error) {
      console.error('Error multi setting data:', error);
      throw error;
    }
  },
};

// Storage keys
export const StorageKeys = {
  USER_TOKEN: 'user_token',
  USER_DATA: 'user_data',
  SETTINGS: 'app_settings',
  THEME: 'app_theme',
  LANGUAGE: 'app_language',
  ONBOARDING_COMPLETED: 'onboarding_completed',
  NOTIFICATIONS_ENABLED: 'notifications_enabled',
  AUTO_SAVE_ENABLED: 'auto_save_enabled',
} as const; 