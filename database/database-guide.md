# Create a new Firebase database for the "Bota Pra Rodar Web" project

This guide will show you how to use the **sample-db.json** file provided on the repository to create a new instance of Firebase Database to use on the **Bota pra Rodar Web** project. Follow the steps below and happy coding!


## Steps
1. Go to https://console.firebase.google.com/ and log in with your Google Account. Click on "Add Project".
2. Enter a project name and "Continue".
	>  Suggestion: "bpr-db"
3. Disable Google Analytics for this project and "Create Project".
	> Optional: Enable it and select/create a Google Analytics account.
4. When your project is ready click on "Continue" to access its dashboard.
5. On the side menu, select Build > Realtime Database.
6. Click on "Create Database", select a Realtime Database location, Start in  **test mode** and click on "Enable".
7. Click on the Kebab Menu (three dots) and "Import JSON", select the sample-db.json file and finish importing it.
8. The database will be generated with **5** entities: admins, bikes, communities, dashboardInfo, and users.
9. On the side menu, select Build > Authentication.
10. Click on "Get started". On "Sign-in providers" select "Email/Password", enable it and save.
11. Go to the "Users" tab, click on "Add user" and fill it with your valid email address and any 6-characters long password.
12. After creating your user, go to the Kebab Menu (three dots) and select "reset password" and confirm. The email sent from Firebase will probably be on your Spam box, find it and follow the link provided to set a new password. Save it and close this tab.
13. Back to Firebase, go to Build > Authentication again. Find the user created before and copy the User UID provided.
14. Go to Build > Realtime Database, find the "admins" entity and click on the "+" button. Paste the User UID copied before on the "key" input and click on the "+" button after it. Fill the "key" input with the word "email" and the "value" input with the same email address used on Authentication. Press enter to save it.
15. Repeat twice the step of clicking on the "+" button right after the User UID and fill the "key" and "value" inputs with these values:

KEY                          |VALUE                         |
-------------------------------|-----------------------------|
|`senha`            |`the password you provided before`            |
`uid`            |`the same uid you copied before`            |
16. Delete the test object inside "admins" by clicking the trash can button right after it.
17.  Next to "Project Overview" on the Firebase side menu click on the gear icon and select "Project settings".
18. On "Your apps" create a new web app by providing a nickname and register it.
	> Suggestion: "bpr"
19. Add a Firebase SDK by select "use npm" and click on "Continue to console".
20. Back to your Project Settings go to "Your Apps" section and copy the following information to your .env file  (you should create one using the .sample-env file) inside your "Bota pra Rodar Web" project:
	> Do not use quotes while filling the .env file values

KEY                          |VALUE                         |
-------------------------------|-----------------------------|
|`NODE_ENV`            | development            |
`PORT`            | any available port you wish (suggestion: 3000)            |
|`REACT_APP_API_KEY`            | "apiKey" value inside "firebaseConfig"            |
`REACT_APP_AUTH_DOMAIN`            |"authDomain" value inside "firebaseConfig"           |
`REACT_APP_DATABASE_URL`            |"databaseURL" value inside "firebaseConfig"            |
|`REACT_APP_PROJECT_ID`            |"projectId" value inside "firebaseConfig"             |
`REACT_APP_STORAGE_BUCKET`            |"storageBucket" value inside "firebaseConfig"            |
|`REACT_APP_MESSAGING_SENDER_ID`            |"messagingCenterId" value inside "firebaseConfig"           |
`REACT_APP_APP_ID`            |"appId" value inside "firebaseConfig"             |
`GENERATE_SOURCEMAP`            | false            |
22. You're now ready to use your database on Bota Pra Rodar Web! Run the project and log in with your email and password chosen.


