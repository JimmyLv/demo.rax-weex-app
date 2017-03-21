import { createElement, Component } from 'rax'
import View from 'rax-view'
import Text from 'rax-text'
import styles from './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
    }
  }

  render() {
    return (
      <View style={styles['app']}>
        <View style={styles['header']}>
          <Text style={styles['banner']}>Welcome to Rax</Text>
        </View>
        <Text style={styles['intro']}>
          To get started, edit src/App.js and save to reload.
        </Text>
      </View>
    )
  }
}

export default App
