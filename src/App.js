import {Button, DangerButton} from './styledComponents'

const App = () => {
  return (
    <>
      <Button>default button</Button>
      <Button primary>primary button</Button>
      <DangerButton>dangerous button</DangerButton>
      <DangerButton primary>dangerous primary button</DangerButton>
    </>
  );
}

export default App