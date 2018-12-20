import React, { Component } from 'react';
// Normal
// import MouseMove from './normal/MouseMove';
// import Cat from './normal/Cat';

// Mixins
// import ShowPosition from './mixins/MouseMove'
// import Cat from './mixins/Cat'

// HOC
// import MouseMove from './hoc/MouseMove'
// import Cat from './hoc/Cat'

// Render props
// import MouseMove from './render_props/MouseMove'
// import Cat from './render_props/Cat'

// Hooks
// import MouseMove from './hooks/MouseMove'
import Cat from './hooks/Cat'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Cat />
      </div>
    );
  }
}

export default App;
