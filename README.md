# FitLog

FitLog is a dark, no-nonsense gym companion. Browse a library of twelve lifts, open any workout for full specs and step-by-step instructions, lock up to five lifts into today's plan, and save others for later.

**Live link:** _coming soon_

## Technologies Used

- Next.js (App Router) with TypeScript
- React and the Context API
- Tailwind CSS
- react-toastify (toast notifications)
- react-icons (icons)
- next/font (Inter and Oswald)

## Key Features

1. **Workout library**: 12 workouts fetched from an API and shown in a responsive grid, with muscle-group tags, duration, calories and rating.
2. **Workout details**: a page for each workout with key specs (equipment, difficulty, sets, reps, duration, calories, rating) and numbered instructions. Unknown IDs show a 404 page.
3. **Today's plan (max 5)**: add workouts to today's plan, with duplicate protection, a five-lift cap and toast feedback.
4. **My Plan dashboard**: totals for exercises, minutes and calories; "Today's Plan" and "Saved" tabs; sorting by duration, calories or rating; mark lifts as done or remove them.
5. **Saved locally**: the plan, saved workouts and completed lifts are stored in localStorage, so they survive a page refresh.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.
