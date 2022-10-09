import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Grid, Header, Icon, Label, Menu, Modal, Rail, Search, Segment, Table } from 'semantic-ui-react'
import Pedido from '../../Components/Pedido'


function Tabela() {
  const [open, setOpen] = React.useState(false)
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState({});
  const [email, setlemail] = useState({});


  return (
    <div>
      <Grid centered columns={2} textAlign='center' style={{ height: '40vh', margin: '0 2% 0 2%' }} verticalAlign='middle'>
        <Grid >
          <Grid.Column style={{ maxWidth: '0%' }}>
            <Rail position='left'>
              <Pedido />
            </Rail>
            <Rail position='right'>
              <Search
                placeholder='Search...' />
            </Rail>
          </Grid.Column>
        </Grid>

        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Header</Table.HeaderCell>
              <Table.HeaderCell>Header</Table.HeaderCell>
              <Table.HeaderCell>Header</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row >
              <Table.Cell >

                <Table.Cell>Cell
                  <Modal
                    closeIcon
                    open={open}
                    trigger={<Button>    <Icon name='edit' /></Button>}
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                  >
                    <Header icon='archive' content='Archive Old Messages' />
                    <Modal.Content>
                      <p>
                        Your inbox is getting full, would you like us to enable automatic
                        archiving of old messages?
                      </p>
                    </Modal.Content>
                    <Modal.Actions>
                      <Button color='red' onClick={() => setOpen(false)}>
                        <Icon name='remove' /> No
                      </Button>
                      <Button color='green' onClick={() => setOpen(false)}>
                        <Icon name='checkmark' /> Yes
                      </Button>
                    </Modal.Actions>
                  </Modal>
                </Table.Cell>
              </Table.Cell>
              <Table.Cell>Cell</Table.Cell>
              <Table.Cell>Cell</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Cell</Table.Cell>
              <Table.Cell>Cell</Table.Cell>
              <Table.Cell>Cell</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Cell</Table.Cell>
              <Table.Cell>Cell</Table.Cell>
              <Table.Cell>Cell</Table.Cell>
            </Table.Row>
          </Table.Body>

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan='3'>
                <Menu floated='right' pagination>
                  <Menu.Item as='a' icon>
                    <Icon name='chevron left' />
                  </Menu.Item>
                  <Menu.Item as='a'>1</Menu.Item>
                  <Menu.Item as='a'>2</Menu.Item>
                  <Menu.Item as='a'>3</Menu.Item>
                  <Menu.Item as='a'>4</Menu.Item>
                  <Menu.Item as='a' icon>
                    <Icon name='chevron right' />
                  </Menu.Item>
                </Menu>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </Grid>
    </div>

  )


}



export default Tabela
