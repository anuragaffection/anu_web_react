# Anu AI

## important todo

- change frotend url
- also vercel routing problem

## Tech

- `vite + react`
- `tailwind`
- `react-router-dom`
- `npm install -D prettier prettier-plugin-tailwindcss`
-

## Interesting part

- `making layout`
- `adding scroll`

## Challenging part

- `finding color`
- `use ref`
- `browser router`
- `grid layout - challenging`
- `thread updation - happening one step behind - instead of function calling - used useEffect`
- `speech, text to speech`

## Getting the color

- `from inspect only`
- rbg(250, 243, 234)

## Tailwind

- `input focus`
- `group`
- `https://www.npmjs.com/package/tailwind-scrollbar-hide`

## Resources & links

- vite, https://v3.vitejs.dev/guide/
- tailwind , https://tailwindcss.com/docs/guides/vite
- react-router-dom, https://www.npmjs.com/package/react-router-dom
- react speech , https://www.geeksforgeeks.org/create-a-text-to-speech-application-using-reactjs/
- mdn speech - - https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis
- https://medium.com/@aifuture/no-library-required-to-build-a-text-to-speech-component-in-react-e6833a66cea2
- useLocation reference

## code

```let utterance = new SpeechSynthesisUtterance("Hello world!");
speechSynthesis.speak(utterance);
```

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
