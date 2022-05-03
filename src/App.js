import React from 'react';
import { Card, CardAlignment, CardBody, DatePicker, Flex, FlexJustify,  Form, Input } from 'react-magma-dom';
import { FormattedMessage } from 'react-intl';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>
        <FormattedMessage id="app.welcome" defaultMessage="Welcome" description="Welcome header on app main page" />
      </h1>
      <Flex justify={FlexJustify.center}>
        <Card width="50%" hasDropShadow align={CardAlignment.center}>
          <CardBody>
            <Form>
              <Input labelText={<FormattedMessage id="app.color-label" defaultMessage="What's your favorite color?" description="Color input label"/>}/>
              <DatePicker labelText={<FormattedMessage id="app-date-label" defaultMessage="Pick a date?" description="date picker label" />} />
            </Form>
          </CardBody>
        </Card>
      </Flex>
    </div>
  );
}

export default App;
