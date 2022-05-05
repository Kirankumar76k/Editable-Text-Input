import {Component} from 'react'
import './App.css'

class App extends Component {
  state = {editableText: '', toggle: false}

  onChangeInputText = event => {
    this.setState({editableText: event.target.value})
  }

  onClickSaveBtn = () => {
    this.setState(prevState => ({
      toggle: !prevState.toggle,
    }))
  }

  render() {
    const {editableText, toggle} = this.state
    const btnText = toggle ? 'Edit' : 'Save'

    return (
      <div className="bg-container">
        <div className="app-container">
          <h1 className="heading">Editable Text Input</h1>
          <div className="input-container">
            {toggle ? (
              <p className="entered-text">{editableText}</p>
            ) : (
              <input
                type="text"
                value={editableText}
                onChange={this.onChangeInputText}
                className="input-class"
              />
            )}

            <button
              type="button"
              className="saveBtn"
              onClick={this.onClickSaveBtn}
            >
              {btnText}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default App
