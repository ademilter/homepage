import React from 'react'

export default function Grid({ children }) {
  return (
    <r-grid columns="2" columns-l="12">
      {children}
    </r-grid>
  )
}

export function ColSidebar({ children }) {
  return (
    <r-cell span="2" span-l="1-2">
      {children}
    </r-cell>
  )
}

export function ColContent({ children }) {
  return (
    <r-cell span="2" span-l="3-10">
      {children}
    </r-cell>
  )
}

export function ColExtra({ children }) {
  return (
    <r-cell span="2" span-l="11-12">
      {children}
    </r-cell>
  )
}
