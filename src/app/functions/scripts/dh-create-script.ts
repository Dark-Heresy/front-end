export function dhCreateScript(scriptSource: Readonly<string>): HTMLScriptElement {
  const htmlScriptElement: HTMLScriptElement = document.createElement('script');

  htmlScriptElement.src = scriptSource;
  htmlScriptElement.type = 'text/javascript';

  return htmlScriptElement;
}
