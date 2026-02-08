import { useRouter } from 'next/router'
import React from 'react'


function DynamicPage() {
    const {query} = useRouter()
  return (
    <div>
      <h1>This is an DynamicPage {Router.query.username} </h1>
    </div>
  )
}

export default DynamicPage
