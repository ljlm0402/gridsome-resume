# Gridsome Resume

This is a starter project for Gridsome that helps you set up a resume quick and easy.

It utilizes Bootstrap that is well known for powerful styling and layout.

### Site

[https://kyungmin-resume.surge.sh](https://kyungmin-resume.surge.sh)

### Features

This starter project includes some of the latest powerful technologies.

- **Gridsome -** Vue.js & GraphQL powered framework genrating static files.
- **Bootstrap & Bootstrap Vue -** Powerful styling and layout with styled Vue components.
- **Sass -** Professional grade CSS extension with many features.
- **Google Analytics -** Just add your tracking ID in the config.
- **Sitemap generator -** Automatically generates a sitemap.xml file.

**or manually follow the guide below**

If you haven't already installed Gridsome CLI: `npm install --global @gridsome/cli`

1. `gridsome create my-gridsome-site https://github.com/ljlm0402/gridsome-resume.git`
2. `cd my-gridsome-site` to open folder
3. `npm run dev` to start local dev server at `http://localhost:8080`
4. Happy hacking 🎉🙌

**Surge Deploy Guide**

`Node.js Version 14`

1. list all domains you have access to: `surge list`

2. package static build: `npm run build`

3. Usage: `surge`

4. project path : `[project path]/dist`

5. tear down a published project: `surge teardown <pulished project>`
