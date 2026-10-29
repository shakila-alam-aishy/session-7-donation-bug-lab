# Debugging in the Agentic Age

**UN Volunteers · Course**  
**Session 7 | Quality & Scale**

A practical learning repository focused on debugging AI-generated code, improving software reliability, and building safer development workflows in the age of AI agents.

## 📌 About This Repository

This repository contains the learning materials, presentation slides, practical lab documents, code examples, and exercises for **Session 7: Debugging in the Agentic Age**, delivered as part of the UN Volunteers course.

The session focuses on developing the skills needed to review, debug, test, and maintain AI-generated code rather than blindly trusting automated solutions.

## 🎯 Learning Objectives

By completing this session, learners will be able to:

- **Audit AI-generated code:** Understand what the code does, which files it affects, and whether it handles errors and secrets safely.
- **Provide useful error context:** Give AI agents clear error messages, commands, relevant files, and reproducible steps.
- **Break the endless fix loop:** Recognize repeated unsuccessful fixes and use Git to return to a known working state.
- **Refactor technical debt:** Improve the structure and maintainability of AI-generated code without changing its intended behavior.
- **Test and verify fixes:** Use regression tests to ensure that bug fixes work and previously working functionality remains intact.

## 🧪 Practical Use Case

**Fixing a Broken AI-Built Donation Page**

The practical lab uses a deliberately broken donation page to demonstrate a systematic debugging workflow.

Participants will investigate the existing code, identify bugs, provide useful context to an AI coding agent, verify proposed fixes, and write regression tests to prevent the same issues from returning.

## 📂 Repository Contents

This repository is organized to keep the theoretical and practical learning materials easy to find.

```text
debugging-in-the-agentic-age/
│
├── README.md
│
├── slides/
│   └── Session-7-Theory-Slides.pptx
│
├── practical-lab/
│   ├── README.md
│   ├── lab-instructions.md
│   └── donation-bug-lab/
│
├── exercises/
│   └── debugging-exercises.md
│
└── resources/
    └── useful-links.md
```

*Note: The structure above is a suggested organization. Add or rename folders and files to match the actual repository contents.*

## 🛠️ Key Topics

1. Reading and auditing AI-generated code
2. Writing effective debugging prompts
3. Understanding error messages and stack traces
4. Avoiding repeated, ineffective AI-generated fixes
5. Using Git commits and rollback safely
6. Refactoring AI-generated code
7. Writing and running regression tests
8. Reviewing security risks, including accidental exposure of secrets

## 📦 Expected Outcomes

By the end of the session, participants should be able to produce:

- A structured bug report
- An evidence-based bug fix
- Regression tests for the identified issues
- A more maintainable codebase
- A safer workflow for collaborating with AI coding agents

## 🔐 Security Reminder

Never commit API keys, passwords, access tokens, private credentials, or other sensitive information to a public repository.

Before publishing code, review the repository for exposed secrets and verify that configuration files and environment variables are handled safely.

## 💻 Tools and Technologies

- Git and GitHub
- AI coding assistants
- Code editors and terminal tools
- Automated testing frameworks
- Web development tools used in the practical lab

The practical workflow is designed to work without a GPU or paid AI tools.

## 👩‍🏫 Course Information

- **Program:** UN Volunteers · Course
- **Session:** 7
- **Track:** Quality & Scale
- **Topic:** Debugging in the Agentic Age
- **Practical Project:** Fixing a Broken AI-Built Donation Page

---

**Learning principle:** Do not blindly trust AI-generated code. Inspect it, test it, verify the fix, and understand the changes before accepting them.

