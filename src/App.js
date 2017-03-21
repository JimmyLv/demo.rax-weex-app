import { createElement, Component } from 'rax'
import { isWeex, isWeb } from 'universal-env'
import View from 'rax-view'
import Text from 'rax-text'
import styles from './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
    }

    console.info(isWeex ? 'Hello Weex!' : isWeb ? 'Hello Web!' : 'Hello Native!')

    fetch('https://jimmylv.github.io/api/index.json')
      .then(res => res.json())
      .then(json => this.setState({ data: json }))
      .catch(err => console.info(err.message))
  }

  render() {
    return (
      <View style={styles['app']}>
        <View style={styles['header']}>
          <Text style={styles['banner']}>Welcome to Rax</Text>
        </View>
        <View style={styles['intro']}>
          <Text style={styles['icon']}>{'\uE601'}</Text>
          <Text>To get started, edit src/App.js and save to reload.</Text>
        </View>
      </View>
    )
  }
}

export default App
