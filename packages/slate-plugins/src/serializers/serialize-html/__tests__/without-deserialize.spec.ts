import { renderElementAlign } from '../../../elements/align/renderElementAlign';
import { serializeHTMLFromNodes } from '../serializeHTMLFromNodes';

describe('when there is no deserializer', () => {
  it('not serialize', () => {
    expect(
      serializeHTMLFromNodes([{ renderElement: renderElementAlign() }])([
        { type: 'align_center', children: [{ text: 'I am centered text!' }] },
      ])
    ).toBe('<div>I am centered text!</div>');
  });
});
