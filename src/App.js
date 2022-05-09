import React, { useState } from 'react';
import { BlockQuote, BlockQuoteItem, Card, CardAlignment, CardBody, DatePicker, defaultI18n, Flex, FlexJustify,  Form, I18nContext, Input, NativeSelect, TypographyVisualStyle, TimePicker, Container } from 'react-magma-dom';
import { arDZ, sv } from 'date-fns/locale';
import { FormattedMessage, IntlProvider } from 'react-intl';
import { LOCALES } from './i18n/locales';
import { messages } from './i18n/messages';
import './App.css';
import { Notes } from 'common-experience-library';

const notes = [
  {
    id: '1',
    title: 'Note title',
    userGuid: 'userGuid',
    courseCgi: 'courseCgi',
    instanceId: 'instanceId',
    modifiedTime: '2233-03-22T12:00:00.000',
    body: 'Note body'
  },
  {
    id: '2',
    title: 'Another note title',
    userGuid: 'userGuid',
    courseCgi: 'courseCgi',
    instanceId: 'instanceId',
    modifiedTime: '2233-03-22T12:00:00.000',
    body: 'Here is a multi-line note. Here is a multi-line note. Here is a multi-line note. Here is a multi-line note. Here is a multi-line note. Here is a multi-line note. '
  },
  {
    id: '3',
    title: 'This is a very very long title and I am not sure how much longer it can get ..... ',
    userGuid: 'userGuid',
    courseCgi: 'courseCgi',
    instanceId: 'instanceId',
    modifiedTime: '2233-03-22T12:00:00.000',
    body: 'Here is a multi-line note. Here is a multi-line note. Here is a multi-line note. Here is a multi-line note. Here is a multi-line note. Here is a multi-line note. '
  }
];

function App() {
  const [locale, setLocale] = useState(LOCALES.BRITISH);
  const handleChange = event => {
    setLocale(event.target.value)
  }
  return (
    <IntlProvider messages={messages[locale]} locale={locale} defaultLocale={LOCALES.USENGLISH}>
    <I18nContext.Provider value={{...defaultI18n, timeFormat: '24', dateFormat: 'yyyy/dd/MM', locale: sv}}>
      <div className="App">
        <h1>
          <FormattedMessage id="app.welcome" defaultMessage="Welcome" description="Welcome header on app main page" />
        </h1>
        <Flex justify={FlexJustify.center}>
          <Card width="50%" hasDropShadow align={CardAlignment.center}>
            <CardBody>
              <Form>
                <Input labelText={<FormattedMessage id="app.color-label" defaultMessage="What's your favorite color?" description="Color input label"/>}
                inputStyle={{textAlign: 'right'}}
                  
                />
                <DatePicker labelText={<FormattedMessage id="app.date-label" defaultMessage="Pick a date" description="date picker label" />} 
                
                />
                <TimePicker labelText={<FormattedMessage id="app.time-label" defaultMessage="When is quitting time?" description="time description" />} />
                <NativeSelect labelText={<FormattedMessage id="app.change-label" defaultMessage="Change Language" description="selection option to change language" />}
                onChange={handleChange}>
                  <option>Choose a language</option>
                  <option value="en-US">American English</option>
                  <option value="en-GB">British English</option>
                  <option value="es">Spanish</option>
                  <option value="sv">Swedish</option>
                  <option value="ar">Arabic</option>
                </NativeSelect>
              </Form>
            </CardBody>
          </Card>
        </Flex>
        <BlockQuote>
          <BlockQuoteItem visualStyle={TypographyVisualStyle.headingLarge}>
            <FormattedMessage id='app.quote-message' defaultMessage='I have nothing to say' description='block quote may not get all my translations at the same time' />
          </BlockQuoteItem>
        </BlockQuote>
      </div>
      <Container maxWidth={500}>
        <Notes ssoGUID='1111' courseCgi='courseCGI' activityInstanceId='22222' notes={notes} />
      </Container>
      </I18nContext.Provider>
    </IntlProvider>
  );
}

export default App;
