# BMCC Programming Club Website

Welcome to the repository containing the BMCC (Borough of Manhattan Community College) Programming Club's website. This project is open source, and anyone (from BMCC or otherwise) is welcome to contribute! For a list of current goals, feel free to look at the issues, and consider joining our Github Organization (Club Members/Alumni only). Before contributing, please read and follow the steps outlined in the contribution section.



## Contributing

If you are interested in contributing, that is great! 

Here you'll find out how you can contribute to this project, including the steps for making contributions and some resources to study if you're unfamiliar with this process or some of the terminology.  You can go [here](# More-Resources) to find explanations for why we'd like you to follow each step when making contributions.



### How to Contribute

1. Before working on anything, look to see if there is an open [issue](https://github.com/Program-BMCC/club-website/issues), if there not, you may open one yourself.
2. Fork this repo and make a branch titled after the feature you're working on, e.g. "recolor-navbar".
3. Update your fork and submit a pull request, tagging contributors i.e. @iamalmir and/or myself @p5quared.
4. Await Review!

#### Contribution Notes

[1] Issues are a good place for us to discuss the feature being implemented, and how we think it should look/work. You can also look through them to figure out if people are already working on a particular feature. This will prevent two people from accidentally making the same thing, or you can reach out to someone already working on that feature and figure out how you could work together.

[2] Forking the project creates a copy of the repository under your Github ID, allowing you greater permissions when editing (making branches, pushing changes, etc). It is much easier for us to review smaller chunks of code, hence making a branch dedicated to one change. 

[3] Using `git fetch` only updates your local repository with your remote repository. If there have been changes to the main repository since you made your fork, they would not reach your repository automatically, and of course some of those changes could present conflicts with your code or vice versa. There are three ways to update ([read here](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork)):

* The easiest way is to go to your forked repository, and click "Sync Fork".

* If you have the Github CLI installed you can use the command `$ gh repo sync owner/cli-fork -b BRANCH_NAME`

* You can fetch the "upstream" repository and then merge it into your own local repo via:

  `$ git fetch upstream`

  `$ git checkout main`

  `$ git merge upstream/main`

[4] Something to note if you have not submitted pull requests before is that to 'edit' your pull request, all you need to do is:

1. Update your local branch.
2. Push to your remote branch.

Your changes should now be updated in the pull request.

### More Resources

Here are a few resources to learn the main ideas behind contributing. These are important concepts to understand because they are extremely relevant to professional development and when you are comfortable with them they will make development of your own programs much more organized. Don't be worried that it is confusing, most of the concepts will make a lot of sense when you read how they work and then use them yourself.

* Learning about git in general:
  * [Pro Git](https://git-scm.com/book/en/v2): This is a book that really covers just about everything. Don't feel the need to read through it, but it might be best to use it as a reference to look up things you don't know. 
* Consider downloading the [Github Desktop App](https://desktop.github.com/). If you're totally unfamiliar with the command line and the commands themselves, this is a useful tool to make the basics a little more beginner friendly. Make sure that you still study the concepts though so you understand what you're doing.
* [GitKraken](https://www.gitkraken.com/) is similar very powerful tool. I have no experience with it personally but the visualizer seems quite useful and it is free for students.
  * Also, see their [gitlens plugin](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) for VSCode.
* [Learn Git Branching](https://learngitbranching.js.org/) is a pretty cool site that walks you through git in an interactive and visual way.



### List of Contributors

* @iamalmir
* @p5quared

#### P.S.

Special thanks to @iamalmir for doing the bulk of project setup and work here!