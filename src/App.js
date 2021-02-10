import * as SC from './styledComponents'
import * as SCSS from './scssAndClassnames'

// TODO: RUN LINTER
const App = () => {
  return (
    <>
      <h1>CSS modules, SCSS, & classnames</h1>
      <p>
        <SCSS.Button>default button</SCSS.Button>
        <SCSS.Button primary>primary button</SCSS.Button>
        <SCSS.DangerButton>danger button</SCSS.DangerButton>
        <SCSS.DangerButton primary>primary danger button</SCSS.DangerButton>
      </p>

      <h1>emotion</h1>
      <p></p>

      <h1>styled-components</h1>
      <p>
        <SC.Button>default button</SC.Button>
        <SC.Button primary>primary button</SC.Button>
        <SC.DangerButton>danger button</SC.DangerButton>
        <SC.DangerButton primary>danger primary button</SC.DangerButton>
      </p>

      <h1>no styles!</h1>
      <p>
        <button>unstyled button</button>
      </p>
    </>
  );
}

export default App