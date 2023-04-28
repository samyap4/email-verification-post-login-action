exports.onExecutePostLogin = async (event, api) => {
  const { ERROR_MESSAGE } = event.configuration;
  if (!event.user.email_verified) {
    api.access.deny(ERROR_MESSAGE);
  }
};
