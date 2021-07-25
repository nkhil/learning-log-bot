# 🤖 Learning log bot

I recently came across a blog post about [Why everyone will benefit from a learning log](https://boyney123.medium.com/why-you-should-keep-a-development-log-9dfcc853e4e1). 

My problem is that I start learning logs, but it's hard to consistently update it. I thought I'd try and create a bot that I could message, or that could remind me if I hadn't updated my learning log for a few days.

This is a quick webserver I wrote that will handle sending me a message every other day, and depending on my response, will record my positive replies and keep a date-stamped log for me.

Example:
```
> bot: Hey, this is your learning log bot 🤖. Have you learned anything recently?

> me: Nope sorry

> bot: No worries, I'll check again soon 😺

> me: I learned how to run a scheduled task on a webserver using child_process every other day (Monday, Wednesday, Friday)

> bot: 🚀 Well done! A journey of a thousand miles begins with a simple step. I'll log this for you now ✨
```

## Environment

You will need the following environment variables to be set

```
// .env
TWILIO_SID=<your_credentials_here>
TWILIO_AUTH_TOKEN=<your_credentials_here>
TWILIO_FROM_NUMBER=<your_credentials_here>
TWILIO_TO_NUMBER=<your_credentials_here>
```

## Setup

```
git clone git@github.com:nkhil/learning-log-bot.git
cd learning-log-bot && npm i
npm run develop
```

## Twilio

You will need to setup your Twilio sandbox to work with this. [See instructions here](https://www.twilio.com/docs/whatsapp/quickstart/node).

Once you're setup, Twilio requires a POST endpoint (webhook) exposed online to be set up in the dashboard. For local development, you can use [ngrok](https://ngrok.com/) to expose your local port to the internet (speeds up development).
