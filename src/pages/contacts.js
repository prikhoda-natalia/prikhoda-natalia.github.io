import React from 'react';

import Button from '../components/Button';
import DetailsCollection from '../components/DetailsCollection';
import { TextareaField, TextInputField } from '../components/Field';
import Form, { Form_ActionsGroup, Form_FieldsGroup, Form_Intro } from '../components/Form';
import Link from '../components/Link';
import Page, { Page_Column, Page_Section } from '../components/Page';

import seo from '../seo/contacts';

const ContactsPage = () => {
  const contactDetails = [
    {
      label: 'Email address',
      value: (
        <Link
          href="mailto:prikhoda.natalia.webdev@gmail.com"
          value="prikhoda.natalia.webdev@gmail.com"
        />
      )
    },
    {
      label: 'GitHub account',
      value: <Link href="https://github.com/prikhoda-natalia" value="prikhoda-natalia" />
    },
    {
      label: 'Current location',
      value: 'Moscow, Russia (most of my work is done remotely)'
    },
    {
      label: 'Speaking languages',
      value: 'Russian, English'
    }
  ];
  return (
    <Page seo={seo}>
      <Page_Section heading="Contacts">
        <DetailsCollection items={contactDetails} />
      </Page_Section>
      <Page_Column>
        <Form>
          <Form_Intro>
            <p>
              Or just fill out your information below
              <br />
              and I'll be sure to respond within 24 hours.
            </p>
          </Form_Intro>
          <Form_FieldsGroup>
            <TextInputField inputId="name" isRequired label="Full Name" name="name" />
            <TextInputField
              inputId="email-address"
              isRequired
              label="Email Address"
              name="email-address"
              type="email"
            />
            <TextInputField inputId="subject" label="Subject" name="subject" />
            <TextareaField inputId="message" label="Message" name="message" />
          </Form_FieldsGroup>
          <Form_ActionsGroup>
            <Button type="submit" value="Submit" />
          </Form_ActionsGroup>
        </Form>
      </Page_Column>
    </Page>
  );
};

export default ContactsPage;
