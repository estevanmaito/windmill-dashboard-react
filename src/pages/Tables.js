import React from 'react'

import PageTitle from '../components/Typography/PageTitle'
import SectionTitle from '../components/Typography/SectionTitle'
import CTA from '../components/CTA'
import SimpleTable from '../components/Tables/SimpleTable'
import ActionsTable from '../components/Tables/ActionsTable'

function Tables() {
  return (
    <>
      <PageTitle>Tables</PageTitle>

      <CTA />

      <SectionTitle>Simple table</SectionTitle>
      <SimpleTable />

      <SectionTitle>Table with actions</SectionTitle>
      <ActionsTable />
    </>
  )
}

export default Tables
