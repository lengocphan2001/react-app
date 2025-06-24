# React Native Project Structure

This document describes the folder structure and organization of the React Native application.

## 📁 Root Directory

```
ReactNativeApp/
├── android/                 # Android native code
├── ios/                    # iOS native code
├── src/                    # Source code directory
├── __tests__/              # Test files
├── App.tsx                 # Main App component
├── index.js                # Entry point
├── package.json            # Dependencies and scripts
├── metro.config.js         # Metro bundler configuration
├── babel.config.js         # Babel configuration
├── tsconfig.json           # TypeScript configuration
├── jest.config.js          # Jest testing configuration
├── .eslintrc.js            # ESLint configuration
├── .prettierrc.js          # Prettier configuration
└── README.md               # Project documentation
```

## 📁 Source Code Structure (`src/`)

### 🧩 Components (`src/components/`)
Reusable UI components organized by category:

```
components/
├── common/                 # Shared components used across the app
│   ├── LoadingSpinner.tsx
│   ├── Button.tsx
│   ├── Input.tsx
│   └── Card.tsx
├── forms/                  # Form-specific components
│   ├── FormField.tsx
│   ├── FormValidation.tsx
│   └── CustomInput.tsx
└── layout/                 # Layout components
    ├── Header.tsx
    ├── Footer.tsx
    ├── Sidebar.tsx
    └── Container.tsx
```

### 🖥️ Screens (`src/screens/`)
Screen components organized by feature:

```
screens/
├── auth/                   # Authentication screens
│   ├── LoginScreen.tsx
│   ├── RegisterScreen.tsx
│   ├── ForgotPasswordScreen.tsx
│   └── OnboardingScreen.tsx
├── home/                   # Home and main screens
│   ├── HomeScreen.tsx
│   ├── DashboardScreen.tsx
│   └── FeedScreen.tsx
├── profile/                # User profile screens
│   ├── ProfileScreen.tsx
│   ├── EditProfileScreen.tsx
│   └── SettingsScreen.tsx
└── settings/               # App settings screens
    ├── SettingsScreen.tsx
    ├── NotificationsScreen.tsx
    └── PrivacyScreen.tsx
```

### 🧭 Navigation (`src/navigation/`)
Navigation configuration and components:

```
navigation/
├── AppNavigator.tsx        # Main app navigation
├── AuthNavigator.tsx       # Authentication flow navigation
├── TabNavigator.tsx        # Bottom tab navigation
├── DrawerNavigator.tsx     # Side drawer navigation
└── types.ts               # Navigation type definitions
```

### 🔧 Services (`src/services/`)
API calls, external services, and business logic:

```
services/
├── api/                    # API service layer
│   ├── apiClient.ts        # Axios configuration
│   ├── authService.ts      # Authentication API calls
│   ├── userService.ts      # User-related API calls
│   └── types.ts           # API response types
└── storage/                # Local storage services
    ├── asyncStorage.ts     # AsyncStorage wrapper
    ├── secureStorage.ts    # Secure storage wrapper
    └── cacheService.ts     # Caching service
```

### 🛠️ Utils (`src/utils/`)
Utility functions and helpers:

```
utils/
├── validation.ts           # Form validation functions
├── storage.ts              # Storage utility functions
├── dateUtils.ts            # Date manipulation utilities
├── stringUtils.ts          # String manipulation utilities
├── numberUtils.ts          # Number formatting utilities
├── deviceUtils.ts          # Device-specific utilities
└── constants.ts            # App constants
```

### 🎣 Hooks (`src/hooks/`)
Custom React hooks:

```
hooks/
├── useAuth.ts              # Authentication hook
├── useStorage.ts           # Storage hook
├── useApi.ts               # API call hook
├── useForm.ts              # Form handling hook
├── useTheme.ts             # Theme hook
└── usePermissions.ts       # Permissions hook
```

### 📊 Store (`src/store/`)
State management (Redux, Zustand, etc.):

```
store/
├── slices/                 # Redux slices or state modules
│   ├── authSlice.ts        # Authentication state
│   ├── userSlice.ts        # User state
│   └── settingsSlice.ts    # Settings state
├── actions/                # Action creators
│   ├── authActions.ts      # Authentication actions
│   ├── userActions.ts      # User actions
│   └── settingsActions.ts  # Settings actions
└── index.ts               # Store configuration
```

### 📝 Types (`src/types/`)
TypeScript type definitions:

```
types/
├── navigation.ts           # Navigation types
├── api.ts                 # API types
├── user.ts                # User-related types
├── common.ts              # Common types
└── index.ts               # Type exports
```

### 🎨 Assets (`src/assets/`)
Static assets:

```
assets/
├── images/                 # Image files
│   ├── icons/             # Icon images
│   ├── backgrounds/       # Background images
│   └── logos/             # Logo images
├── icons/                  # Icon components (SVG)
├── fonts/                  # Custom fonts
└── animations/             # Animation files (Lottie)
```

### ⚙️ Config (`src/config/`)
Configuration files:

```
config/
├── api.ts                 # API configuration
├── theme.ts               # Theme configuration
├── constants.ts           # App constants
└── environment.ts         # Environment variables
```

### 📋 Constants (`src/constants/`)
App-wide constants:

```
constants/
├── colors.ts              # Color definitions
├── sizes.ts               # Size definitions
├── strings.ts             # String constants
└── endpoints.ts           # API endpoints
```

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **iOS setup (macOS only):**
   ```bash
   cd ios && pod install && cd ..
   ```

3. **Start Metro bundler:**
   ```bash
   npm start
   ```

4. **Run on Android:**
   ```bash
   npm run android
   ```

5. **Run on iOS:**
   ```bash
   npm run ios
   ```

## 📦 Available Scripts

- `npm start` - Start Metro bundler
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS device/simulator
- `npm test` - Run tests
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run type-check` - Run TypeScript type checking
- `npm run clean` - Clean and reinstall dependencies

## 🏗️ Architecture Principles

1. **Separation of Concerns**: Each folder has a specific responsibility
2. **Reusability**: Components are designed to be reusable
3. **Type Safety**: Full TypeScript support throughout the app
4. **Scalability**: Structure supports app growth and new features
5. **Maintainability**: Clear organization makes code easy to maintain

## 🔄 State Management

The app uses a combination of:
- **Local State**: React hooks for component-level state
- **Global State**: Redux/Zustand for app-wide state
- **Persistent State**: AsyncStorage for data persistence

## 🎨 Theming

The app supports:
- Light/Dark theme switching
- Custom color schemes
- Responsive design
- Platform-specific styling

## 📱 Platform Support

- **iOS**: Full support with native components
- **Android**: Full support with native components
- **Web**: React Native Web support (if configured)

## 🧪 Testing

- **Unit Tests**: Jest for component and utility testing
- **Integration Tests**: Testing library for component integration
- **E2E Tests**: Detox for end-to-end testing (if configured)

## 📚 Additional Resources

- [React Native Documentation](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Native Testing Library](https://callstack.github.io/react-native-testing-library/) 