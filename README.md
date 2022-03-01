# Movie Base

Welcome to Movie Base, an app that makes it easy to find new movie and TV show releases, build your own list of films and TV shows that you would like to watch.
As of now, the app is deployed as an MVP with a lot of projected features in the development stage.

Please visit [https://movie-base-2.vercel.app/](https://movie-base-2.vercel.app/) to use or test the app.

## For developers/ code reviewers:

This app is build with [Next.js](https://nextjs.org/), [Firebase](https://firebase.google.com/), [TMDB](https://www.themoviedb.org/), [Tailwind](https://tailwindcss.com/) and deployed on [Vercel](https://www.vercel.com/).

Please feel free to clone this repository and use the code as you wish, but in using it, please do not break the law and do not use it in an immoral way.

In the root folder of the app run:

```bash
npm install
```

This will install all the necessary packages.

Next, create a **.env.local** file in the root folder of the app and add two environment variables, like this:

_Note: These are not real API keys._

```bash

NEXT_PUBLIC_TMDB_API_KEY=askdfgbdskfgksldfgksldfgbhnj
NEXT_PUBLIC_FIREBASE_KEY=sdlkfjbdklgmlxfkhjnbfdlmhkjl
```

On the first line, after the equal sign, is the tmdb API key which you can get by visiting [www.themoviedb.org](https://www.themoviedb.org), create a (free) account and request a API key.

On the second line, after the equal sign, is the Firebase API key which you can get by visiting [firebase.google.com](https://firebase.google.com/), create a (free) account and follow the steps to create a project. The Web API key is shown in the project settings. More details [here](https://firebase.google.com/docs/web/setup?authuser=0&hl=en)

**When deploying to Vercel, these environment variables must be set up in the project settings!** - more details [here](https://vercel.com/docs/concepts/projects/environment-variables)

For obvious reasons, I cannot share my personal keys as this is a security risk.

### Running in development mode

After cloning the repository and running `npm install` in the app root folder, you can spin up a development server by running:

```bash
npm run dev
```

You can visit the development preview page by default at http://localhost:3000

Enjoy!

## Project Map

### **/pages**

Folder containing the web app routes as next.js requires it.

### **/components**

Folder containing the React components used to build this app. All components in this app are functional components.

### **/Contexts**

Folder containing the react context files and provider components for Auth, AppState and MovieData contexts.

### **/APIs**

Folder containing files for auth functions, helper functions and API query functions.

### **/\_\_tests\_\_**

Folder containing Jest test suits. I am planning to implement rigorous testing as a next step in developing this app.

### **/styles**

Folder containing the global CSS styles. As this app uses Tailwind for CSS, the `global.css` file is mainly used to import Tailwind into the project.

### **/\*.config.js**

Various config files for next, tailwind, jest

## Acknowledgements

Thank you to all the providers of the free resources this app uses:

- [Tailwindcss](https://tailwindcss.com/)
- [Firebase](https://firebase.google.com/)
- [The movie database](https://www.themoviedb.org/)
- [Vercel](https://www.vercel.com/) - for free hosting.
- [React-icons](https://react-icons.github.io/react-icons/) - for wonderful React icon components.
- Node.js, Next.js, Git, GitHub - all free to use!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
