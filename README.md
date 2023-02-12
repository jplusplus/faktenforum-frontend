# Faktenforum

This is the repository containing the frontend of the [Faktenforum](https://github.com/faktenforum).

## Getting Started

After cloning the repository:

```
npm install
npm start
```

## Development

### Development Environment

We use VS Code for development. It will suggest recommended extensions for this project.

### Internationalisation

Our locale data is stored in [this Google Sheet](https://docs.google.com/spreadsheets/d/19cagWgvcenffTAW4suwBqWyQxvIqOjIjFRy5MaDcoJA/edit?usp=sharing). We use a [script](./scripts/i18n.js) to convert this data into `.json`-files that are placed in the `locale` folder of this repository.

As this uses the Google Sheets APIs, ask your favorite developer for their `.credentials.json` file so you can use the process below.

### Updating locale files

To update the locale data in the repository you run the following:

```bash
node scripts/i18n.js
git add -A locales/ && git commit locales/ -m 'chore: updated locales'
```
