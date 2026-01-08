/* istanbul ignore file */
import { workflow } from '@novu/framework';

const workflowId = 'test-workflow';
const stepId = 'test-email';

export const testWorkflow = workflow(workflowId, async ({ step }) => {
  await step.email(stepId, async () => {
    return {
      subject: 'Test Email',
      body: 'This is a test email from Novu Framework!',
    };
  });
});
