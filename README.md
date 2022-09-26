# README Generator

The README generator was created to aid a user in creating a ready-to-use README.

## Description

The README generator helps users in writing their README files. The application asks for user input, and then dynamically creates a README.md file in the dist folder based on the answers given by the user.

## Technologies Used

- JavaScript
- Node.js
- Inquirer

## Installation

To utilize this README generator, Node.js must be installed. You can find the installation instructions for Node [here](https://nodejs.dev/en/learn/how-to-install-nodejs/).
Once Node has been installed, open the command line (either through VSCode or GitBash). Then, type 'npm install inquirer' to download the necessary node modules.


## Usage and Website

[The README generator](https://kirstgonz.github.io/README-generator/) will help users in making a README for their projects. 

Within the project, there is a 'dist' folder. Inside the dist folder is a README that must be deleted before your dynamically created README is created.
If you are trying to create a new README, the previous README in the 'dist' folder must be deleted first. If it is not, then the newly created README will not populate, and the old data will persist.

The user will run 'node index' in GitBash or the VSCode terminal after ensuring they are in the proper file location (index.js in the root directory), and a series of prompts will appear. The user will be asked to enter information for a project title, the description, the installation methods, usage, license, ways to contribute to the project (if any), tests for the project, and ways to be contacted through GitHub and email.

## Credits

Made by [Kirstyn Gonzalez](https://github.com/kirstgonz)


## License

[https://choosealicense.com/](https://choosealicense.com/).
