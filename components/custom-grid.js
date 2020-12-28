import React from 'react'
import { Col, Grid } from '@comp/grid'

export function CustomGrid({ children, ...props }) {
  return (
    <Grid col="2" col-t="4" col-d="12" {...props}>
      {children}
    </Grid>
  )
}

export function ColSidebar({ children, ...props }) {
  return (
    <Col span="2" span-t="1" span-d="1-2" {...props}>
      {children}
    </Col>
  )
}

export function ColContent({ children, ...props }) {
  return (
    <Col span="2" span-t="2-4" span-d="3-10" {...props}>
      {children}
    </Col>
  )
}

export function ColExtra({ children, ...props }) {
  return (
    <Col span="2" span-t="2-4" span-d="11-12" {...props}>
      {children}
    </Col>
  )
}
