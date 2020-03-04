export function createScript(scriptSource: Readonly<string>): HTMLScriptElement {
  const scriptElement: HTMLScriptElement = document.createElement('script');

  scriptElement.src = scriptSource;
  scriptElement.type = 'text/javascript';

  return scriptElement;
}
