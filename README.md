# Summative_Assignment_Building_Responsive_UI

Link to Demo Video:

https://drive.google.com/file/d/1Q1UIHcMTuImrzQZwYkfr_U-MQTH1Ruqq/view?usp=sharing

# Student Finance Traka

This is an app that is used to track user expenses **HTML, CSS, and JavaScript**,it records categories, and totalswith an easy to understand design

---

## Features
- Add, view, and deleting records (description, amount, category, date).
- converting currency with it's rate and symbol.
- Dashboard shows:Total records, Total amount, Top category.
- Settings page to edit country which goes with the currency symbol, and rate.
- Seed data loading from 'seed.json' for autopopulating records.
- A keyboard‑friendly navigation.

------


---

## the Setup
1. git clone or download the repo.
2. Open `index.html` in a browser.
3. To load demo records:
   - make sure `seed.json` is in the project root.
   - `seed.js` will automatically populate localStorage with sample records.

---

## how to use
- **Add a record:** Fill in the form on `index.html` and add.
- **View records:** Go to `records.html` to check all entries if yours is in.
- **Delete a record:** Click the blue **Delete** button next to the entry.
- **Dashboard:** Check for totals and the top category under `dashboard.html`.
- **Settings:** change currency symbol and the rate on `settings.html`.

---

## what was used
- **HTML5** for the web structure
- **CSS3** for styling the page
- **JavaScript (ES6)** for logic and storage in  `localStorage` 


## Seed Data
The app has a `seed.json` file with embedded/ preadded sample records like books, food etc , `seed.js` enriches these records on first load with IDs and timestamps, then it saves them into `localStorage` under  key `finance:data`.


