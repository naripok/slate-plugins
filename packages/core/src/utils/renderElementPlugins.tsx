import * as React from 'react';
import { RenderElementProps } from '@naripok/slate-react';
import { RenderElement, SlatePlugin } from '../types';

export const renderElementPlugins = (
  plugins: SlatePlugin[],
  renderElementList: RenderElement[]
) => (elementProps: RenderElementProps) => {
  let element;

  renderElementList.some((renderElement) => {
    element = renderElement(elementProps);
    return !!element;
  });
  if (element) return element;

  plugins.some(({ renderElement }) => {
    element = renderElement && renderElement(elementProps);
    return !!element;
  });
  if (element) return element;

  return <div {...elementProps.attributes}>{elementProps.children}</div>;
};
