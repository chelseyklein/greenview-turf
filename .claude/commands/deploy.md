Commit and push all current changes to GitHub and open a pull request for review.

Steps:
1. Run `git status` to check what files have changed. If there are no changes, let the user know everything is already up to date and stop.
2. Check the current branch with `git branch --show-current`. If on `main`, warn the user that changes should be made on a feature branch, not directly on main. Ask if they'd like to create one now before continuing.
3. Ask the user to describe what they changed in a sentence — this becomes the commit message.
4. Stage all changed files with `git add .`
5. Commit with the message the user provided.
6. Push the feature branch with `git push -u origin [branch-name]`
7. Get the remote URL with `git remote get-url origin` and derive the GitHub repo path from it.
8. Construct the pull request URL: `https://github.com/[owner]/[repo]/compare/[branch-name]?expand=1`
9. Tell the user their changes have been pushed and give them the PR link. Explain that clicking it will open GitHub where they can review the changes and click "Create pull request" to submit it for publishing.

If the push fails due to authentication, guide the user: they may need to accept a GitHub collaborator invitation, or set up a personal access token at GitHub → Settings → Developer settings → Personal access tokens.
