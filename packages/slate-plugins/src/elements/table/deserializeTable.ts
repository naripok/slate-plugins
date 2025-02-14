import { DeserializeHtml } from '@udecode/slate-plugins-core';
import { getElementDeserializer } from '../../common/utils/getElementDeserializer';
import { setDefaults } from '../../common/utils/setDefaults';
import { DEFAULTS_TABLE } from './defaults';
import { TableDeserializeOptions } from './types';

export const deserializeTable = (
  options?: TableDeserializeOptions
): DeserializeHtml => {
  const { table, td, th, tr } = setDefaults(options, DEFAULTS_TABLE);

  return {
    element: [
      ...getElementDeserializer({
        type: table.type,
        rules: [{ nodeNames: 'TABLE' }],
      }),
      ...getElementDeserializer({
        type: tr.type,
        rules: [{ nodeNames: 'TR' }],
      }),
      ...getElementDeserializer({
        type: td.type,
        rules: [{ nodeNames: 'TD' }],
      }),
      ...getElementDeserializer({
        type: th.type,
        rules: [{ nodeNames: 'TH' }],
      }),
    ],
  };
};
