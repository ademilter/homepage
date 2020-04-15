import React from 'react'

export default function Grid({ children }) {
  return <r-grid columns="12">{children}</r-grid>
}

export function ColSidebar({ children }) {
  return <r-cell span="1-2">{children}</r-cell>
}

export function ColContent({ children }) {
  return <r-cell span="3-10">{children}</r-cell>
}

export function ColExtra({ children }) {
  return <r-cell span="11-12">{children}</r-cell>
}
