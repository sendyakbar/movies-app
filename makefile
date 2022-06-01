# Set the default parameters for the build, can be overridden with either an
# environment variable or by using `make target KEY=VALUE`.

# ANDROID COMMANDS
run-android:
	. prepare-env.sh .env.$(ENV) .env && react-native run-android

build-android-apk:
	ENV_FILE=.env.$(ENV)
	. prepare-env.sh .env.$(ENV) .env && cd android && ./gradlew clean && ./gradlew assembleRelease

# IOS COMMANDS
# Run IOS application locally while passing on .env configuration file
run-ios:
	. prepare-env.sh .env.$(ENV) .env && react-native run-ios