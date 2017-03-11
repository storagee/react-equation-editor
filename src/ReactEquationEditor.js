import React, { Component } from 'react';
import './css/react-equation-editor.css';

class ReactEquationEditor extends Component {
    render() {
        return (
            <div>
                <div className="ree-header">
                    <select name="ree-type" id="ree-type">
                        <option value="基础数学">基础数学</option>
                        <option value="基础数学">希腊字母</option>
                        <option value="基础数学">手写体</option>
                        <option value="基础数学">这样可好</option>
                    </select>
                </div>
                <textarea name="ree-input" id="ree-input" cols="30" rows="10"></textarea>
                <div className="ree-output"></div>
            </div>
        )
    }
}

export default ReactEquationEditor;