const { App } = require('@slack/bolt');

// Initializes your app with your bot token and signing secret
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

// Listens to incoming messages the contain "hello"
app.message('hello', async ({ message, say }) => {
  // say() sends a message to the channel where the event was triggered
  await say(`Hey there <@${message.user}>! 🤗`);
});

(async () => {
  // start your app
  await app.start(process.env.PORT || 3015);

  console.log('⚡️ Bolt app is running!');
})();
