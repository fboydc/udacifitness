# Udacicards - Flashcards App

Need to study for your final exams? need to review your interview questions?
Udacicards will help do just that! create decks of cards of any topic you would like, create your flashcards and then test yourself. Don't forget to do it every day!

## Getting Started

#### Mobile OS Requirements ####
**Android** - This app has been developed/tested with the "marshmallow" version of android. Any version >= 4 should be perfectly fine.

**iOS** - >= iOS 8.0


#### Recommended/Supported mobile OS
Even though the app will work for both android and iOS, the delete deck functionality is only implemented for iOS (react native swipeout is only working for iOS). Therefore, it is recommended to test this app with iOS only.


#### Required Libraries ####
Our applications requires several package managers to get up and running

*Yarn*
Our maing package manager for our application. Since NPM has a few flaws when dealing  with react-native (explained in the next section), it is the best option for this type of projects. Keep in mind, that the installation of   **Yarn** depends on your OS. If you are on a mac you will most likely use [Homebrew](https://brew.sh/), if you are on a windows machine you will either download the installer, or use another package manager like chocolatey or scoop. Either way, for the complete guide of installing Yarn in windows and mac, please [**go here**](https://yarnpkg.com/en/docs/install).

*Expo*
Expo allows us to test our code directly in our phone (be it android or iOS) with very little configuration. We can also choose to test this code on iphone/android simulators, but of course it is very convenient to test all our code on physical device by simply scanning a QR code! With this tool, publishing our app to the google/app store is very easy. Download Expo on your target device: [**android**](https://play.google.com/store/apps/details?id=host.exp.exponent), [**iOS**](https://itunes.apple.com/us/app/expo-client/id982107779).



SIMULATORS
*Xcode* -OPTIONAL
Even though it is not required (since we can just use the expo app on our device, all that we need is to have our developing computer and device connected on the same network), I find it interesting to test any app I develop in all possible platforms. Unfortunately, it is rather restrictive downloading xcode on a pc. So of you are a PC user,  just stick to the expo app on your target iphone and skip this section. If you are a MAC user, then [download xcode here](https://itunes.apple.com/us/app/xcode/id497799835?mt=12) and install it in your machine. This will make it possible to launch an iOS simulator where you can test your app directly in your macOS machine.

*Android Studio*
Ditto as previous section, however only do this if you really want to.
You can download android studio [here](https://developer.android.com/studio/index.html). After downloading android studio, you will need to configure your own virtual device using the **AVD manager** (Which comes out of the box with android studio). Once you have installed Android Studio, follow [these instructions](https://medium.com/@sunilk/react-native-development-getting-started-with-android-and-ios-ada22e3d00b1) in order to set up android studio with create-react-native-app.


#### How do I Install the Application? ####

1. Download **Yarn** - (see previous section)
2. Download  **Expo** - (see previous section)
3. Clone this respository/download resources [GitHub - Cloning Repositories](https://help.github.com/articles/cloning-a-repository/)
4. cd` to the root folder of the application (in this case **udacicards/**)
5. run the command `yarn` which will install all dependencies (listed under package.json).





** **
### How do I Run The Application? ###
1. If not under the project root folder, `cd` your way to the root folder of the project.
2. run the command `yarn start`. After it finishes booting up, you will have the option of scanning the QR code from your terminal by using the expo app on your phone. Open your phone and launch the expo app, then tap on the scan QR code option. With your camera, pinpoint the app frame to the qr code on your terminal and voila! the app should start on your phone. If you would like to run the app on the iOS emulator, simply hit the 'i' key on the terminal and it will automtically boot the simulator and open up the app. For android, you will have to boot the android simulator from android studio on your virtual device manager. Then you can just hit the 'a' key from your terminal, which will load the app on your android virtual device.

** **
### How Do I Use This Application? ###
Your initial page is your category view. In here you will have two widgets,
a category widget and a posts widget. Use the category widget by clicking on one of the links contained, and the posts widget will only show posts related to that category. On the top of your posts widget, you also have a control which lets you sort your current displayed posts by one of two criteria: date or score. Choose whichever criteria you see fit, and hit the sort button to sort your posts accordingly. To increase/decrease the score of a post, you can use the thumbs up/down buttons located on the right side of each post. Each post also has its respective button/link for deleting/editing that post. Hitting the delete button will remove the post form our backend and  synchronize our frontend.

The edit button will take you to the edit post view, which will show a form loaded with the post data. To edit it, simply change any of the fields and hit the submit button.

To create a new post, simply hit the "add new" button in the category view, which will take you to the new post view (containing an empty form with required fields). Hitting submit will create the new post and take you back to the category view page.

To go to the post detail page, simply click on the post title in the posts widget in category view. In here you will see all the information about the post along with comments. You can create new comments by clicking the "comment" button. you can edit a comment by click the edit button on the respective comment, represented by a boxed pencil. The delete button is right next the edit button, which will delete the comment silently. Like, edit, and delete post options are also shown in the post detail view.


# Other Libraries
### react-navigation
Allows us to use tab and stack navigators to change screens in our app.
For more information, you can visit [this website](https://reactnavigation.org/).

### react-native-swipeout
Allows us to swipe views in iOS apps (didn't really work on android), so that we can provide more personalized options to individual items (on a list for example). In this app, I only implemented the swipe for deleting decks on IOs, therefor there is no delete deck option for android. For more information on react native swipeout, [go here](https://github.com/dancormier/react-native-swipeout).


### reactotron-react-native & reactotron-redux
Reactotron provides us with a way of keeping track of our redux store
as well as are AsyncStorage. This is used only for developing purposes, and it is not needed to run/test the application. However, if you would like to add your own changes be my guest. [ More on Reactotron...](https://github.com/infinitered/reactotron)


