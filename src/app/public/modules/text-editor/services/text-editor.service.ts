import {
  Injectable
} from '@angular/core';

import {
  Observable
} from 'rxjs';

import {
  EditorSetting
} from '../types/editor-setting';

/**
 * @internal
 */
@Injectable({
  providedIn: 'root'
})
export class SkyTextEditorService {

  /**
   * A dictionary representing all active text editors and their settings.
   */
  public editors: { [key: string]: EditorSetting } = {};

  /**
   * Returns the click observable from the editor with the corresponding id.
   */
  public clickListener(id: string): Observable<unknown> {
    return this.editors[id].clickObservable;
  }

  /**
   * Returns the command change observable from the editor with the corresponding id.
   */
  public commandChangeListener(id: string): Observable<unknown> {
    return this.editors[id].commandChangeObservable;
  }

  /**
   * Removes editor from the `editors` index by id.
   */
  public removeEditor(id: string): void {
    if (id in this.editors) {
      delete this.editors[id];
    }
  }

  /**
   * Returns the selection change observable from the editor with the corresponding id.
   */
  public selectionChangeListener(id: string): Observable<unknown> {
    return this.editors[id].selectionChangeObservable;
  }

}
