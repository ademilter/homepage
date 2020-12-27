import React from 'react'

export default function Grid({ children }) {
  return (
    <r-grid columns="2" columns-t="4" columns-d="12">
      {children}
    </r-grid>
  )
}

export function ColSidebar({ title, children }) {
  return (
    <r-cell span="2" span-t="1" span-d="1-2">
      {title}
      {children}
    </r-cell>
  )
}

export function ColContent({ children }) {
  return (
    <r-cell span="2" span-t="2-4" span-d="3-9">
      {children}
    </r-cell>
  )
}

export function ColExtra({ children }) {
  return (
    <r-cell span="2" span-t="2-4" span-d="10-12">
      {children}
    </r-cell>
  )
}
