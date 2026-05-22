/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { FunctionResponseScheduling } from '@google/genai';
import { FunctionCall, workspaceTools } from './state';
import { personalAssistantTools } from './tools/personal-assistant';
import { whatsappTools } from './tools/whatsapp';
import { customerSupportTools } from './tools/customer-support';
import { navigationSystemTools } from './tools/navigation-system';

export const AVAILABLE_TOOLS: FunctionCall[] = [
  ...personalAssistantTools,
  ...workspaceTools,
  ...whatsappTools,
  ...customerSupportTools,
  ...navigationSystemTools
];
