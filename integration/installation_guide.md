This integration allows you to require users to verify their emails before signing in.  Auth0 sends verification emails to users automatically when they register.  Once they receive the email, they can click to link to set their email.  Additionally, you can leverage the Auth0 Management API to set a user's email verification status manually if you have verified their email outside of the default Auth0 workflow.

## Prerequisites

1. An Auth0 account and tenant. [Sign up for free](https://auth0.com/signup).

## Add the Auth0 Action

**Note:** Once the Action is successfully deployed, all logins for your tenant will be processed by this integration. Before activating the integration in production, [install and verify this Action on a test tenant](https://auth0.com/docs/get-started/auth0-overview/create-tenants/set-up-multiple-environments).

1. Select **Add Integration** (at the top of this page).

1. Read the necessary access requirements, and select **Continue**.

1. Configure the integration using the following fields:

* **Error Message:** Set this to what you wish to return to the calling application.  This will be returned in the query string as `error_description`.

1. Add the integration to your Library by selecting **Create**.

1. In the modal that appears, select the **Add to flow** link.

1. Drag the Action into the desired location in the flow.

1. Select **Apply Changes**.

## Results

Once this Action has been deployed. Users with passwords that were set within the window you configured, will login as usual. When users with expired passwords attempt to login, they will be prompted with your error message and be forced to reset their password.

## Troubleshooting

Ensure you provide a valid whole number for `Password Expiry In Days` and remember this will only apply to users that authenticate with `Database Connections`. Users than authenticate through `Social, Enterprise or Passwordless Connections` will not be under the scope of this `Action`.
