import { logColor } from './log-color';

export async function asyncDelay(ms: number = 0, verbose = false) {
  if (ms <= 0) {
    return;
  }

  if (verbose) {
    logColor(`Delaying for ${ms / 1000}ss`);
  }

  await new Promise(resolve => setTimeout(resolve, ms));
}
