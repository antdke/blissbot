const { Firstapp } = require('@slack/bolt');

// Initializes your app with your bot token and signing secret
const firstapp = new Firstapp({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

// Listens to incoming messages the contain "hello"
firstapp.message('hello', async ({ message, say }) => {
  // say() sends a message to the channel where the event was triggered
  await say({
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `Hey there <@${message.user}>! 🤗`,
        },
        accessory: {
          type: 'button',
          text: {
            type: 'plain_text',
            text: 'Click Me',
          },
          action_id: 'button_click',
        },
      },
    ],
    text: `Hey there <@${message.user}>! 🤗`,
  });
});

// this function activates once the user clicks 'Click Me'
app.action('button_click', async ({ body, ack, say }) => {
  // Acknowledge the action
  await ack();
  await say(`<@${body.user.id}> clicked the button! 🔥`);
});

(async () => {
  // start your app
  await app.start(process.env.PORT || 3015);

  console.log('⚡️ Bolt app is running!');
})();
