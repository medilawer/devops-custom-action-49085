import * as core from '@actions/core';
import * as github from '@actions/github';
try {
  const name = core.getInput('name', {required: true});
  const message = `Hello ${name}!`;
  core.info(message);
  core.info(`Actor: ${github.context.actor}`);
  core.setOutput('message', message);
} catch (error) {
  core.setFailed(error.message);
}
