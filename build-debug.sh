#!/bin/bash

set -e

echo "🛠️  Generating android folder (prebuild)..."
npx expo prebuild --platform android

echo "📦 Packing bundle JS and assets..."
mkdir -p android/app/src/main/assets
mkdir -p android/app/src/main/res

npx react-native bundle \
  --platform android \
  --dev false \
  --entry-file App.tsx \
  --bundle-output android/app/src/main/assets/index.android.bundle \
  --assets-dest android/app/src/main/res

echo "🏗️  Building APK debug..."
cd android
./gradlew assembleDebug
cd ..

echo "✅ APK generated:"
find android/app/build/outputs/apk/debug -name "*.apk"
