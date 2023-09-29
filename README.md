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
Use `npm run dev` to start the frontend.



### Internationalisation

Our locale data is stored in [this Google Sheet](https://docs.google.com/spreadsheets/d/19cagWgvcenffTAW4suwBqWyQxvIqOjIjFRy5MaDcoJA/edit?usp=sharing). We use a [script](./scripts/i18n.js) to convert this data into `.json`-files that are placed in the `locale` folder of this repository.

As this uses the Google Sheets APIs, ask your favorite developer for their `.credentials.json` file so you can use the process below, or create your own google service account.
* Navigate to google cloud console iam section service accounts https://console.cloud.google.com/iam-admin/serviceaccounts
* Create an account
* In the "Keys" tab, click the "+ ADD KEY" button and choose "JSON"
* This will trigger a download for a JSON file. This is your service account key
* Copy the downloaded json file to scripts/.credentials.json

To update the locale data in the repository you run the following:

```bash
npm run locales
git add -A locales/ && git commit locales/ -m 'chore: updated locales'
```
