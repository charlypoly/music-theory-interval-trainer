import * as React from 'react';
import { NotesComponent } from './notes';
import { IntervalComponent } from './interval';

class TrainerComponent extends React.Component<{}, {}> {

    render() {
        return <div>
                 <div>
                    <NotesComponent />
                 </div>
                 <div>
                    <NotesComponent />
                 </div>
                 <div>
                    <IntervalComponent />
                 </div> 
               </div>
    }
}

export { TrainerComponent };