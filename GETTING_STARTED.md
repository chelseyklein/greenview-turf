# Getting Started — Greenview Turf Website

> **Note:** These instructions are written for Mac. Windows instructions will be added later.

This guide will get you set up to make changes to the Greenview Turf website using VS Code and Claude (an AI assistant). You don't need to know how to code — Claude will handle the code, the terminal commands, and publishing for you. You just describe what you want changed in plain English.

---

## Step 1 — Create a GitHub account

GitHub is where the website files are stored. When you make changes and save them, GitHub automatically publishes the update to the live site.

1. Go to [github.com](https://github.com) and click **Sign up**
2. Choose a username, enter your email, and create a password
3. Verify your email address
4. Send your GitHub username to whoever manages the repository — they'll add you as a collaborator
5. You'll receive an email invitation — click **Accept invitation**

---

## Step 2 — Install VS Code

VS Code is a free code editor. It's where you'll open the website files and chat with Claude.

1. Go to [code.visualstudio.com](https://code.visualstudio.com)
2. Click **Download for Mac**
3. Open the downloaded `.zip` — it will extract `Visual Studio Code.app`
4. Drag `Visual Studio Code.app` into your **Applications** folder
5. Open VS Code from Applications (right-click → Open the first time if macOS warns you)

---

## Step 3 — Install Claude Code

Claude Code is an AI assistant that lives inside VS Code. Once it's running, it can handle everything else for you — including installing software and downloading the website files.

1. Open VS Code
2. Click the **Extensions** icon in the left sidebar (four squares)
3. Search for **Claude Code**
4. Click **Install** on the extension published by Anthropic
5. Click the Claude icon that appears in the left sidebar
6. Sign in with your Anthropic account (or create one free at [claude.ai](https://claude.ai))

---

## Step 4 — Let Claude finish the setup

Once Claude Code is running, paste the following message into the chat and press Enter. Claude will take it from there.

```
I'm setting up to work on the Greenview Turf website for the first time on a Mac.
Please do the following:
1. Check if Git is installed. If not, install it.
2. Check if Node.js is installed. If not, install it using Homebrew (install Homebrew first if needed).
3. Clone the repository at https://github.com/chelseyklein/greenview-turf into my Documents folder.
4. Open that folder in VS Code.
Let me know when each step is done and if you need anything from me.
```

Claude will walk you through anything that requires your input (like entering your Mac password for installs or authenticating with GitHub).

---

## Step 5 — Make a change

Open the Claude Code chat panel and describe what you want to change in plain English. You can also use the slash commands below by typing `/` in the chat.

### Example prompts

```
Update the phone number in the contact section to 555-123-4567
```
```
Change the business hours to Monday through Friday, 7am to 4pm
```
```
Update the about section
```
```
Change the main headline
```
```
I added a photo called sod_field_aerial.jpg to the images folder. Add it to the gallery
```

### Slash commands (shortcuts)

Type `/` in the Claude Code chat to see available shortcuts:

| Command | What it does |
|---|---|
| `/update-contact` | Update phone number, address, or hours |
| `/update-about` | Update the About Us section |
| `/update-hero` | Update the main headline or tagline |
| `/add-photo` | Add a new photo to the gallery |
| `/deploy` | Commit and push your changes, then get a link to open a pull request |

---

## Step 6 — Publish your changes

When you're done making changes, type `/deploy` in the Claude chat. Claude will commit your changes, push them to GitHub, and give you a link to open a pull request.

Click the link, review what changed, and click **Create pull request**. Once the pull request is merged into main, the live site at greenview-turf.com will update within a minute or two.

---

## Troubleshooting

**"I don't have permission to push"**
You may not have been added as a collaborator yet, or you haven't accepted the GitHub invitation. Check your email for an invite from GitHub.

**The live site didn't update after pushing**
GitHub Pages can take 1–2 minutes to rebuild. Hard-refresh your browser (`Cmd + Shift + R`) after waiting a moment.

**Claude made a change I don't want**
Tell Claude: `Undo that change and put it back the way it was.` You can also press `Cmd + Z` in VS Code to undo manually.

**I'm not sure if my change worked**
Ask Claude: `What does the contact section currently say?` Claude can read the file and confirm what's there.
