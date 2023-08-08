# react-github-user-search
This is a **GitHub user's search** app with Vite+React.js, and tailwindcss hosted on Vercel (https://react-github-user-search-mu.vercel.app).

## Getting Started 
With NPM:
```bash
npm create vite@latest
```
With Yarn:
```bash
yarn create vite
```
With PNPM:
```bash
pnpm create vite
```

*Project name*:  . (DOT to create app in the current folder)

*Select a framework*: React

*Select a variant*: JavaScript

To install the dependencies
```bash
npm install
```

To run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
## Install tailwindcss
Stop `npm run dev` with Ctrl+C.

Using PostCSS:


```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
Configure your template paths:

`tailwind.config.js`:

```bash
........
content: ["./index.html",
          "./src.**/*.{js,ts,jsx,tsx}",]
........
```

Add the Tailwind directives to your CSS:

`src/index.css`:

```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Start your build process:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```


Open `http://localhost:5173/` with your browser to see the result.

## Learn More

To learn more about React, Vite, and tailwindcss, take a look at the following resources:

- [React.js Documentation](https://react.dev/learn) - learn about React.js features.
- [Learn Vite](https://vitejs.dev/guide/) - Vite (French word for "quick", pronounced /vit/, like "veet") is a build tool that aims to provide a faster and leaner development experience for modern web projects

- [Tailwind CSS](https://tailwindcss.com/)-rapidly build modern websites without ever leaving your HTML.


## Deploy this project on Vercel with GitHub

First open `GitHub` account and create a new Repository.

Then copy from `GitHub` below the codes, and add to `Terminal`:
```bash
git remote add arigin https://.....
git branch -M main
git add .
git commit -m "first commit"
git push  origin main
```

To deploy the Repository on **Vercel**, open the [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) with GitHub account. 

Then `Add New` > `project` >  react-github-user-search  `Import`> `Deploy`.

Finally, if you write `broto1234` and search, you can see the result below.

![react-pro](https://github.com/broto1234/react-github-user-search/assets/73961811/a6233b27-c01b-4509-b51c-958101dd5270)
