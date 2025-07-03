import { defineAuth } from "@aws-amplify/backend";

/**
 * define and configure your auth resources
 * @see https://docs.amplify.aws/cli/auth
 */
export const auth = defineAuth({
    loginWith: {
      email: true,
    },
});