const { App } = require('@slack/bolt');

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

// slash commad
app.command('/bliss', async ({ command, ack, say }) => {
  // Acknowledge command request
  await ack();

  await say({
    type: 'modal',
    callback_id: 'modal-identifier',
    title: {
      type: 'plain_text',
      text: 'Just a modal',
    },
    blocks: [
      {
        type: 'section',
        block_id: 'section-identifier',
        text: {
          type: 'mrkdwn',
          text: '*Welcome* to ~my~ Block Kit _modal_!',
        },
        accessory: {
          type: 'button',
          text: {
            type: 'plain_text',
            text: 'Just a button',
          },
          action_id: 'button-identifier',
        },
      },
    ],
  });
});

(async () => {
  // start your app
  await app.start(process.env.PORT || 3015);

  console.log('⚡️ Bolt app is running!');
})();
