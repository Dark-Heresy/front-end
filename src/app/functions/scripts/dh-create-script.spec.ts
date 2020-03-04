import { dhCreateScript } from '@dh/functions/scripts/dh-create-script';

describe('DhCreateScript', () => {
  describe('dhCreateScript()', () => {
    const scriptSource = 'dummy-script-source';
    const htmlScriptElement: HTMLScriptElement = document.createElement('script');

    let documentCreateElementSpy: jasmine.Spy;

    beforeEach(() => {
      documentCreateElementSpy = spyOn(document, 'createElement').and.returnValue(htmlScriptElement);
    });

    it('should create an html script element', () => {
      dhCreateScript(scriptSource);

      expect(documentCreateElementSpy).toHaveBeenCalledTimes(1);
      expect(documentCreateElementSpy).toHaveBeenCalledWith('script');
    });

    it('should update the source of the created html script element with the given one', () => {
      const result = dhCreateScript(scriptSource);

      expect(result.src).toEqual(scriptSource);
    });

    it('should update the type of the created html script element to text/javascript', () => {
      const result = dhCreateScript(scriptSource);

      expect(result.type).toEqual('text/javascript');
    });

    it('should return the created html script element', () => {
      const result = dhCreateScript(scriptSource);

      expect(result).toEqual(jasmine.any(HTMLScriptElement));
    });
  });
});
