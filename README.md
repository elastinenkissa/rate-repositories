# Rate Repositories
Rate Repositories is a small mobile app created using React Native for the frontend and GraphQL and SQLite for the backend. 

The frontend was made from scratch, utilizing Apollo-Client for communicating with the server. It features a few premade components from UI libraries such as React Native Paper, while the rest are handmade custom components. React Native testing library was used for writing tests.

The backend was made and provided by Kalle Ilves from University of Helsinki. It utilizes Apollo-Server for creating the GraphQL server and uses SQLite for storing data.

# Usage
The application provides users the ability to create an account, log in or out of it, and rate and review repositories. 

The homepage features all available repositories to rate. Each repository can be viewed, and each view contains a link to the repository on GitHub, as well as all the reviews it has. 

The user also has an option to view their created reviews, where they can delete each review or show the repository the review is located at.

# Running on your device

Due to my inability to upload the app to Google Play Store (registration fee), to experience the app first-hand, it's recommended to run it on your own device. Here is a short guide on how to do that:

1. Download this repository to your desktop and extract it.
2. Navigate to 'server' folder
2.1 Run the command # `npm install`
2.2 Run the command # `npm start`
3. Navigate to 'client' folder in a different window
3.1 Run the command # `npm install`
3.2 Run the command # `npm start`
4. In your Expo Go app, manually enter the URL printed in the terminal in the 'client' folder, or scan the printed QR code to run your app on your mobile phone

It is not recommended to use web view of the app, as there are a lot of compatibility issues with it.

