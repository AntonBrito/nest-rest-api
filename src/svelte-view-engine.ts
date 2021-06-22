 import 'svelte/register';

export function svelteViewEngine(filePath: string, options: any, next) {
  const Component = require(filePath).default;
  const { html } = Component.render(options);
  next(null, html);
}