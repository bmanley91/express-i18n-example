# express-i18n-example
An example project demonstrating an i18n setup for express

# Setup
After cloning and `npm install`ing, run with `npm run start`.

# Examples
## Basic Translation
The `/greeting` endpoint will return a message in English (`en`) or Spanish (`es`) based on the `Accept-Language` header.

To get a message in Spanish:
```bash
$ curl localhost:8080/greeting -H "Accept-Language: es"
```

To get a message in English:
```bash
$ curl localhost:8080/greeting -H "Accept-Language: en"
```

## Default Language
English is configured as the default language. The message returned by the `/no-translation` endpoint does not have a translation. No matter what value is passed in the `Accept-Language` header, only the default (English) message will be returned.
```bash
$ curl localhost:8080/no-translation -H "Accept-Language: es"
$ curl localhost:8080/no-translation -H "Accept-Language: fr"
```

## No Message
The `/no-message` endpoint has no message value in any translations. In this case, the message key will be returned.
```bash
$ curl localhost:8080/no-message -H "Accept-Language: es"
```