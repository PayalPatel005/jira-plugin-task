import ForgeUI, { render, Fragment, Text, IssuePanel } from '@forge/ui';

const App = () => {
  return (
    <Fragment>
      <Text>Hello world! Success!</Text>
    </Fragment>
  );
};

export const run = render(
  <IssuePanel>
    <App />
  </IssuePanel>
);
