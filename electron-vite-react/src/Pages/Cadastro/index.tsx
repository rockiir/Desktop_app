import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
//import './login.css'
import { Button, Form, Grid, TextArea, Select, Input, Header } from 'semantic-ui-react'




const options = [
  { key: 'm', text: 'Masculino', value: 'Masculino' },
  { key: 'f', text: 'Feminino', value: 'Feminino' },
  { key: 'o', text: 'Outros', value: 'Outros' },
]

class Cadastro extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <div className="container">

        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: '80%' }}>
            <Header as='h2' color='blue' textAlign='left'>
              Formulário de cadastro    </Header>
            <Form inverted>
              <Form.Group widths='equal'>
                <Form.Input fluid label='Nome' placeholder='First name' required />
                <Form.Input fluid label='Sobrenome' placeholder='Last name' required />

                <Form.Select
                  fluid
                  label='Genero'
                  options={options}
                  placeholder='Gender'
                  required
                />
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Field
                  id='form-input-control-error-email'
                  control={Input}
                  label='Email'
                  placeholder='joe@schmoe.com'
                  error={{
                    content: 'Por favor digite um email valido',
                    pointing: 'below',
                  }}
                  required
                />

                <Form.Field
                  id='form-input-control-error-email'
                  control={Input}
                  label='Confirmar email'
                  placeholder='joe@schmoe.com'
                  error={{
                    content: 'Por favor digite um email valido',
                    pointing: 'below',
                  }}
                  required
                />
              </Form.Group>

              <Form.Group widths='equal'>
                <Form.Input label='Data de nascimento' icon='calendar alternate' iconPosition='left' placeholder='00/00/0000' type='date' required />
                <Form.Input
                  label='Senha'
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                  required
                />
                <Form.Input
                  label='Confirmar senha'
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                  required
                />
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Input fluid label='Login' placeholder='First name' required />
                <Form.Field>
                  <label>Telefone</label>
                  <Form.Input icon='phone' iconPosition='left' placeholder='(xxx)' />
                </Form.Field>

              </Form.Group>
              <Form.Checkbox label='Aceito termos e condições' />
              <Form.Button>Submit</Form.Button>

            </Form>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default Cadastro
