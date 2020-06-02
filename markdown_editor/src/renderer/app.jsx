import * as React from 'react';
import ReactDOM from "react-dom";
import MarkDownEditorUI from "./components/MarkDownEditorUI"

// class Hello extends React.Component {
//     render() {
//         return React.createElement('div', null, `Hello ${this.props.toWhat}`);
//     }
// }

//render(React.createElement(Hello, {toWhat: 'World'}, null),document.getElementById("app"));

ReactDOM.render(
    <MarkDownEditorUI />,
    document.getElementById("app")
);

// ReactDOM.render(
//     React.createElement(MarkDownEditorUI),
//     document.getElementById("app")
// );