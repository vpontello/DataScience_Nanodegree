---
jupyter:
  jupytext:
    formats: ipynb,md
    text_representation:
      extension: .md
      format_name: markdown
      format_version: '1.3'
      jupytext_version: 1.13.7
  kernelspec:
    display_name: Python 3 (ipykernel)
    language: python
    name: python3
---

# Udacity Git and GitHub course

<!-- #region -->
## Cloning The Blog Repository
The command is `git clone` and then you pass the path to the Git repository that you want to clone. The project that we'll be using throughout this course is located at this URL:`https://github.com/udacity/course-git-blog-project`. <br />    
After that is just tipping in the following command to clone the GitHub repository into the folder named `folder_name`. Otherwise it will create a folder named after the repository name.
```bash
git clone <URL from repository> folder_name
```
After that all the files and folders of the original repository should be cloned in the new local folder. To check that, you should go into the new folder and list the files and folders inside it like:
```bash
cd folder_name
ls
```
Now we are cloning two repositories, the first one should be like the one from udacity and the second one we are going to add a new file. To do that we are running the following commands:
1. To clone the first repository and save it into the folder `udacity_git_course`:
```bash
git clone https://github.com/udacity/course-git-blog-project udacity_git_course
```
2. To clone the second one and save it into the folder `new_git_course`:
```bash
git clone https://github.com/udacity/course-git-blog-project new_git_course
```
3. Than we are creating a simple file inside the folder using the `nano` interface, with the following steps:
```bash
nano 
```
On that point we are writing `new file` and typing `Write Out` through `Ctrl+O` and saving the file as `new_file.txt`
<!-- #endregion -->

<!-- #region -->
## Determining the repo's status
The `git status` is our key to the mind of Git. It will tell us what Git is thinking and the state of our repository as Git sees it. When you're first starting out, you should be using the `git status` command all of the time!  <br\>
If the branch which you are working at the time is up to date with the master, the following status should appear as output from the `git status command`:
```bash
On branch master
Your branch is up-to-date with 'origin/master'.
nothing to commit, working directory clean
```
The output tells us two things:

1.  `On branch master` – this tells us that Git is on the `master` branch. You've got a description of a branch on your terms sheet so this is the "master" branch (which is the default branch). We'll be looking more at branches in lesson 5
2. `Your branch is up-to-date with 'origin/master'`. – Because `git clone` was used to copy this repository from another computer, this is telling us if our project is in sync with the one we copied from. We won't be dealing with the project on the other computer, so this line can be ignored.
3. `nothing to commit, working directory clean` – this is saying that there are no pending changes.

To check the status of the other cloned repositry with the new file `new_file.txt`, we are changing the repos and using `git status` to check the status of that repo as well:
```bash
cd ..
cd new_git_course/
git status
```
the following out put should be:
```bash
Your branch is up to date with 'origin/master'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        new_file.txt

nothing added to commit but untracked files present (use "git add" to track)
```
To check the logs of all the commits which were done in the project you can run `git log`
<!-- #endregion -->

<!-- #region -->
## Review a Repo's History
### Displaying A Repository's Commits
The first thing you should allways do when entering to a repository is to run `git status` to check the status of the project.  <br/>
Just by looking to the code we can't tell when the changes were made and also who did them. Therefore we can use a powerful git command called `git log`. When we run this command, we can see the name of the person who did the commit, the date whet it was made and also the message describing the commit which was done.<br/>
By using the `git log` command we get the list of all commits, but just the last commits are displayed. If you want to "scroll" through the list, you can press the `down arrow` or the `up arrow` and to get out of it, just press `Q`. <br/>
Following, we have an example of the output of `git log`:
```bash
commit d638b69ea14ebea48a24abc76ef01a64e892104b
Author: Richard Kalehoff <richardkalehoff@gmail.com>
Date:   Fri Dec 2 16:58:27 2016 -0500

    Add article images
```
Here we have the `commit SHA`, the `author and e-mail`, following by the `date` and the `message that describes the commit` <br/>
### Changing How Git Log Displays Information
In order to make it easier to visualize the commits, you can use the flag `--oneline` after the command `git log`. In that way, just the first seven characters of the commit's `SHA` are displayed, together with the commit's message.
```bash
git log --oneline
```
The output should look like that:
```bash
00dca03 Fix the JIRA ticket title
566ab7f Update manual.yml
57e6291 Update manual.yml
7279ecb Update .gitignore
488e6c8 Create manual.yml
06e9739 Update README.md
a3dc99a Center content on page
6f04ddd Add breakpoint for large-sized screens
```
**TIP** - Make sure you write the `--oneline` correctly and not `--online`, otherwise you will receive an error message similar to this one:

```bash
git log --online
fatal: unrecognized argument: --online
```
### Viewing Modified Files
By using the `git log --oneline` command there is no way to be sure about the date and who made the commit, and also which file was changed. Therefore there is another command that works better, the `git log --stat`.
`git log --stat command` lists the files that were changed as well as the number of added/removed lines, like:
```bash
git log --stat
commit 00dca03d2a75640851b7ed37de64d0e5bdb4054e
Author: SudKul <48475411+SudKul@users.noreply.github.com>
Date:   Mon Aug 2 10:38:51 2021 +0530

    Fix the JIRA ticket title

 .github/workflows/manual.yml | 2 +-
 1 file changed, 1 insertion(+), 1 deletion(-)

```
### Viewing File Changes
With the command `git log --stat` we can see which files were changed and the number of lines added/deleted, but we cannot see which changes were made. Therefore you can run the command `git log -p`. It shows the files which were modified and alse which lines were changed. The output should be somenthing like:
```bash
git log -p

commit 566ab7ff29a2b996adbfabc61bb4fae1a73c828e
Author: SudKul <48475411+SudKul@users.noreply.github.com>
Date:   Thu Jul 29 20:42:09 2021 +0530

    Update manual.yml

diff --git a/.github/workflows/manual.yml b/.github/workflows/manual.yml
index 7fbd1b9..e195b59 100644
--- a/.github/workflows/manual.yml
+++ b/.github/workflows/manual.yml
@@ -40,7 +40,7 @@ jobs:
            PR title: ${{ github.event.pull_request.title }}
            PR description: ${{ github.event.pull_request.description }}
            In addition, please resolve other issues, if any.
-        fields: '{"components": [{"name":"Github PR"}], "customfield_16449":"https://classroom.udacity.com/nanodegrees/nd000/parts/e36917bf-8075-4d97-8045-f610b37f041f", "customfield_16450":"Resolve the PR", "labels": ["github"]}'
+        fields: '{"components": [{"name":"nd104 - Programming for Data Science"}], "customfield_16449":"https://classroom.udacity.com/nanodegrees/nd000/parts/e36917bf-8075-4d97-8045-f610b37f041f", "customfield_16450":"Resolve the PR", "labels": ["github"], "priority":{"id": "4"}}'

     - name: Log created issue
       run: echo "Issue {{ steps.create.outputs.issue }} was created"

```
Something to keep in mind. Git tracks changes in code by lines, that means that if one line was changed, it will delete that one and write again the new line instead.<br/>
**Annotated git log -p Output** <br/>
Using the image above, let's do a quick recap of the git log -p output:

1. 🔵 - the file that is being displayed
2. 🔶 - the hash of the first version of the file and the hash of the second version of the file not usually important, so it's safe to ignore
3. ❤️ - the old version and current version of the file
4. 🔍 - the lines where the file is added and how many lines there are:
* -15,83 indicates that the old version (represented by the -) started at line 15 and that the file had 83 lines
* +15,85 indicates that the current version (represented by the +) starts at line 15 and that there are now 85 lines...these 85 lines are shown in the patch below
5. ✏️ - the actual changes made in the commit:
* lines that are red and start with a minus (-) were in the original version of the file but have been removed by the commit
* lines that are green and start with a plus (+) are new lines that have been added in the commit

If you want to ignore the **whitespaces** you can add the `-w` flag to the command, just like: `git log -p -w` <br/>
It is also possible to combine the flags, like joining the `-p` with the `--stat` to display both information, like: `git log -p --stat` and the order of the flags doesn't matter.

### Viewing A Specific Commit
It is possible to give the first 7 chars of the SHA as argument when running `git log`, with or without its flags. Just to give an example, see the following code:
```bash
git log -p fdf5493


commit fdf549341ffc482820351294c9ece13525bf89ea
Author: Richard Kalehoff <richardkalehoff@gmail.com>
Date:   Fri Dec 2 13:35:50 2016 -0500

    Add sidebar content

diff --git a/index.html b/index.html
index 95b0772..b269b91 100644
--- a/index.html
+++ b/index.html
@@ -61,7 +61,17 @@
         </article>
     </main>

-    <aside></aside>
+    <aside>
+        <h2>About Me</h2>
+        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque ducimus delectus esse repellendus. Harum esse laudantium itaque, aut cum molestias magni voluptatum veritatis alias. Veniam, impedit fuga ab saepe repudiandae.</p>
+
+        <section>
+            <h3>Social Links</h3>
+            <a href="#">Twitter</a>
+            <a href="#">Google Plus</a>
+            <a href="#">Instagram</a>
+        </section>
+    </aside>

     <footer>
         Made with &hearts; by Richard @ Udacity

```
Another possible command to get the information about a commit is `git show`. Just like the former command `git log`, you can pass the SHA as argument to get the info of a defined commit. If the argument is not passed, the output is the last commit.<br/>
The output of the `git show` command is exactly the same as the `git log -p` command. So by default, git show displays:
* the commit
* the author
* the date
* the commit message
* the patch information

However, `git show` can be combined with most of the other flags we've looked at:

* `--stat` - to show the how many files were changed and the number of lines that were added/removed
* `-p` or `--patch` - this the default, but if `--stat` is used, the patch won't display, so pass `-p` to add it again
* `-w` - to ignore changes to whitespace
<!-- #endregion -->

<!-- #region -->
## Add Commits To a Repo
### Git add
If the repo is alreaddy running, you just have to `cd` into it.By doing so, the command line should look like:
```bash
DTI Digital@DCPVICTORPONTELLO MINGW64 ~/repos/new_git_course (master)
```
with the `master` branch highlighted in the command line.<br/>
When any change occurs in the repository the git versioning tracks it and highlites it. For knowing that the status is not up to date, we run `git status`. If there are one or more files which are different of the origin, the output should be like:
```bash
git status

On branch master
Your branch is up to date with 'origin/master'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   index.html

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        new_file.txt

no changes added to commit (use "git add" and/or "git commit -a")
```
On the former example, the files `index.html` and `new_file.txt` are the ones with the changes. This changes appear and in order to move the changes from the **working directory** to the **staging index** we use the command `git add`, as the figure shows:
![image.png](attachment:image.png)
If there are no errors, there is no output after running the command `git add`. Although, it is allways a good practice to check the status with `git status` after adding the changes to the **staging index**. in this case, just one file was added, which was the `index.html`, so that the output should be something like:
```bash
git add index.html
git status

On branch master
Your branch is up to date with 'origin/master'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   index.html

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        new_file.txt
```
But what happens if you add the _**wrong file**_? In this case the command to run and to remove the added file from the **staging index** is:
```bash
git rm --cached <file>
```
In our example the code and output should look like:
```bash
DTI Digital@DCPVICTORPONTELLO MINGW64 ~/repos/new_git_course (master)
$ git rm --cached index.html
rm 'index.html'

DTI Digital@DCPVICTORPONTELLO MINGW64 ~/repos/new_git_course (master)
$ git status
On branch master
Your branch is up to date with 'origin/master'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        deleted:    index.html

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        index.html
        new_file.txt
```
To add all the files with tracked changes, we can use the `.` or the `*` instead the name of the file. This works also for removing the added files, but in this case, all the files are going to be removed from the repo.
* Adding all the files to the **staging index**: `git add * ` or `git add .`
* Removing all files from the **staging index**: `git rm --cached * -r`
### Git commit
Just a quick remember note, you should always keep in mind to run a `git status` before running a `git commit` command. <br/>
If you run just `git commit` an editor will automatically open, in order for the commit message be written. You can bypass it just adding the commit message right away with the `-m` flag.
```bash
git commit -m "commit message"
```
Since the commit has been done, it is a good praxis to run again `git status`. If everything went fine, the output message should be like:
```bash
git status
On branch master
Your branch is ahead of 'origin/master' by 2 commits.
  (use "git push" to publish your local commits)
nothing to commit, working tree clean
```
Running `git commit` without running `git add` before will instead display the output of `git status` and "no changes added to commit". It did this because you did not use `git add` to move the files from the _Working Directory_ to the _Staging Index_.
#### What To Include In A Commit:
<br/>
* The goal is that **each commit has a single focus**. Each commit should record a single-unit change.
* Each commit should make a change to **just one aspect of the project**.
* A commit **shouldn't include unrelated changes** e.g.: changes to the sidebar and rewording content in the footer.
* If a commit were erased, it should only remove one thing.
> _That way, if it turns out that one change had a bug and you have to undo it, you don't have to undo the other change too._
#### Good Commit Messages

**Do** <br/>
* do keep the message **short** (less than 60-ish characters)
* do explain **what** the commit does (not how or why!)

**Do not**<br/>
* do not explain **why** the changes are made (more on this below)
* do not explain **how** the changes are made (that's what `git log -p` is for!)
* do not use the word **"and"**
    * if you have to use "and", your commit message is probably doing too many changes - break the changes into separate commits
    * _e.g. "make the background color pink and increase the size of the sidebar"_
    
**Tip:**<br/>
>The best way that I've found to come up with a commit message is to finish this phrase, _"This commit will..."_. However, you **just finish that phrase**, use that as your commit message.

#### Explain the Why

If you need to explain why a commit needs to be made, you can!

When you're writing the commit message, the **first line is the message itself**. After the message, leave a **blank line**, and then type out the body or explanation including details about why the commit is needed (e.g. URL links). <br/><br/>
An example of a complete commit message:

```
feat: Summarize changes in around 50 characters or less

More detailed explanatory text, if necessary. Wrap it to about 72
characters or so. In some contexts, the first line is treated as the
subject of the commit and the rest of the text as the body. The
blank line separating the summary from the body is critical (unless
you omit the body entirely); various tools like 'log', 'shortlog'
and 'rebase' can get confused if you run the two together.

Explain the problem that this commit is solving. Focus on why you
are making this change as opposed to how (the code explains that).
Are there side effects or other unintuitive consequences of this
change? Here's the place to explain them.

Further paragraphs come after blank lines.`

 - Bullet points are okay, too

 - Typically a hyphen or asterisk is used for the bullet, preceded
   by a single space, with blank lines in between, but conventions
   vary here

If you use an issue tracker, put references to them at the bottom,
like this:

Resolves: #123
See also: #456, #789
```
> More on that subject through [this link](https://udacity.github.io/git-styleguide/).

### Git Diff

The `git diff` command can be used to see changes that have been made but haven't been committed, yet.
It's the same output that we say with `git log -p`. Actually `git log -p` uses `git diff` under the hood.<br/><br/>
To recap, the `git diff` command is used to see changes that have been made but haven't been committed, yet:
```bash
git diff
```
This command displays:
* the files that have been modified
* the location of the lines that have been added/removed
* the actual changes that have been made

### Having Git Ignore Files

If you want to keep a file in your project's directory structure but make sure it isn't accidentally committed to the project, you can use the specially named file, `.gitignore`(note the dot at the front, it's important!). Add this file to your project in the same directory that the hidden `.git` directory is located.<br/><br/>
All you have to do is list the _names_ of files that you want Git to ignore (not track) in the `.gitignore` file and it will ignore them.<br/><br/>
When you add a file to `.gitignore` and run `git status`, the `.gitignore` file will be shown as changed, therefore we perform the same steps to commit it to the project.<br/><br/>
#### Globing
Globbing lets you use special characters to match patterns/characters. In the .gitignore file, you can use the following:

blank lines can be used for spacing
* **\#** - marks line as a comment
* **\*** - matches 0 or more characters
* **?** - matches 1 character
* **[abc]** - matches a, b, _or_ c
* **\*\*** - matches nested directories - a/\*\*/z matches
    * a/z
    * a/b/z
    * a/b/c/z

So if you have 50 JPEG images in the "samples" folder but don't want them to be added to the project, we could add the following line to `.gitignore` to have Git ignore all 50 images.

```bash
samples/*.jpg
```
**Usefull links on that matter:**
* [Ignoring files from the Git Book](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository#Ignoring-Files)
* [gitignore from the Git Docs](https://git-scm.com/docs/gitignore#_pattern_format)
* [Ignoring files from the GitHub Docs](https://help.github.com/articles/ignoring-files/)
* [gitignore.io](https://www.gitignore.io/)


<!-- #endregion -->

<!-- #region -->
## Tagging, Branching and Merging
### Tagging
The command we'll be using to interact with the repository's tags is the git tag command: 
```bash
git tag -a v1.0
```
**CAREFUL:** In the command above (`git tag -a v1.0`) the `-a` flag is used. This flag tells Git to create an *annotated flag*. If you don't provide the flag (i.e. `git tag v1.0`) then it'll create what's called a *lightweight tag*.<br/><br/>
Annotated tags are recommended because they include a lot of extra information such as:
* the person who made the tag
* the date the tag was made
* a message for the tag
> Because of this, you should **always use annotated tags**.

#### Verify Tag

After saving and quitting the editor, nothing is displayed on the command line. Therefore, to display all the tags that are in the repository, just run `git tag`.<br/><br/>

The `git log` with the flag `--decorate` shows the information about the branch and the tags. It is important to say that on the actual versions of Git the `--decorate` flag runs automatically. On the following example, the output of `git log` shows
the last commit as the one ahead of the *master branch* and the second one with the information about which commit is related to the added tag `v1.0`.
```bash
git log

commit 6bb69433eb6d40bb2363b6af4b510e1b7919636b (HEAD -> master)
Author: Victor Pontello <vpontello@outlook.com>
Date:   Wed Mar 23 07:38:45 2022 -0300

    ignore all the *.png files

    just to test the tag recording with git log

commit d0e9b408997570800f516088dba69d564bbfca3d (tag: v1.0)
Author: Victor Pontello <vpontello@outlook.com>
Date:   Wed Mar 23 07:17:20 2022 -0300

    ignore the git_ignore.docx file
```
We can also run `git log --oneline` to check the information above in a summarized list as we are used to.
#### Deleting A Tag

By misspelling the tag name or any issue that leads to the will of deleting it, we can run the command `git tag -d <tag-to-be-deleted>`. The `-d` and also the `--delete` flag stays for *delete*. Following the example, if we want to delete the `v1.0` tag, we run:
```bash
git tag -d v1.0

Deleted tag 'v1.0' (was 7968a1f)
```
#### Adding A Tag To A Past Commit
Running `git tag -a v1.0` will tag the most recent commit. But what if you wanted to tag a commit that occurred farther back in the repo's history?
> All you have to do is provide the *SHA* of the commit you want to tag!

Using the following git log --oneline information, what command would you run to give the commit with the message "style page header" a tag of beta?
```bash
2a9e9f3 add breakpoint for large-sized screens
137a0bd add breakpoint for medium-sized screens
c5ee895 add space around page edge
b552fa5 style page header
f8c87c7 convert social links from text to images

git tag -a beta b552fa5
```
**Usefull links on that matter:**
* [Git Basics - Tagging from the Git Book](https://git-scm.com/book/en/v2/Git-Basics-Tagging)
* [Git Tag from the Git Docs](https://git-scm.com/docs/git-tag)

### Branching
![image-2.png](attachment:image-2.png)

#### The `git branch` command
The `git branch` command is used to interact with Git's branches. It can be used to:
* list all branch names in the repository
* create new branches
* delete branches

If we type out just `git branch` it will list out the branches in a repository:
```bash
DTI Digital@DCPVICTORPONTELLO MINGW64 ~/repos/new_git_course (master)
git branch

* master
```
#### Create A Branch
To create a branch, all you have to do is use git branch and provide it the name of the branch you want it to create. So if you want a branch called "sidebar", you'd run this command:
```bash
git branch <branch-name>
```
E.g.: If we want to create a branch to the repository which is called *sidebar*, we run the command `git checkout sidebar`. After that we can check the available branches in the repository by running `git branch`. This gives the following output: 
```bash
DTI Digital@DCPVICTORPONTELLO MINGW64 ~/repos/new_git_course (master)
git branch

* master
  sidebar
```
>This command just creates a new branch, as the \* before *master* indicates. After running it we do not automatically switch to the new branch.

> The new branch is based on the actual branch, that means that the new fork between the branches starts at the point where the new branch is created (in this case the new branch is a sort of "copy" of the master branch)

To crate a new branch pointed to some specific former commit, we just have to add the SHA after the command as follows:
```bash
git branch <branch-name> <SHA>
```
#### The `git checkout` Command
The `git checkout` command is used to switch between branches. Therefore, to switch to the *sidebar* branch we run the command: 
```bash
git checkout sidebar
```
It's important to understand how this command works. Running this command will:
* remove all files and directories from the Working Directory that Git is tracking (files that Git tracks are stored in the repository, so nothing is lost)
* go into the repository and pull out all of the files and directories of the commit that the branch points to

Following the example, if we want to switch to the *sidebar* branch, we run the command and get the following output:

```bash
DTI Digital@DCPVICTORPONTELLO MINGW64 ~/repos/new_git_course (master)
git checkout sidebar
Switched to branch 'sidebar'

DTI Digital@DCPVICTORPONTELLO MINGW64 ~/repos/new_git_course (sidebar)
git branch
  master
* sidebar
```
> So this will remove all of the files that are referenced by commits in the *master* branch. It will replace them with the files that are referenced by the commits in the *sidebar* branch.,
#### Branches In The Log
The best way to understand what is going on with the branches is to run the `git log` command, as follows:
```bash
DTI Digital@DCPVICTORPONTELLO MINGW64 ~/repos/new_git_course (sidebar)
git log --oneline
6bb6943 (HEAD -> sidebar, master) ignore all the *.png files
```
This shows:
1. that we are currently working on the *sidebar* branch through:
    1. (sidebar) after the actual path
    1. (pointer "**HEAD ->**" pointing to the sidebar)
    
2. we can see the last commit and that both the master and the sidebar branches are at the same commit.

#### Delete A Branch
If you want to delete a branch, either because you have already merged it to the master or because any other reason, the `-d` or `--delete` flag should be added to the command, like:
```bash
git branch -d sidebar
```
Just a quick note: if the branch is not fully merged, we have to use the flag `-D` to delete it. That's to prevent any mistake of deleting the branch accidentally.<br/><br/>
Another quick note, we cannot delete the branch where we are currently on, first we need to checkout to another branch to be able to delete it.

#### `git branch` recap

```bash
# to list all branches
git branch

# to create a new "footer-fix" branch
git branch footer-fix

# to delete the "footer-fix" branch
git branch -d footer-fix
```
`git branch` command is used to:
* list out local branches
* create new branches
* remove branches

**Usefull links on that matter:**
* [Git Branching - Basic Branching and Merging from the Git Docs](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging)
* [Learn Git Branching](http://learngitbranching.js.org/)
* [Git Branching Tutorial from the Atlassian Blog](https://www.atlassian.com/git/tutorials/using-branches)

### Switch and Create Branch In One Command
The way we currently work with branches is to create a branch with the `git branch` command and then switch to that newly created branch with the `git checkout` command. <br>

But did you know that the `git checkout` command can actually create a new branch, too? If you provide the `-b` flag, you can create a branch and switch to it all in one command. <br>

That can be done by running:

```bash
git checkout -b <new-branch-name>
```
In case we are creating a new branch called *footer* from the master branch the command would be like:
```bash
git checkout -b footer master
```
### See All Branches At Once

We can't see other branches in the `git log` output unless we switch to a branch. To see all branches at once in the `git log` output by using `--graph` and `--all` flags, like:
```bash
git log --oneline --decorate --graph --all
```
<!-- #endregion -->

<!-- #region -->
### Merging
#### The Merge Command
The `git merge` command is used to combine Git branches with the following code:
```bash
git merge <name-of-branch-to-merge-in>
```
When a merge happens, Git will:
* look at the branches that it's going to merge
* look back along the branch's history to find a single commit that both branches have in their commit history
* combine the lines of code that were changed on the separate branches together
* makes a commit to record the merge

#### What are we doing when merging
>When we merge, we're merging some **other branch into the current (checked-out) branch**

>We're not merging two branches into a new branch. We're not merging the current branch into the other branch.
#### Fast-forward Merge
A Fast-forward merge will just *move the currently checked out branch forward* until it points to the same commit that the other branch (in this case, footer) is pointing to.<br>
Just to get that, let's follow the example below:
1. First of all we run the following command to understand the branch structure of the project:
![images/branch_structure.png](files/images/branch_structure.png)
We can see that the branch *branching exercise* is just after the branch *footer*. There is actually an update in the same lineage of commits
2. merge the *footer* branch by running `git merge footer`:
![merge_footer.png](files/images/merge_footer.png)
This shows that there are 14 insertions inside the branch `branching_exercise`
#### Perform A Regular Merge
>To merge in a divergent branch where two divergent branches are combined is actually no different!

In our example, To merge in the `sidebar` branch shown before with the `branching_exercise` branch, just be sure to be in the `branching_exercise branch` and run the command:
```bash
git merge sidebar
```
The output should be like:
![merge_sidebar.png](files/images/merge_sidebar.png)
<br>
If we check again the branch struture of the project, by running the following command we get:
```bash
git log --oneline --graph --all
```
![after_merging.png](files/images/after_merging.png)
<br/>
This shows that the last branches were merged into the `branching_exercise` branch, bringing all the changes to the same page.

#### Merge Recap
To recap, the `git merge` command is used to combine branches in Git:
```bash
git merge <other-branch>
```
_**There are two types of merges:**_
* Fast-forward merge – the branch being merged in must be ahead of the checked out branch. The checked out branch's pointer will just be moved forward to point to the same commit as the other branch.
* the regular type of merge
    * two divergent branches are combined
    * a merge commit is created
    
**Usefull links on that matter:**
* [Basic Merging from Git Book](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging#Basic-Merging)
* [git-merge from Git Docs](https://git-scm.com/docs/git-merge)
* [git merge from Atlassian blog](https://www.atlassian.com/git/tutorials/git-merge)

### Sometimes Merges Fail
Most of the time Git will be able to merge branches together without any problem. However, there are instances when a merge cannot be fully performed automatically. When a merge fails, it's called a **merge conflict**. <br>

If a merge conflict does occur, Git will try to combine as much as it can, but then it will leave special markers (e.g. **>>>** and **<<<**) that tell you where you needs to **manually** fix.

#### What Causes A Merge Conflict
>A merge conflict will happen when the exact same line(s) are changed in separate branches

As changes on the same line on both branches were done, there's no way Git will know which one you actually want to keep. Therefore we must **manually** choose.<br>
On those cases, the output after running the `git merge` should look like:
```bash
git merge heading-update 
Auto-merging index.html
CONFLICT (content): Merge conflict in index.html
Automatic merge failed; fix conflicts and then commit the result.
```
On this example we are merging the branch `heading-update` to the `master` branch.<br>

On the text editor (VS Code) we can see the following displayed:
![merge_conflict.PNG](files/images/merge_conflict.PNG)

#### Merge Conflict Indicators Explanation

The editor has the following merge conflict indicators:

* `<<<<<<< HEAD` everything below this line (until the next indicator) shows you what's on the current branch
* `|||||||` merged common ancestors everything below this line (until the next indicator) shows you what the original lines were
* `=======` is the end of the original lines, everything that follows (until the next indicator) is what's on the branch that's being merged in
* `>>>>>>> heading-update` is the ending indicator of what's on the branch that's being merged in (in this case, the `heading-update` branch)

#### Resolving A Merge Conflict

Git is using the merge conflict indicators to show you what lines caused the merge conflict on the two different branches as well as what the original line used to have. So to resolve a merge conflict, you need to:
* choose which line(s) to keep
* remove all lines with indicators

>Once you've removed all lines with merge conflict indicators and have selected what heading you want to use, just save the file, add it to the staging index, and commit it!

If a merge conflict occurs in a file and you edit the file, save it, stage it, and commit it but *forget to remove the merge __conflict indicators__,*  Git will commit the lines with the merge conflict indicators! Don't forget to use `git diff` to check what's going to be staged/committed!

#### Merge Conflict Recap
A merge conflict happens when the **same line** or lines have been changed on different branches that are being merged. Git will pause mid-merge telling you that there is a conflict and will tell you in what file or files the conflict occurred. To resolve the conflict in a file:
* locate and remove all lines with merge conflict indicators
* determine what to keep
* save the file(s)
* stage the file(s)
* make a commit

Be careful that a file might have *merge conflicts in multiple parts of the file*, so make sure you **check the entire file** for merge conflict indicators - a quick search for `<<<` should help you locate all of them.

**Usefull links on that matter:**
* [Basic Merge Conflicts from the Git book](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging#Basic-Merge-Conflicts)
* [How Conflicts Are Presented from the Git docs](https://git-scm.com/docs/git-merge)

<!-- #endregion -->

<!-- #region -->
## Undoing Changes
### Modifying The Last Commit
With the `--amend` flag, you can alter the most-recent commit. That is used through the following command:
```bash
git commit --amend
```
#### Add Forgotten Files To Commit
Alternatively, `git commit --amend` will let you include files (or changes to files) you might've forgotten to include.<br>
Imagining that a link was forgotten in the last commit and in this case we could create another commit to enhance the last one, or edit the last one by editing it. Let's say we opt by the last strategy, so that to do get the forgotten link included, just:
* edit the file(s)
* save the file(s)
* stage the file(s)
* run `git commit --amend`

After that the following output should appear:
![amend.PNG](files/images/amend.PNG)

### Reverting A Commit
When you tell Git to **revert** a specific commit, Git takes the changes that were made in commit and does the exact opposite of them.

#### The `git revert` Command
to revert a commit, just run the `git revert` command as follows:
```bash
git revert <SHA-of-commit-to-revert>
```
By running the command on the last commit, the text editor pops up for us to edit the commit message (the `git revert` command creates another commit).<br>
After that, the output should look like follows:
![git revert](files/images/revert.png)

This command:
* will undo the changes that were made by the provided commit
* creates a new commit to record the change

**Usefull links on that matter:**
* [git-revert from Git Docs](https://git-scm.com/docs/git-revert)
* [git revert Atlassian tutorial](https://www.atlassian.com/git/tutorials/undoing-changes)

### Resetting Commits

#### Reset vs Revert
Reverting creates a new commit that reverts or *undos* a previous commit. Resetting, on the other hand, *erases* commits!<br>

>⚠️ **Resetting Is Dangerous** ⚠️<br/>
You've got to be careful with Git's resetting capabilities. This is one of the few commands that lets you erase commits from the repository. If a commit is no longer in the repository, then its content is *gone*.
> Although Git does keep track of everything for about **30 days** before it completely erases anything. To access this content, you'll need to use the `git reflog` command. Check out these links for more info:
* [git-reflog](https://git-scm.com/docs/git-reflog)
* [Rewriting History](https://www.atlassian.com/git/tutorials/rewriting-history)
* [reflog, your safety net](http://gitready.com/intermediate/2009/02/09/reflog-your-safety-net.html)

#### Relative Commit References
We can reference commits by their *SHA*, by *tags*, *branches*, and the special `HEAD` pointer. But sometimes it isn't enough and we wand to refer the commit relativelly to another commit, like:
> For example, there will be times where you'll want to tell Git about the commit that's one before the current commit...or two before the current commit.

In that case:
* `^` – indicates the parent commit
* `~` – indicates the first parent commit

**Here's how we can refer to previous commits:**<br>
1. the parent commit – the following indicate the parent commit of the current commit
    * HEAD^
    * HEAD~
    * HEAD~1
2. the grandparent commit – the following indicate the grandparent commit of the current commit
    * HEAD^^
    * HEAD~2
3. the great-grandparent commit – the following indicate the great-grandparent commit of the current commit
    * HEAD^^^
    * HEAD~3
    
The main difference between the `^` and the `~` is when a commit is created from a merge. A merge commit has two parents. With a merge commit, the `^` reference is used to indicate the first parent of the commit while `^2` indicates the second parent. The first parent is the branch you were on when you ran `git merge` while the second parent is the branch that was merged in.<br>
**Example:**<br>
Given the image of the output of `git log --oneline --graph --all`, which commit would be the `HEAD~4^2`?:
![commits](files/images/commits.png)
##### Answer:
**f69811c**: `HEAD~4` references the fourth parent commit of the current one (`1a56a81`) and then the `^2` tells us that it's the second parent of the merge commit (`f69811c` the one that got merged in!).

#### The `git reset` Command
The `git reset` command is used to reset (erase) commits:
```bash
git reset <reference-to-commit>
```
It can be used to:
* move the HEAD and current branch pointer to the referenced commit
* erase commits
* move committed changes to the staging index
* unstage committed changes

#### Git Reset's Flags
The way that Git determines if it erases, stages previously committed changes, or unstages previously committed changes is by the flag that's used. The flags are:

* `--mixed` > files go to the *Working Directory* (default)
* `--soft` > files go to the *Staging Index*
* `--hard` > files go to the *Trash*

> 💡 Backup Branch 💡<br/> Remember that using the `git reset` command will erase commits from the current branch. So if you want to follow along with all the resetting stuff that's coming up, you'll need to create a branch on the current commit that you can use as a backup. `git branch backup`

#### Reset's `--mixed` Flag
Let's look at each one of these flags.
![mixed](files/images/reset_mixed.png)
Using the sample repo above with `HEAD` pointing to master on commit `9ec05ca`, running `git reset --mixed HEAD^` will take the changes made in commit `9ec05ca` and move them to the *Working directory*.

>💡 **Back To Normal** 💡
If you created the `backup` branch prior to resetting anything, then you can easily get back to having the `master` branch point to the same commit as the `backup` branch. You'll just need to:
1. remove the uncommitted changes from the working directory (if the default `--mixed` flag was used, through the `git restore` command.
2. merge backup into master (which will cause a Fast-forward merge and move master up to the same point as backup)

#### Reset's `--soft` Flag
Running `git reset --soft HEAD^` will take the changes made in commit `9ec05ca` and move them directly to the *Staging Index*.

#### Reset's `--hard` Flag
Running `git reset --hard HEAD^` will take the changes made in commit `9ec05ca` and _erases them_.

#### Reset Recap
To recap, the `git reset` command is used erase commits:

```bash
git reset <reference-to-commit>
```
It can be used to:
* move the `HEAD` and current branch pointer to the referenced commit
* *erase* commits with the `--hard` flag
* *moves* committed changes to the *staging index* with the `--soft` flag
* *unstages* committed changes `--mixed flag`

Typically, ancestry references are used to indicate previous commits. The ancestry references are:
* ^ – indicates the parent commit
* ~ – indicates the first parent commit

**Usefull links on that matter:**
* [git-reset from Git docs](https://git-scm.com/docs/git-reset)
* [Reset Demystified from Git Blog](https://git-scm.com/book/en/v2/Git-Tools-Reset-Demystified)
* [Ancestry References from Git Book](https://git-scm.com/book/en/v2/Git-Tools-Revision-Selection#Ancestry-References)
<!-- #endregion -->

<!-- #region -->
## Working with Remotes
### The Git Remote Command
The `git remote` command will let you manage and interact with remote repositories.
```bash
git remote
```
If you want to see the full path to the remote repository, then all you have to do is use the -v flag:
```bash
git remote -v

origin  https://github.com/vpontello/DataScience_Nanodegree.git (fetch)
origin  https://github.com/vpontello/DataScience_Nanodegree.git (push)  
```
To add the local repository to the remote one, we must rund the following command:
```bash
git remote add origin <project-url>
```
Just the owner of the original repo has the permissions to make changes on it. <br>
There are a couple of things to notice about the command you just ran on the command line:

1. first, this command has the sub command `add`
2. the word `origin` is used - this is setting the shortname that we discussed earlier
    * Remember that the word `origin` here isn't special in any way. It could be called something else, but it is convensioned that it stays like that.
3. third, the full path to the repository is added (i.e. the URL to the remote repository on the web)

>`git remote add` was used to create a shortname of `origin` that points to the project on GitHub. Running `git remote -v` displays both the shortname and the URL

#### Recap
A remote repository is a repository that's just like the one you're using but it's just stored at a different location. To manage a remote repository, use the `git remote` command:

```bash
git remote
```
* It's possible to have links to multiple different remote repositories.
* A shortname is the name that's used to refer to a remote repository's location. Typically the location is a URL, but it could be a file path on the same computer.
* `git remote add` is used to add a connection to a new remote repository.
* `git remote -v` is used to see the details about a connection to a remote.

#### Further Research
* [Working with Remotes from the Git book](https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes#_showing_your_remotes)
* [the git remote command from the Git docs](https://git-scm.com/docs/git-remote)

### Sending Commits through `git push`
To send local commits to a remote repository you need to use the `git push` command. You provide the remote short name and then you supply the name of the branch that contains the commits you want to push:
```bash
git push <remote-shortname> <branch>
```
My remote's shortname is `origin` and the commits that I want to push are on the `master` branch. So I'll use the following command to send my commits to the remote repository on GitHub:
```bash
git push origin master
```

> you can add the flag `-f` to force to push when the push is rejected. like e.g.:

```bash
git push -f origin master
```

#### Recap
The `git push` command is used to send commits from a local repository to a remote repository.
```bash
git push origin master
```
The `git push` command takes:
* the shortname of the remote repository you want to send commits to
* the name of the branch that has the commits you want to send

### Pull changes from a remote
`git push` will sync the remote repository with the local repository. To do the opposite (to sync the local with the remote), we need to use `git pull`. The format for `git pull` is very similar to `git push` - you provided the shortname for the remote repository and then the name of the branch you want to pull in the commits.
```bash
git pull origin master
```
Running `git pull origin master` will retrieve the commits from the `master` branch on the `origin` remote repository.<br>

If you don't want to automatically merge the local branch with the tracking branch then you wouldn't use `git pull` you would use a different command called `git fetch`. You might want to do this if there are commits on the repository that you don't have but there are also commits on the local repository that the remote one doesn't have either.

#### Recap
If there are changes in a remote repository that you'd like to include in your local repository, then you want to pull in those changes. To do that with Git, you'd use the `git pull` command. You tell Git the shortname of the remote you want to get the changes from and then the branch that has the changes you want:
```bash
git pull origin master
```

When `git pull` is run, the following things happen:
* the commit(s) on the remote branch are copied to the local repository
* the local tracking branch (`origin/master`) is moved to point to the most recent commit
* the local tracking branch (`origin/master`) is merged into the local branch (`master`)

Also, changes can be manually added on GitHub (but this is not recommended, so don't do it).

### Pull vs Fetch
`git fetch` is used to retrieve commits from a remote repository's branch but it does not automatically merge the local branch with the remote tracking branch after those commits have been received.<br>

You provide the exact same information to `git fetch` as you do for `git pull`. So you provide the shortname of the remote repository you want to fetch from and then the branch you want to fetch:
```bash
git fetch origin master
```
When `git fetch` is run, the following things happen:
* the commit(s) on the remote branch are copied to the local repository
* the local tracking branch (e.g. `origin/master`) is moved to point to the most recent commit

> You can think of `git fetch` as half of a `git pull`. The other half of `git pull` is the merging aspect.

> One main point when you want to use `git fetch` rather than `git pull` is if your remote branch and your local branch both have changes that neither of the other ones has

#### Recap
You can think of the `git pull` command as doing two things:

* fetching remote changes (which adds the commits to the local repository and moves the tracking branch to point to them)
* merging the local branch with the tracking branch

The `git fetch` command is just the first step. It just retrieves the commits and moves the tracking branch. It does not merge the local branch with the tracking branch. The same information provided to `git pull` is passed to `git fetch`:

* the shortname of the remote repository
* the branch with commits to retrieve

```bash
git fetch origin master
```
<!-- #endregion -->
<!-- #region -->
## Working on Another Developer's Repo
### Forking a Repository
In version control terminology if you "fork" a repository that means you *duplicate* it. Typically you fork a repository that belongs to someone else. So you make an *identical copy* of their repository and that duplicate copy now belongs to you.<br>

This concept of "forking" is also different from "cloning". *Cloning* happens on your **local machine**. Forking creates a new **remote repository**, but it now belongs to you

#### Why forking?
By cloning a repo you get the repo in you local machine, but you **are not** able to collaborate with the original repo. 

>Since you are not the owner of the repository, you cannot automatically add your changes to it.

>Instead of modifying the original repository directly, if you fork the repository to your own account then you will have full control over that repository.

#### Recap
Forking is an action that's done on a hosting service, like GitHub. Forking a repository creates an identical copy of the original repository and moves this copy to your account. You have total control over this forked repository. Modifying your forked repository does not alter the original repository in any way.

### Reviewing Existing Work
#### Group By Commit Author
A quick way that we can see how many commits each contributor has added to the repository is to use the `git shortlog` command.
```bash
# command
git shortlog

# output
Franklin Gray (1):
      changed travel destinations

Lam Anai (4):
      Initial commit
      Add starting destinations
      Style destinations
      Add animation to destination headings

Victor Pontello (5):
      add belo horizonte
      add belo horizonte
      resolve belo horizonte merge
      sao-paulo
      add paris

eve——o_0 (1):
      Update index.html

torilundfunkhouser (1):
      changed to Sao Paolo
```
If we just want to see just the number of commits that each developer has made, we can add a couple of flags: `-s` to show just the number of commits (rather than each commit's message) and `-n` to sort them numerically (rather than alphabetically by author name).
```bash
# command
git shortlog -s -n

#output
     5  Victor Pontello
     4  Lam Anai
     1  Franklin Gray
     1  eve——o_0
     1  torilundfunkhouser

```
#### Filter By Author
Another way that we can display all of the commits by an author is to use the regular `git log` command but include the `--author` flag to filter the commits to the provided author.
```bash
# command
git log --author=Victor

# output
Author: Victor Pontello <vpontello@outlook.com>
Date:   Mon Mar 28 18:23:31 2022 -0300

    add paris

commit 68ec24599f1a56743253582a9d9414b2249d3c01
Author: Victor Pontello <vpontello@outlook.com>
Date:   Mon Mar 28 18:22:53 2022 -0300

    sao-paulo

commit c796cf19ab6c0078c40b158a3a62e94a8b996230
Merge: a85a7d1 1856fb8
Author: Victor Pontello <vpontello@outlook.com>
Date:   Mon Mar 28 18:17:43 2022 -0300

    resolve belo horizonte merge

commit 1856fb811ed0af6d90eae7a5b60526c8d06e58b4
Author: Victor Pontello <vpontello@outlook.com>
Date:   Mon Mar 28 18:09:53 2022 -0300

    add belo horizonte
```
The output displays only the commits that Victor Pontello made.

#### Filter Commits By Search
To gather the information abou a specific commit given the SHA of it:
```bash
git show 5966b66
```
To search through the commits' messagens and find the commits which messages' are related to a specific word, (to google the commits' messages):
```bash
git log --grep <key-word>
```
Example: to filter down to just the commits that reference the word "bug"
```bash 
git log --grep bug
```
#### Recap
The `git log` command is extremely powerful, and you can use it to discover a lot about a repository. But it can be especially helpful to discover information about a repository that you're collaborating on with others. You can use `git log` to:

* group commits by author with git shortlog
    ```bash
    git shortlog
    ```
* filter commits with the --author flag
    ```bash
    git log --author="Richard Kalehoff"
    ```
* filter commits using the --grep flag
    ```bash
    git log --grep="border radius issue in Safari"
    ```
    
### Determining What To Work On
How to collaborate with existing projects?

#### CONTRIBUTING.md File

this file lists out the information you should follow to contribute to the project.<br>
There are two main sections to this file:
* the "For Contributors" section
* the "For Maintainers" section

>you should always look at the CONTRIBUTING.md file when you want to contribute to a project.

In a CONTRIBUTING.md file it explains how your code should be formatted and the steps you should go about to contribute.<br>

> To know **what** you should contribute, you should talk to the project maintainers directly

Now, **"issues"** doesn't mean that there's actually a bug, it can just be any change that needs to be made to the project. GitHub's issue tractor is quite sophisticated. Each issue can:
* have a label or multiple labels applied to it
* can be assigned to an individual
* can be assigned a milestone (for example the issue will be resolved by the next major release)

#### New Issue Page
if the project has a `CONTRIBUTING.md` file, it will display a notification at the top of the page recommending that you check out the guidelines on how to contribute to the project.<br>

Once the project maintainer has given you the go-ahead it's time to start working on the changes you want to contribute back to the project.

#### Topic Branches
The best way to organize the set of commits/changes you want to contribute back to the project is to put them all on a **topic branch**.

#### Best Practices
* Write Descriptive Commit Messages. The less work the maintainer has to do, the faster they'll include your changes into the project.
* Create Small, Focused Commits. You want to make smaller, more frequent commits that record just a handful of file changes with a smaller number of line changes.
* Update The README if any of the code changes that you're adding drastically changes the project

#### Recap
Before you start doing any work, make sure to look for the project's CONTRIBUTING.md file.<br>
Next, it's a good idea to look at the GitHub issues for the project
* look at the existing issues to see if one is similar to the change you want to contribute
* if necessary create a new issue
* communicate the changes you'd like to make to the project maintainer in the issue

When you start developing, commit all of your work on a topic branch:
* do not work on the master branch
* make sure to give the topic branch clear, descriptive name

As a general best practice for writing commits:
* make frequent, smaller commits
* use clear and descriptive commit messages
* update the README file, if necessary



<!-- #endregion -->

<!-- #region -->
## Staying in Sync with a Remote Repository

### Create a Pull Request
A pull request is a request to the original or source repository's maintainer to include changes in their project that you made in your fork of their project.
> A **Pull request** is a request to pull in changes you've made.

#### Recap
A pull request is a request for the source repository to pull in your commits and merge them with their project. To create a pull request, a couple of things need to happen:

* you must fork the source repository
* clone your fork down to your machine
* make some commits (ideally on a topic branch!)
* push the commits back to your fork
* create a new pull request and choose the branch that has your new commits

### Stay in sync with source project

#### Stars
Starring is helpful if you want to keep track of certain repositories, but you have to manually go to the stars page to view the repositories and see if they've changed.
> Starring can be a useful feature to help you keep track of repositories you're interested in. But stars have also turned into a means of measuring a repo's popularity.

#### Watching A Repository
If you need to keep up with a project's changes and want to be notified of when things change or if you're working on a repository quite often, then I'd suggest setting the watch setting to "Watching".<br>
This way GitHub will notify you whenever anything happens with the repository like people pushing changes to the repository, new issues being created, or comments being added to existing issues.

#### Including Upstream Changes
If you want to keep doing development on your fork then you'd need your fork to stay in sync with the source repository as much as possible.<br>

> `upstream` is the equivalent of the `origin` for the original repository, not the forked one.

We can add it to the local repository using `git remote` just like we have done with the `origin`.

```bash
git remote add upstream <upstream-url>
```
to check the remote repos,
```bash
# command
git remote -v

# output
origin  https://github.com/vpontello/course-collaboration-travel-plans (fetch)
origin  https://github.com/vpontello/course-collaboration-travel-plans (push) 
upstream        https://github.com/udacity/course-collaboration-travel-plans.git (fetch)
upstream        https://github.com/udacity/course-collaboration-travel-plans.git (push)
```
#### Origin vs Upstream Clarification

> `origin` -> forked repo

> `upstream` -> original repo

These are the default names for the repos, but we can rename them if we want.
Therefore there is the `git remote rename` command. <br>

For example, if we want to rename the `origin` to `mine` and the `upstream` to `source-repo`, we should run the following commands:
```bash
git remote rename mine origin
git remote rename source-repo upstream
```

#### Retrieving Upstream Changes
Now to get the changes from *upstream* remote repository, all we have to do is run a `git fetch` and use the `upstream` shortname rather than the `origin` shortname:
```bash
git fetch upstream master
```
Quick note: 
> `git fetch` only updates the local repository. To update the project on GitHub, we'd need to push these newly acquired commits to our fork.

> Another way of doing it is by running `git pull`, which is the same thing as a `git fetch` + `git merge`
```bash
# to make sure I'm on the correct branch for merging
git checkout master

# merge in Lam's changes
git merge upstream/master

# send Lam's changes to *my* remote
git push origin master
```
#### Recap
When working with a project that you've forked. The original project's maintainer will continue adding changes to their project. You'll want to keep your fork of their project in sync with theirs so that you can include any changes they make.<br>

To get commits from a source repository into your forked repository on GitHub you need to:

* get the cloneable URL of the source repository
* create a new remote with the `git remote add` command
    * use the shortname `upstream` to point to the source repository
    * provide the URL of the source repository
* fetch the new `upstream` remote
* merge the `upstream`'s branch into a local branch
* push the newly updated local branch to your `origin` repo

### Manage an active PR
The project maintainer may decide not to accept your changes right away. They might request you to make some additional changes to your code before accepting your request and merging in your changes.<br>
As simple as at may seem, working on an active pull request is mostly about communication!<br>

If the project's maintainer is requesting changes to the pull request, then:

* make any necessary commits on the same branch in your local repository that your pull request is based on
* push the branch to the your fork of the source repository

The commits will then show up on the pull request page.

### Squash Commits
To squash commits together, we're going to use the extremely powerful `git rebase` command.<br>
**quick tip**:
> If you want to squash `n` commits, just use `HEAD~n`to rebase the commits.

that sad, to squash 3 commits before the `HEAD` pointer, just run:
```bash
git rebase -i HEAD~3
```
#### The Rebase Command
The `git rebase` command will move commits to have a new base. In the command `git rebase -i HEAD~3`, we're telling Git to use `HEAD~3` as the base where all of the other commits (`HEAD~2`, `HEAD~1`, and `HEAD`) will connect to.

The `-i` in the command stands for "*interactive*". You can perform a rebase in a non-interactive mode. While you're learning how to rebase, though, I definitely recommend that you do interactive rebasing.

> sometimes it can be a little tricky to push the rebased repo to the origin. In this case the push worked just fine with the flag `-f`, to force the push.

```bash
DTI Digital@DPCVICTORPONTELLO MINGW64 ~/repos/course-collaboration-travel-plans (master)
$ git push origin master
To https://github.com/vpontello/course-collaboration-travel-plans
 ! [rejected]        master -> master (non-fast-forward)
error: failed to push some refs to 'https://github.com/vpontello/course-collaboration-travel-plans'
hint: Updates were rejected because the tip of your current branch is behind  
hint: its remote counterpart. Integrate the remote changes (e.g.
hint: 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.    

DTI Digital@DPCVICTORPONTELLO MINGW64 ~/repos/course-collaboration-travel-plans (master)
$ git push -f origin master
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 8 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 416 bytes | 416.00 KiB/s, done.
Total 3 (delta 2), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To https://github.com/vpontello/course-collaboration-travel-plans
 + da036b5...608fcc6 master -> master (forced update)
```

To reference a new base for the `git rebase` command we can use:
* ~ and ^
* a SHA
* a branch name
* a tag name

>⚠️ Force Pushing ⚠️<br>
> In this instance, force pushing my commits was necessary. But if you try to push commits and GitHub rejects them, it's trying to help you, so make sure to review what commits you're pushing and the commits that are on GitHub to verify you're not about to overwrite content on your remote repository accidentally!

#### Rebase Commands
Let's take another look at the different commands that you can do with `git rebase`:

* use `p` or `pick` – to keep the commit as is
* use `r` or `reword` – to keep the commit's content but alter the commit message
* use `e` or `edit` – to keep the commit's content but stop before committing so that you can:
    * add new content or files
    * remove content or files
    * alter the content that was going to be committed
* use `s` or `squash` – to combine this commit's changes into the previous commit (the commit above it in the list)
* use `f` or `fixup` – to combine this commit's change into the previous one but drop the commit message
* use `x` or `exec` – to run a shell command
* use `d` or `drop` – to delete the commit

#### When to rebase

You should not rebase if you have already pushed the commits you want to rebase. If you're collaborating with other developers, then they might already be working with the commits you've pushed.

#### Recap
The git rebase command is used to do a great many things.
I recommend that you create a backup branch before rebasing, so that it's easy to return to your previous state. If you're happy with the rebase, then you can just delete the backup branch!

#### Further Research
[Git Branching - Rebasing from the Git Book](https://git-scm.com/book/en/v2/Git-Branching-Rebasing)
[git-rebase from the Git Docs](https://git-scm.com/docs/git-rebase)
[git-rebase from the Atlassian blog](https://www.atlassian.com/git/tutorials/rewriting-history#git-rebase from the Atlassian blog)
<!-- #endregion -->

```python

```
