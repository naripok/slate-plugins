import { Editor } from '@naripok/slate';
import { OnDOMBeforeInput, SlatePlugin } from '../types';

export const onDOMBeforeInputPlugins = (
  editor: Editor,
  plugins: SlatePlugin[],
  onDOMBeforeInputList: OnDOMBeforeInput[]
) => (event: Event) => {
  onDOMBeforeInputList.forEach((onDOMBeforeInput) => {
    onDOMBeforeInput(event, editor);
  });

  plugins.forEach(({ onDOMBeforeInput }) => {
    onDOMBeforeInput?.(event, editor);
  });
};
