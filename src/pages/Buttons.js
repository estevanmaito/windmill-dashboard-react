import React from 'react'
import { Link } from 'react-router-dom'

import { HeartIcon, EditIcon } from '../icons'

import PageTitle from '../components/Typography/PageTitle'
import SectionTitle from '../components/Typography/SectionTitle'
import CTA from '../components/CTA'
import Button from '../components/Button'

function Buttons() {
  return (
    <>
      <PageTitle>Buttons</PageTitle>

      <CTA />

      <SectionTitle>Primary</SectionTitle>
      <div className="flex flex-col flex-wrap mb-8 space-y-4 md:flex-row md:items-end md:space-x-4">
        <div>
          <Button size="larger">Larger Button</Button>
        </div>

        <div>
          <Button size="large">Large Button</Button>
        </div>

        <div>
          <Button>Regular</Button>
        </div>

        <div>
          <Button tag={Link} to="/dashboard">
            Router Link
          </Button>
        </div>

        <div>
          <Button disabled>Disabled</Button>
        </div>

        <div>
          <Button size="small">Small</Button>
        </div>
      </div>

      <SectionTitle>Outline</SectionTitle>
      <div className="flex flex-col flex-wrap mb-8 space-y-4 md:flex-row md:items-end md:space-x-4">
        <div>
          <Button layout="outline" size="larger">
            Larger Button
          </Button>
        </div>

        <div>
          <Button layout="outline" size="large">
            Large Button
          </Button>
        </div>

        <div>
          <Button layout="outline">Regular</Button>
        </div>

        <div>
          <Button layout="outline" tag={Link} to="/dashboard">
            Router Link
          </Button>
        </div>

        <div>
          <Button layout="outline" disabled>
            Disabled
          </Button>
        </div>

        <div>
          <Button layout="outline" size="small">
            Small
          </Button>
        </div>
      </div>

      <SectionTitle>Link</SectionTitle>
      <div className="flex flex-col flex-wrap mb-8 space-y-4 md:flex-row md:items-end md:space-x-4">
        <div>
          <Button layout="link" size="larger">
            Larger Button
          </Button>
        </div>

        <div>
          <Button layout="link" size="large">
            Large Button
          </Button>
        </div>

        <div>
          <Button layout="link">Regular</Button>
        </div>

        <div>
          <Button layout="link" tag={Link} to="/dashboard">
            Router Link
          </Button>
        </div>

        <div>
          <Button layout="link" disabled>
            Disabled
          </Button>
        </div>

        <div>
          <Button layout="link" size="small">
            Small
          </Button>
        </div>
      </div>

      <SectionTitle>Icons</SectionTitle>
      <div className="flex flex-col flex-wrap mb-8 space-y-4 md:flex-row md:items-end md:space-x-4">
        <div>
          <Button>
            <span>Icon right</span>
            <HeartIcon className="w-4 h-4 ml-2 -mr-1" aria-hidden="true" />
          </Button>
        </div>

        <div>
          <Button>
            <HeartIcon className="w-4 h-4 mr-2 -ml-1" aria-hidden="true" />
            <span>Icon Left</span>
          </Button>
        </div>

        <div>
          <Button size="icon" arial-label="Like">
            <HeartIcon className="w-5 h-5" aria-hidden="true" />
          </Button>
        </div>

        <div>
          <Button size="icon" aria-label="Edit">
            <EditIcon className="w-5 h-5" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </>
  )
}

export default Buttons
