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
      text: 'BlissBot',
      emoji: true,
    },
    submit: {
      type: 'plain_text',
      text: 'Submit',
      emoji: true,
    },
    type: 'modal',
    close: {
      type: 'plain_text',
      text: 'Cancel',
      emoji: true,
    },
    blocks: [
      {
        type: 'input',
        element: {
          type: 'plain_text_input',
          action_id: 'plain_text_input-action',
        },
        label: {
          type: 'plain_text',
          text: 'App/Service Name',
          emoji: true,
        },
      },
      {
        type: 'context',
        elements: [
          {
            type: 'plain_text',
            text: 'Ex: "Notion", "HubSpot", "AWS", etc.',
            emoji: true,
          },
        ],
      },
      {
        type: 'input',
        element: {
          type: 'radio_buttons',
          options: [
            {
              text: {
                type: 'plain_text',
                text: 'Yes',
                emoji: true,
              },
              value: 'value-0',
            },
            {
              text: {
                type: 'plain_text',
                text: 'No',
                emoji: true,
              },
              value: 'value-1',
            },
          ],
          action_id: 'radio_buttons-action',
        },
        label: {
          type: 'plain_text',
          text: 'Is this critical to your job?',
          emoji: true,
        },
      },
      {
        type: 'input',
        element: {
          type: 'multi_users_select',
          placeholder: {
            type: 'plain_text',
            text: 'Select users',
            emoji: true,
          },
          action_id: 'multi_users_select-action',
        },
        label: {
          type: 'plain_text',
          text: 'Who will manage this?',
          emoji: true,
        },
      },
      {
        type: 'context',
        elements: [
          {
            type: 'plain_text',
            text:
              'Point of contact for IT to ask if they should renew or terminate the service.',
            emoji: true,
          },
        ],
      },
      {
        type: 'input',
        element: {
          type: 'plain_text_input',
          multiline: true,
          action_id: 'plain_text_input-action',
        },
        label: {
          type: 'plain_text',
          text: "Convince me it's worth the money",
          emoji: true,
        },
      },
      {
        type: 'context',
        elements: [
          {
            type: 'plain_text',
            text: 'Briefly explain why we should spend $ on this?',
            emoji: true,
          },
        ],
      },
    ],
  });
});

(async () => {
  // start your app
  await app.start(process.env.PORT || 3015);

  console.log('⚡️ Bolt app is running!');
})();
