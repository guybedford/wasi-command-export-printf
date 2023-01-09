import { command, hello } from './dist/component-runtime.js';

command(0, 1, [], Object.entries({
  SOURCE: `export function hello () {
    return 'world';
  }`
}), []);

console.log('hello(): ', hello());
