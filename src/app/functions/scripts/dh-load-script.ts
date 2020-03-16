export function dhLoadScript(htmlScriptElement: Readonly<HTMLScriptElement>): void {
  document.body.appendChild(htmlScriptElement);
}
