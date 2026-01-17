/* istanbul ignore file */
import { workflow } from '@novu/framework';
import { z } from 'zod';

const workflowId = 'test-workflow';
const emailStepId = 'test-email';
const inAppStepId = 'test-in-app';
const chatStepId = 'test-chat';

export const testWorkflow = workflow(
  workflowId,
  async ({ step, payload }) => {
    // https://docs.novu.co/framework/typescript/steps/email
    await step.email(emailStepId, () => ({
      subject: 'Test Email',
      body: `This is a test email from ${payload.name}`,
    }));

    // https://docs.novu.co/framework/typescript/steps/inApp
    await step.inApp(inAppStepId, () => ({
      body: `This is a test in-app notification from ${payload.name}`,
    }));

    // https://docs.novu.co/framework/typescript/steps/chat
    await step.chat(chatStepId, () => ({
      body: `This is a test chat notification from ${payload.name}`,
    }));
  },
  {
    payloadSchema: z.object({
      name: z.string(),
    }),
  },
);
