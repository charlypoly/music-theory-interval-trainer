import * as React from 'react';
import { notes } from '../lib/constants';

class NotesComponent extends React.Component<{}, {}> {

    render() {
        let noteEls: JSX.Element[] = [];
        notes.forEach((note) => {
            noteEls.push(
                <span>{note}</span>
            );
        });
        return  <div>
                {noteEls}
                </div>;
    }
}

export { NotesComponent };