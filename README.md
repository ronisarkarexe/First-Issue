<div align="center">
<h1>👩‍💻 First-Issue - is an open-source platform designed specifically for beginners looking to contribute to open-source projects!</h1>
</div>

<p align="center">
   <a href="https://github.com/ronisarkarexe/First-Issue/blob/master/LICENSE" target="blank">
   <img src="https://img.shields.io/github/license/ronisarkarexe/First-Issue?style=for-the-badge&logo=appveyor" alt="License" />
   </a>
   <a href="https://github.com/ronisarkarexe/First-Issue/fork" target="blank">
   <img src="https://img.shields.io/github/forks/ronisarkarexe/First-Issue?style=for-the-badge&logo=appveyor" alt="Forks"/>
   </a>
   <a href="https://github.com/ronisarkarexe/First-Issue/stargazers" target="blank">
   <img src="https://img.shields.io/github/stars/ronisarkarexe/First-Issue?style=for-the-badge&logo=appveyor" alt="Star"/>
   </a>
   <a href="https://github.com/ronisarkarexe/First-Issue/issues" target="blank">
   <img src="https://img.shields.io/github/issues/ronisarkarexe/First-Issue.svg?style=for-the-badge&logo=appveyor" alt="Click Vote Issue"/>
   </a>
   <a href="https://github.com/ronisarkarexe/First-Issue/pulls" target="blank">
   <img src="https://img.shields.io/github/issues-pr/ronisarkarexe/First-Issue.svg?style=for-the-badge&logo=appveyor" alt="Click Vote Open Pull Request"/>
   </a>
</p>

## Table of Contents

- [Table of Contents](#table-of-contents)
- [About 🚀](#about-)
- [Features 💪](#features-)
- [How to add your Project Data 🤔](#how-to-add-your-project-data-)
  - [Prerequisites](#prerequisites)
  - [How to Install Git](#how-to-install-git)
  - [How to Install Node.js and npm](#how-to-install-nodejs-and-npm)
  - [Steps to Add Your project Data](#steps-to-add-your-project-data)
- [Contributing 👨‍💻](#contributing-)
- [Contributors 🤝](#contributors-)
- [License](#license)
- [Support 🙏](#support-)

<a id="about"></a>

## About 🚀

- First-Issue - [Website](https://firstissuedev.vercel.app/)
- **`firstIssue`** firstIssue is an open-source project designed to showcase developer projects and connect contributors in a user-friendly.
- With **`firstIssue`**, developers can create their profiles in JSON format, which are then displayed on the web for others to discover.

<a id="features"></a>

## Features 💪

- One of the key features of **`firstIssue`** is its powerful search functionality.
- Users can search for developers based on specific skills, making it easy to find issues with expertise in a particular technology or programming language.
- This makes **`firstIssue`** a valuable resource for project managers, showcase and anyone looking to connect with skilled developers for collaboration or employment opportunities.

<a id="how-to-add-your-profile-data"></a>

## How to add your profile Data 🤔

> Thank you for your interest in contributing to our open-source project! <br>

<a id="prerequisites"></a>

### Prerequisites

- A GitHub account
- Git installed on your local development environment
- Node Package Manager (npm) installed on your local development environment

### How to Install Git

Git is a version control system that is used to manage the source code of your project.

To install Git, follow these steps:

1. Download and install Git from the [Official Website](https://git-scm.com/downloads)
2. Open the terminal or command prompt on your local development environment
3. Verify the installation of Git by running the following command:

   ```bash
   git --version
   ```

### How to Install Node.js and npm

Node.js is a JavaScript runtime environment that allows you to run JavaScript code outside of a web browser. npm (Node Package Manager) is a package manager for JavaScript, essential for managing dependencies in Node.js projects. Here's how to install Node.js and npm:

1. **Download Node.js:**

   - Visit the [official Node.js website](https://nodejs.org/en/download/) and download the appropriate installer for your operating system (Windows, macOS, or Linux).
   - Choose the LTS (Long Term Support) version for stable releases or the latest version for cutting-edge features.
   - Follow the installation instructions provided by the installer.

2. **Verify Node.js Installation:**

   - After the installation is complete, open your terminal or command prompt.
   - To verify that Node.js has been installed successfully, type the following command and press Enter:

     ```
     node -v
     ```

   - This command should display the version of Node.js installed on your system. If it does, Node.js installation was successful.

3. **Verify npm Installation:**

   - npm comes bundled with Node.js, so once Node.js is installed, npm is automatically installed as well.
   - To confirm that npm is installed, in your terminal or command prompt, type:

     ```
     npm -v
     ```

   - Press Enter. This command should display the version of npm installed on your system. If it does, npm installation was successful.

4. **Optional: Update npm (recommended):**

   - It's recommended to keep npm up to date to access the latest features and bug fixes.
   - To update npm to the latest version, type the following command and press Enter:

     ```
     npm install -g npm@latest
     ```

   - This command will update npm to the latest stable version globally (-g flag).

By following these steps, you have successfully installed Node.js and npm on your system. You are now ready to start building JavaScript applications and managing dependencies with npm.

### Steps to Add Your Profile Data

1. **Fork the repository:** To create a copy of the repository in your GitHub account, click on the "Fork" button in the top right corner of the project repository page.
2. **Clone the forked repository:** To clone the repository to your local development environment, open the terminal or command prompt and run the following command:

   ```bash
   git clone https://github.com/<your-github-username>/First-Issue.git
   ```

3. **Install dependencies:** To install the necessary dependencies for the project, navigate to the project directory and run the following command:

   ```bash
   npm install
   ```

4. **Navigate** to the **`public/data`** folder in your project directory.
5. **Create a new JSON file** named **`your_github_username.json`** (replace your_github_username with your actual GitHub username). Open the file you just created.
6. **Add** the following JSON object, replacing the placeholder values with your own details:
   ```json
   [
     {
       "title": "Project Name",
       "description": "Project Description",
       "liveUrl": "Project live URL",
       "repoUrl": "https://github.com/<github-username>",
       "techStack": ["React", "Node.js"]
     }
   ]
   ```
7. **Save** the **`your_github_username.json`** file.
8. **Navigate** to the **`src`** folder in your project directory. Open the **`contributors.json`** file.
9. **Add your JSON filename** (your_github_username.json) to the array of filenames in the contributors.json file, like this:
   ```json
   ["filename1.json", "filename2.json", "your_github_username.json"]
   ```
10. **Save** the **`contributors.json`** file.
11. **Create a new branch:** To create a new branch for your project, run the following command:
    ```bash
    git checkout -b add-project
    ```
12. **Add your changed files:** Add changed files to the stage by running the following command:
    ```bash
    git add .
    ```
13. **Commit your changes:** To save your changes to the branch,, run the following command:
    ```bash
    git commit -m "add: <your-name>"
    ```
14. **Push to the branch:** To push the changes to the remote repository, run the following command:
    ```bash
    git push origin add-project
    ```
15. **Create a pull request:** To submit your changes to the main repository, create a pull request by clicking on the "Compare & pull request" button on your forked repository page.
16. **Wait for review and merge:** Wait for the project maintainers to review and merge your changes.

Once your changes are merged, your project data will be added to the project's **`contributors.json`** file and your project will be displayed on the project's website.

<a id="contributing"></a>

## Contributing 👨‍💻

Contributions make the open source community such an amazing place to learn, inspire, and create. <br>
**Any contributions you make are truly appreciated!**

<a id="contributors"></a>

## Contributors 🤝

<a href="https://github.com/ronisarkarexe/First-Issue/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=ronisarkarexe/First-Issue" />
</a>

<a id="license"></a>

## License

<table>
  <tr>
     <td>
       <p align="center"> <img src="https://github.com/malivinayak/malivinayak/blob/main/LICENSE-Logo/MIT.png?raw=true" width="80%"></img>
    </td>
    <td> 
      <img src="https://img.shields.io/badge/License-MIT-yellow.svg"/> <br> 
         This project is licensed under <a href="./LICENSE">MIT</a>. <img width=2300/>
    </td>
  </tr>
</table>

<a id="support"></a>

## Support 🙏

Thank you for contributing to our open-source project! We appreciate your support 🚀 <br>
Don't forget to leave a star ⭐
