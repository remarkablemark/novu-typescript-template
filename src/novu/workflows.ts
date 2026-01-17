/* istanbul ignore file */
import { workflow } from '@novu/framework';
import { z } from 'zod';

const workflowId = 'test-workflow';
const emailStepId = 'test-email';

export const testWorkflow = workflow(
  workflowId,
  async ({ step, payload }) => {
    await step.email(emailStepId, async () => {
      return {
        subject: 'Test Email',
        body: `This is a test email from ${payload.name}!`,
      };
    });
  },
  {
    payloadSchema: z.object({
      name: z.string(),
    }),
  },
);
