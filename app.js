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
    title: {
      type: 'plain_text',
      text: 'Modal Title',
    },
    submit: {
      type: 'plain_text',
      text: 'Submit',
    },
    blocks: [
      {
        type: 'input',
        element: {
          type: 'plain_text_input',
          action_id: 'sl_input',
          placeholder: {
            type: 'plain_text',
            text: 'Placeholder text for single-line input',
          },
        },
        label: {
          type: 'plain_text',
          text: 'Label',
        },
        hint: {
          type: 'plain_text',
          text: 'Hint text',
        },
      },
      {
        type: 'input',
        element: {
          type: 'plain_text_input',
          action_id: 'ml_input',
          multiline: true,
          placeholder: {
            type: 'plain_text',
            text: 'Placeholder text for multi-line input',
          },
        },
        label: {
          type: 'plain_text',
          text: 'Label',
        },
        hint: {
          type: 'plain_text',
          text: 'Hint text',
        },
      },
    ],
    type: 'modal',
  });
});

(async () => {
  // start your app
  await app.start(process.env.PORT || 3015);

  console.log('⚡️ Bolt app is running!');
})();
