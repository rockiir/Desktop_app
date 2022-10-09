import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import './home.css'
import { Button, Dimmer, Header, Grid, Form, Input } from 'semantic-ui-react'
const options = [
  { key: 'm', text: 'Masculino', value: 'Masculino' },
  { key: 'f', text: 'Feminino', value: 'Feminino' },
  { key: 'o', text: 'Outros', value: 'Outros' },
]


export default class Pedido extends Component {
  state = {}

  handleOpen = () => this.setState({ active: true })
  handleClose = () => this.setState({ active: false })
  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { active } = this.state

    return (
      <div>
        <Button
          content='Novo pedido'
          icon='plus'
          labelPosition='left'
          onClick={this.handleOpen}
        />

        <Dimmer active={active} onClickOutside={this.handleClose} page>
          <div className="container">

            <Grid textAlign='center' style={{ height: '120vh' }} verticalAlign='middle'>
              <Grid.Column style={{ maxWidth: '100%' }}>
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
        </Dimmer>
      </div>
    )
  }
}

