// React must be in scope if you use jsx
import React from 'react'

// // used in ~/modals/CreateNetworkList.js
export const formDataCreateNetworkListModal = (maxTitleCount, titleCount, maxDescCount, descCount) => [
  {
    name: 'title',
    label: 'Type a list name, e.g. Top clients, freelancers, potential investors',
    formHeader: <div className='title-details'><p className='list-name'>Your list title</p><p>{maxTitleCount - titleCount} left</p></div>,
    className: 'title-holder',
    maxChars: 25,
    rows: 1,
    multiLine: false,
    rowsMax: null,
  },
  {
    name: 'description',
    label: 'What do you do with this list? e.g. The VIP list is used for people who have asked questions about our product and want to try our next update',
    formHeader: <div className='desc-details'><p className='desc-name'>Your list description(optional)</p><p>{maxDescCount - descCount} left</p></div>,
    className: 'desc-holder',
    maxChars: 130,
    rows: 2,
    multiLine: true,
    rowsMax: 4,
  }
]

// used in ~/components/NetworkListForm.js
export const formDataNetworkListForm = [
  {
    name: 'title',
    label: 'Enter list title, e.g. clients, prospects …'
  },
  {
    name: 'description',
    label: 'Enter list description',
  }
]