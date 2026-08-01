import { MultiAgentHarness } from '../src/harness.js';

const harness = new MultiAgentHarness({ verbose: true });
harness.run('Write a guide about vLLM optimization');
