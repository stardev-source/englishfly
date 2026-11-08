# EnglishFly — English test platform (Beginner 1-2)

## Run locally
```
npm install
npm run dev        # local preview
npm run build      # production build
```

## Deploy to Vercel
1. Push the project to GitHub.
2. In vercel.com: Add New → Project → pick the repo (Vite is detected automatically).
3. Deploy.

## Firestore
Results are saved to the `results` collection. In Firestore → Rules, `results` must allow read/write.

## Add a new test
Create a new file in `src/data/` (like `beginner1.js`), import it in `src/data/tests.js`
and add it to the `tests` array of its level.
Time per question: `SECONDS_PER_QUESTION` in `tests.js` (120 seconds = 2 minutes).
