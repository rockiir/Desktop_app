import React from 'react'
import Pedido from '../../Components/Pedido'
import { Statistic } from 'semantic-ui-react'

const Dashboard = () => (
  <Statistic>
    <Statistic.Value>5,550</Statistic.Value>
    <Statistic.Label>Pedidos</Statistic.Label>
  </Statistic>
)

export default Dashboard
