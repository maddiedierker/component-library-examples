import * as SCSS from './scssAndClassnames'
import * as Emotion from './emotion'
import * as SC from './styledComponents'

const App = () => {
  return (
    <>
      <h1>CSS modules, SCSS, & classnames</h1>
      <p>
        <SCSS.Button>default button</SCSS.Button>
        <SCSS.Button highlight>highlight button</SCSS.Button>
        <SCSS.DangerButton>danger button</SCSS.DangerButton>
        <SCSS.DangerButton highlight>highlight danger button</SCSS.DangerButton>
      </p>

      <h1>emotion</h1>
      <p>
        <Emotion.Button>default button</Emotion.Button>
        <Emotion.Button highlight>highlight button</Emotion.Button>
        <Emotion.DangerButton>danger button</Emotion.DangerButton>
        <Emotion.DangerButton highlight>highlight danger button</Emotion.DangerButton>
      </p>

      <h1>styled-components</h1>
      <p>
        <SC.Button>default button</SC.Button>
        <SC.Button highlight>highlight button</SC.Button>
        <SC.DangerButton>danger button</SC.DangerButton>
        <SC.DangerButton highlight>highlight danger button</SC.DangerButton>
      </p>

      <h1>no styles!</h1>
      <p>
        <button>unstyled button</button>
      </p>
    </>
  );
}

export default App