import React from 'react';


// we can also add highlight.js and make it better.
// https://stackoverflow.com/a/35340052

class PrettyPrintJson extends React.Component {
  render() {
    // data could be a prop for example
    const { data } = this.props;
    return (<div><pre>{JSON.stringify(data, null, 2) }</pre></div>);
  }
}
// Usage:
// <PrettyPrintJson data={data} />



class JsonDump extends React.Component {
  static propTypes = {
    children: React.PropTypes.any
  }

  render() {
    return <pre>{JSON.stringify(this.props.children, null, 4)}</pre>
  }
}

// Usage:
// <JsonDump>{someVar}</JsonDump>
