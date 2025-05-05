# 🛠️ Development Setup – Kitchen AI App (Frontend)

This guide walks you through setting up the development environment for the **Kitchen AI App** frontend, built with **React Native**.

---

## ✅ Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS recommended)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/) or npm
- [Watchman](https://facebook.github.io/watchman/docs/install)
- [JDK 11+](https://adoptium.net/) (for Android)
- [Xcode](https://developer.apple.com/xcode/) (for iOS, macOS only)
- [CocoaPods](https://guides.cocoapods.org/using/getting-started.html) (`brew install cocoapods`)
- [Android Studio](https://developer.android.com/studio) with emulator setup

---

## 📦 1. Clone the Repository

```bash
git clone https://github.com/your-username/kitchen-ai-app.git
cd kitchen-ai-app/frontend
```

## 📥 2. Install JS Dependencies

```bash
yarn install
# or
npm install
```

## 📚 3. Install iOS Dependencies (macOS only)

```bash
cd ios
pod install
cd ..
```

## 🧱 4. Start the Metro Bundler

```bash
yarn start
# or
npm start
```


## 📱 5. Run the App
### ▶️ On iOS (macOS only)
Make sure an iOS Simulator is available in Xcode:

```bash
npx react-native run-ios
```

### ▶️ On Android
Start an Android emulator or connect a physical device:

```bash
npx react-native run-android
```


## 🧹 6. Troubleshooting
### Clear Metro cache:

```bash
yarn start --reset-cache
# or
npm start -- --reset-cache
```

## Clean iOS build (macOS only):

```bash
cd ios
xcodebuild clean
cd ..
```

## Reinstall CocoaPods:

```bash
cd ios
pod deintegrate
pod install
cd ..
```
