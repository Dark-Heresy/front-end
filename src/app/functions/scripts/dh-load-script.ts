export function dhLoadScript(script: Readonly<HTMLScriptElement>): void {
  document.body.appendChild(script);
}
