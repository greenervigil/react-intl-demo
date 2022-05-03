import React, { useState } from 'react';
import { BlockQuote, BlockQuoteItem, Card, CardAlignment, CardBody, DatePicker, defaultI18n, Flex, FlexJustify,  Form, I18nContext, Input, NativeSelect, TypographyVisualStyle, TimePicker } from 'react-magma-dom';
import { arDZ, sv } from 'date-fns/locale';
import { FormattedMessage, IntlProvider } from 'react-intl';
import { LOCALES } from './i18n/locales';
import { messages } from './i18n/messages';
import './App.css';


function App() {
  const [locale, setLocale] = useState(LOCALES.BRITISH);
  const handleChange = event => {
    alert(`${locale} and ${arDZ}`)
    setLocale(event.target.value)
  }
  return (
    <IntlProvider messages={messages[locale]} locale={locale} defaultLocale={LOCALES.USENGLISH}>
    <I18nContext.Provider value={{...defaultI18n, timeFormat: '24', dateFormat: 'dd/MM/yyyy', locale: arDZ ? arDZ : locale}}>
      <div className="App">
        <h1>
          <FormattedMessage id="app.welcome" defaultMessage="Welcome" description="Welcome header on app main page" />
        </h1>
        <Flex justify={FlexJustify.center}>
          <Card width="50%" hasDropShadow align={CardAlignment.center}>
            <CardBody>
              <Form>
                <Input labelText={<FormattedMessage id="app.color-label" defaultMessage="What's your favorite color?" description="Color input label"/>}
                  style={{textAlign: 'right', float: 'right'}}
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
      </I18nContext.Provider>
    </IntlProvider>
  );
}

export default App;
