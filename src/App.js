import * as SC from './styledComponents'
import * as SCSS from './scssAndClassnames'

// TODO: RUN LINTER
const App = () => {
  return (
    <>
      <>
        <SC.Button>default button</SC.Button>
        <SC.Button primary>primary button</SC.Button>
        <SC.DangerButton>dangerous button</SC.DangerButton>
        <SC.DangerButton primary>dangerous primary button</SC.DangerButton>
      </>
        <SCSS.Button></SCSS.Button>
      <>
      </>
    </>
  );
}

export default App