import React from 'react'
import Avatar from '../Avatar'
import faker from 'faker'
import Table from './Table'
import TableHeader from './TableHeader'
import TableCell from './TableCell'
import TableBody from './TableBody'
import TableRow from './TableRow'
import Badge from '../Badge'
import TableFooter from './TableFooter'
import TableContainer from './TableContainer'
import Button from '../Button'
import { EditIcon, TrashIcon } from '../../icons'

function randomBadge() {
  let counter = 0
  return function () {
    const badges = [
      <Badge>Primary</Badge>,
      <Badge type="neutral">Neutral</Badge>,
      <Badge type="success">Success</Badge>,
      <Badge type="danger">Danger</Badge>,
      <Badge type="warning">Warning</Badge>,
    ]

    if (counter === badges.length) counter = 0

    return badges[counter++]
  }
}

const getBadge = randomBadge()

function ActionsTable() {
  return (
    <TableContainer>
      <Table>
        <TableHeader>
          <tr>
            <TableCell>Client</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Actions</TableCell>
          </tr>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 9 }).map((_, i) => (
            <TableRow key={i}>
              <TableCell>
                <div className="flex items-center text-sm">
                  <Avatar className="hidden mr-3 md:block" img={faker.image.avatar()} />
                  <div>
                    <p className="font-semibold">{`${faker.name.firstName()} ${faker.name.lastName()}`}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {faker.name.jobTitle()}
                    </p>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <span className="text-sm">$ {faker.finance.amount()}</span>
              </TableCell>
              <TableCell>{getBadge()}</TableCell>
              <TableCell>
                <span className="text-sm">{faker.date.past().toLocaleDateString()}</span>
              </TableCell>
              <TableCell>
                <div className="flex items-center space-x-4 text-sm">
                  <button className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray">
                    <EditIcon className="w-5 h-5" aria-hidden="true" />
                  </button>
                  <button className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray">
                    <TrashIcon className="w-5 h-5" aria-hidden="true" />
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TableFooter />
    </TableContainer>
  )
}

export default ActionsTable
