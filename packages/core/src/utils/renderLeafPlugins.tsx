import * as React from 'react';
import { RenderLeafProps } from '@naripok/slate-react';
import { RenderLeaf, SlatePlugin } from '../types';

export const renderLeafPlugins = (
  plugins: SlatePlugin[],
  renderLeafList: RenderLeaf[]
) => (leafProps: RenderLeafProps) => {
  renderLeafList.forEach((renderLeaf) => {
    leafProps.children = renderLeaf(leafProps);
  });

  plugins.forEach(({ renderLeaf }) => {
    if (!renderLeaf) return;
    leafProps.children = renderLeaf(leafProps);
  });

  return <span {...leafProps.attributes}>{leafProps.children}</span>;
};
