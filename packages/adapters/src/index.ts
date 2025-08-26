/**
 * @edda/adapters - Adapters for various testing frameworks and platforms
 * 
 * This package provides adapters to integrate edda with different
 * testing frameworks and execution environments.
 */

export const version = '1.0.0';

export interface TestAdapter {
  name: string;
  execute(): Promise<void>;
}

export class BaseAdapter implements TestAdapter {
  constructor(public name: string) {}

  async execute(): Promise<void> {
    // Base adapter implementation will be added here
  }
}

export default BaseAdapter;
