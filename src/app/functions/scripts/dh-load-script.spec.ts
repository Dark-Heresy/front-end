import { dhLoadScript } from '@dh/functions/scripts/dh-load-script';

describe('DhLoadScript', () => {
  describe('dhLoadScript()', () => {
    const htmlScriptElement: HTMLScriptElement = document.createElement('script');

    let documentBodyAppendChildSpy: jasmine.Spy;

    beforeEach(() => {
      documentBodyAppendChildSpy = spyOn(document.body, 'appendChild').and.stub();
    });

    it('should add the given html script element in the body of the page', () => {
      dhLoadScript(htmlScriptElement);

      expect(documentBodyAppendChildSpy).toHaveBeenCalledTimes(1);
      expect(documentBodyAppendChildSpy).toHaveBeenCalledWith(htmlScriptElement);
    });
  });
});
