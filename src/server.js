const express = require('express');
const i18next = require('i18next');
const Backend = require('i18next-node-fs-backend');
const i18nextMiddleware = require('i18next-express-middleware');

i18next
    .use(Backend)
    .use(i18nextMiddleware.LanguageDetector)
    .init({
        backend: {
            loadPath: __dirname + '/../resources/locales/{{lng}}/{{ns}}.json'
        },
        fallbackLng: 'en',
        preload: ['en', 'es']
    });

const app = express();

app.use(i18nextMiddleware.handle(i18next));

app.get('/greeting', (req, res) => {
    const response = req.t('greeting');
    res.status(200);
    res.send(response);
});

app.listen(8080, () => console.log('Example app listening on port 8080!'));