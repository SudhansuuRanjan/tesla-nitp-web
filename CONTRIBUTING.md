# Introduction
Tesla Club NIT, Patna is the official club of electrical engineering department of NIT, Patna, the premier club for Electrical Engineering enthusiasts and professionals! Founded in 2021 by a group of bright-minded seniors, under the guidance of our esteemed PI - Dr. Amitesh Sir, T.E.S.L.A. Club is dedicated to fostering public speaking, teamwork, technical excellence, and management skills among its members. Our primary aim is to provide a platform for seniors, juniors, and alumni to come together, learn, grow, and secure rewarding careers in the field of Electrical Engineering.

## How to Contribute to T.E.S.L.A NITP Website
We welcome contributions from everyone! Here are some ways you can contribute:

 - **Solve open issues.** We have a list of open issues on GitHub that need to be solved. You can choose an issue that you are interested in and start working on it.
 - **Create new issues.** If you find a bug or have a suggestion for improvement, please create a new issue on GitHub.
Submit pull requests. Once you have made changes to the code, please submit a pull request on GitHub. We will review your changes and merge them into the main codebase if they are approved.
Style Guide and Contribution Guidelines
Please follow our style guide and contribution guidelines when submitting patches and additions. In general, we follow the `fork-and-pull` Git workflow.

## Fork-And-Pull Workflow

1. Fork the repo on GitHub.
2. Clone the project to your own machine.
3. Make changes to your local copy of the code.
4. Commit your changes and push them to your fork on GitHub.
5. Create a pull request on GitHub to submit your changes for review.

## Code of Conduct
We expect all contributors to follow our [code of conduct](https://github.com/SudhansuuRanjan/tesla-nitp-web/blob/main/CODE_OF_CONDUCT.md). Please be respectful and inclusive in your communication and interactions with other contributors.

## Basics of Git and GitHub

### Git & GitHub

Before we proceed, it's better to know the difference between Git and Github. Git is a version control system (VCS) that allows us to keep track of the history of our source code , whereas GitHub is a service that hosts Git projects. 

We assume you have created an account on Github and installed Git on your System.

Now enter your name and E-mail (used on Github) address in Git, by using following command.

`$ git config --global user.name "YOUR NAME"`
` $ git config --global user.email "YOUR EMAIL ADDRESS"`
This is an important step to mark your commits to your name and email.

<br />

### Fork a project

You can make a copy of the project to your account. This process is called forking a project to your Github account. On Upper right side of project page on Github, you can see -

<p align="center">  <img  src="https://i.imgur.com/P0n6f97.png">  </p>
Click on fork to create a copy of project to your account. This creates a separate copy for you to work on.

<br />

<br />

### Clone the forked project

You have forked the project you want to contribute to your github account. To get this project on your development machine we use clone command of git.

`$ git clone https://github.com/SudhansuuRanjan/tesla-nitp-web.git` <br/>
Now you have the project on your local machine.

<br />

### Add a remote (upstream) to original project repository

Remote means the remote location of project on Github. By cloning, we have a remote called origin which points to your forked repository. Now we will add a remote to the original repository from where we had forked.

`$ cd <your-forked-project-folder>`
`$ git remote add upstream https://github.com/SudhansuuRanjan/tesla-nitp-web.git` <br/>
You will see the benefits of adding remote later.

<br />

### Synchronizing your fork

Open Source projects have a number of contributors who can push code anytime. So it is necessary to make your forked copy equal with the original repository. The remote added above called Upstream helps in this.

`$ git checkout main`
`$ git fetch upstream`
`$ git merge upstream/main`
`$ git push origin main` <br/>
The last command pushes the latest code to your forked repository on Github. The origin is the remote pointing to your forked repository on github.

<br />

### Create a new branch for a feature or bugfix

Usually, all repositories have a main branch that is regarded to be stable, and any new features should be developed on a separate branch before being merged into the main branch. As a result, we should establish a new branch for our feature or bugfix and go to work on the issue. 

`$ git checkout -b <feature-branch>`
This will create a new branch out of master branch. Now start working on the problem and commit your changes.

`$ git add --all`
`$ git commit -m "<commit message>"`
The first command adds all the files or you can add specific files by removing -a and adding the file names. The second command gives a message to your changes so you can know in future what changes this commit makes. If you are solving an issue on original repository, you should add the issue number like #35 to your commit message. This will show the reference to commits in the issue.

<br />

### Push code and create a pull request

You now have a new branch containing the modifications you want in the project you forked. Now, push your new branch to your remote github fork. 

`$ git push origin <feature-branch>`
Now you are ready to help the project by opening a pull request means you now tell the project managers to add the feature or bug fix to original repository. You can open a pull request by clicking on green icon -

<p align="center">  <img  src="https://i.imgur.com/aGaqAD5.png">  </p>

Remember your upstream base branch should be main and source should be your feature branch. Click on create pull request and add a name to your pull request. You can also describe your feature.

Fantastic! You've already made your first contribution.🥳

# Contributors
Thanks goes to these wonderful people who have contributed to the Tesla Club NITP website:

<a href = "https://github.com/SudhansuuRanjan/tesla-nitp-web/graphs/contributors">
  <img src = "https://contrib.rocks/image?repo=SudhansuuRanjan/tesla-nitp-web"/>
</a>

We appreciate all contributions, big or small! 
#### BE OPEN! BE FREE! 🚀🚀
#### Happy Coding 👩‍💻👩‍💻