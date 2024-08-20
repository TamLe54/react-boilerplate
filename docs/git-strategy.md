# Git Strategy

## GitHub Flow

GitHub Flow is a lightweight, branch-based workflow centered around the main branch, where all production-ready code resides. When a new feature or fix is initiated, a new feature branch is created off the main branch. Once the feature is tested and reviewed, it is merged back into the main branch via a pull request, making it ready for deployment. GitHub Flow facilitates smaller, more frequent deployments to production, aiming to reduce time-to-market.

![Github flow](/docs/git-hub-flow.png)

> master = main

- Anything in the main branch is deployable.
- To work on something new, create a descriptively named branch off of the main.
- Commit changes to that local branch and regularly remotely push your work to the same branch.
- Once the work is ready, open a pull request/merge request and update the task in JIRA/Gitlab to IN-REVIEW.
- After reviewing and receiving feedback and signing off on the feature, merge it into the main branch. The changes should be automatically deployed right after merging. The task status should be IN-TESTING.
- Delete the local branch.

## Branch name

The different types of branches we may use are:

- Feature branches
- Bug branches
- Hotfix branches

```bash
feature/123-tenant-view-info

bugfix/125-update-tenant-info

hotfix/127-crash-on-update-tenant-info
```

## Author of the commits

Please make sure that you set up the Git user name and email for the repository correctly before making your first commit. Refer to this one: [Setting your username in git for a single repo](https://docs.github.com/en/get-started/getting-started-with-git/setting-your-username-in-git#setting-your-git-username-for-a-single-repository)

```bash
# Set a Git username and email
git config user.name "your name"
git config user.email "your email address"

# Confirm that you setup the name and email correctly
git config user.name
git config user.email
```

## Commit message

Refer to https://www.conventionalcommits.org/en/v1.0.0/

The commit message should be structured as follows:

```bash
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

The commit contains the following structural elements:

1. `fix:` a commit of the type fix patches a bug in your codebase (this correlates with PATCH in Semantic Versioning).

2. `feat:` a commit of the type feat introduces a new feature to the codebase (this correlates with MINOR in Semantic Versioning).

3. BREAKING CHANGE: a commit that has a footer BREAKING CHANGE:, or appends a `!` after the type/scope, introduces a breaking API change (correlating with MAJOR in Semantic Versioning). A BREAKING CHANGE can be part of commits of any type.

4. types other than `fix:` and `feat:` are allowed, for example _@commitlint/config-conventional_ (based on the Angular convention) recommends `build:`, `chore:`, `ci:`, `docs:`, `style:`, `refactor:`, `perf:`, `test:`, and others.

5. footers other than BREAKING CHANGE: `<description>` may be provided and follow a convention similar to git trailer format.

### Example:

- Commit message with description and breaking change footer:

```bash
feat: create tenant with more attributes

BREAKING CHANGE: Tenant now requires more mandatory attributes (location, employee number)
```

- Commit message with ! to draw attention to breaking change:

```bash
feat!: send an email to the customer when a product is shipped
```

- Commit message with scope and ! to draw attention to breaking change:

```bash
feat(api)!: send an email to the customer when a product is shipped
```

- Commit message with no body:

```bash
docs: correct spelling of CHANGELOG
```

- Commit message with scope:

```bash
feat(lang): add Polish language
```

- Commit message with multi-paragraph body and multiple footers

```bash
fix: prevent racing of requests

Introduce a request id and a reference to latest request. Dismiss
incoming responses other than from latest request.

Remove timeouts which were used to mitigate the racing issue but are
obsolete now.

Reviewed-by: Z
Refs: #123
```

## Best Practices

- Commit Messages: Use clear, concise commit messages following a convention (e.g., Conventional Commits).

- Pull Requests: Ensure code reviews via pull requests before merging into main.

- CI/CD Integration: Automate testing and deployment processes.

- Branch Protection: Enforce branch protection rules to prevent direct commits to main.

## Reference

https://docs.github.com/en/get-started/using-github/github-flow
https://www.conventionalcommits.org/en/v1.0.0/
