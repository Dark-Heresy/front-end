# Contributing

## Git

### Alias

This project use an alias to push automatically with the upstream option set.  
The configuration of the alias is a [local one](.gitconfig).  

This alias is used by the `cz` script to automatically push on the remote with a dynamic branch name.  

**Troubleshooting:**

If the command `push-upstream` does not exists, you can link it to your git:  
Run `git config --local include.path ../.gitconfig`.

## Commit Message Guidelines

We have very precise rules over how our git commit messages can be formatted.  
This leads to **more readable messages** that are easy to follow when looking through the **project history**.

### Commit Message Format

Each commit message consists of a **header**, a **body** and a **footer**.  
The header has a special
format that includes a **type**, a **scope** and a **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>       
<BLANK LINE> 
<footer>     
```

The **type** and the **subject** is mandatory and the other stuff is optional.

Any line of the commit message cannot be longer 100 characters!  
This allows the message to be easier to read on GitHub as well as in various git tools.

### Revert

If the commit reverts a previous commit, it should begin with `revert: `, followed by the header of
the reverted commit. In the body it should say: `This reverts commit <hash>.`, where the hash is
the SHA of the commit being reverted.

### Type

Must be one of the following:

* **feat**    : A new feature
* **fix**     : A bug fix
* **style**   : Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **perf**    : A code change that improves performance
* **test**    : Adding missing tests or correcting existing tests
* **build**   : Changes that affect the build system, CI configuration or external dependencies
* **chore**   : Anything else

### Scope

The scope could be anything specifying place of the commit change.  
For example `datepicker`, `dialog`, `app`, etc.

### Subject

The subject contains succinct description of the change:

* use the imperative, present tense: "change" not "changed" nor "changes"
* don't capitalize first letter
* no dot (.) at the end

### Body

Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes".  
The body should include the motivation for the change and contrast this with previous behavior.

### Footer

The footer should contain any information about **Breaking Changes**.

**Breaking Changes** should start with the word `BREAKING CHANGE:` with a space or two newlines.  
The rest of the commit message is then used for this.

## Git

### LFS

If you add some assets, [checkout the list of extensions](.gitattributes) and add the new ones into Git LFS if necessary.  
You can read the [documentation](https://github.com/git-lfs/git-lfs/wiki/Tutorial) of Git LFS if you do not understand this.

## Styles

### Variables naming convention

#### Internal variables

Some variables like colors should never be used directly during the development inside classes or components.  
This is not recommended because it could leads to a painful experience during an UI breaking change.  

These internal variables should then be prefixed with an "_"  

Example: $_color-white

## Errors

### An unhandled exception occurred: getaddrinfo ENOTFOUND

This error is caused by the lack of custom host on your OS.  
Checkout the [README](README.md), there is a section called "Development server" with the required configuration.

## Naming conventions

The dh prefix is for Dark Heresy.  
This is a pain in the ass to have a prefix nevertheless we think that this is useful to identify our stuff from dependencies stuff.  
It also avoid potential naming collision.  

For example:  
The type DhOptional without Dh as prefix should be Optional, which is too much common and we do not want to fall in an import hell.

This is the true story, sorry for that, I do not have any potatoes.

### Files

- Each file should be prefixed with "dh-"

### Components

- Each component should be prefixed with "dh-"

### Classes

- Each class should be prefixed with "Dh"

### Types

- Each class should be prefixed with "Dh"

### Functions

- Each function should be prefixed with "dh"

### CSS variables and mixins

- Each variable and mixin should be prefixed with "dh-"
