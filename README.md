# Friend Finder - Node and Express Servers

1. on starting ```node server.js``` the user will see the App is listening on PORT 8080.

2. User can then navigate to browser and enter ```localhost:8080``` -> this will bring the user to the home page of Friend Finder

3. To begin the quest to find which friend would be most compatible with you, click the ```Survey``` button.

4. This button will navigate to the ```survey.html``` page where you must fill out all information including your name, an image of yourself, and complete all 10 survey questions.

5. After filling out the entire survey, the user can click ```submit``` which will prompt node.js and express.js to compare your answers with answers of friends in ```friends.js``` file.

6. Finally, the user's best match will appear, unless their responses do not perfectly align with those of the array of friends in ```friends.js```. At this point, a message will appear stating that the app was unable to locate a suitible friend.
