import { Editor, Transforms } from 'slate';
import { isCollapsed } from '../../../common/queries/isCollapsed';
import { unwrapNodesByType } from '../../../common/transforms/unwrapNodesByType';
import { setDefaults } from '../../../common/utils/setDefaults';
import { DEFAULTS_LINK } from '../defaults';
import { LinkOptions } from '../types';
import { wrapLink } from './wrapLink';

/**
 * Unwrap link at a location (default: selection).
 * Then, the focus of the location is set to selection focus.
 * Then, wrap the link at the location.
 */
export const upsertLinkAtSelection = (
  editor: Editor,
  url: string,
  options?: {
    /**
     * If true, wrap the link at the location (default: selection) even if the selection is collapsed.
     */
    wrap?: boolean;
  } & LinkOptions
) => {
  if (!editor.selection) return;

  const { link, wrap } = setDefaults(options, DEFAULTS_LINK);

  if (!wrap && isCollapsed(editor.selection)) {
    return Transforms.insertNodes(editor, {
      type: link.type,
      url,
      children: [{ text: url }],
    });
  }

  unwrapNodesByType(editor, link.type, { at: editor.selection });

  wrapLink(editor, url, {
    link,
    at: editor.selection,
  });

  Transforms.collapse(editor, { edge: 'end' });
};
