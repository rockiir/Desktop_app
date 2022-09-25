import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import './login.css'
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react'

const Login = () => (
  <div className="container">
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
  <Grid.Column style={{ maxWidth: '40%', maxHeight:'80%'}}>
    <Header as='h2' color='blue' textAlign='left'>
      <Image src='/public/electron.png' /> Login
    </Header>
    <Form size='large'>
      <Segment stacked>
        <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
        <Form.Input
          fluid
          icon='lock'
          iconPosition='left'
          placeholder='Password'
          type='password'
        />

        <Button color='blue' fluid size='large'>
          Login
        </Button>
      </Segment>
    </Form>

  </Grid.Column>
  </Grid>
  </div>
)
export default Login
