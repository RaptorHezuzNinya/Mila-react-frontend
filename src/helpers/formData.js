import React from 'react'

// used in ~/components/MenuDrawer
import NewContactIcon from 'material-ui/svg-icons/social/person-add'
import NetworkIcon from 'material-ui/svg-icons/action/view-list'
import ListSettingsIcon from 'material-ui/svg-icons/action/settings'
export const dataTopMenu = (currentRoute) => [
  {
    route: '/newcontacts',
    iconComp: <NewContactIcon className={ currentRoute === '/newcontacts' ? 'icon active-icon' : 'icon'}/>,
    title: 'New Contacts'
  },
  {
    route: '/mynetwork',
    iconComp: <NetworkIcon className={ currentRoute === '/mynetwork' ? 'icon active-icon' : 'icon'}/>,
    title: 'My Network'
  },
  {
    route: '/settings/list',
    iconComp: <ListSettingsIcon className={ currentRoute === '/settings/list' ? 'icon active-icon' : 'icon'}/>,
    title: 'List Settings'
  }
]

import FaqIcon from 'material-ui/svg-icons/social/whatshot'
import AboutIcon from 'material-ui/svg-icons/action/face'
import BlogIcon from 'material-ui/svg-icons/communication/chat-bubble'
export const dataBotMenu = [
  {
    url: 'https://milahq.com/faq/',
    title: 'FAQ',
    iconComp: <FaqIcon className='icon'/>
  },
  {
    url: 'https://milahq.com/blog/',
    title: 'BLOG',
    iconComp: <BlogIcon className='icon'/>
  },
  {
    url: 'https://milahq.com/about/',
    title: 'ABOUT',
    iconComp: <AboutIcon className='icon'/>
  }
]

// used in ~/components/modals/CreateNetworkList.js
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
