const { App } = require('@slack/bolt');

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

// slash commad
app.command('/bliss', async ({ command, ack, say }) => {
  // Acknowledge command request
  await ack();

  await say(`${command.text}!! 🌸``);
});

(async () => {
  // start your app
  await app.start(process.env.PORT || 3015);

  console.log('⚡️ Bolt app is running!');
})();
