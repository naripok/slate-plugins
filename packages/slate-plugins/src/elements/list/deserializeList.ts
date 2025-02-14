import { DeserializeHtml } from '@udecode/slate-plugins-core';
import { getElementDeserializer } from '../../common/utils/getElementDeserializer';
import { setDefaults } from '../../common/utils/setDefaults';
import { DEFAULTS_LIST } from './defaults';
import { ListDeserializeOptions } from './types';

export const deserializeList = (
  options?: ListDeserializeOptions
): DeserializeHtml => {
  const { li, ul, ol } = setDefaults(options, DEFAULTS_LIST);

  return {
    element: [
      ...getElementDeserializer({
        type: ul.type,
        rules: [{ nodeNames: 'UL' }],
      }),
      ...getElementDeserializer({
        type: ol.type,
        rules: [{ nodeNames: 'OL' }],
      }),
      ...getElementDeserializer({
        type: li.type,
        rules: [{ nodeNames: 'LI' }],
      }),
    ],
  };
};
