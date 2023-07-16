import React from 'react'
import { trpc } from './utils'

export const Root = () => {
  const messageQuery = trpc.getMessage.useQuery({text: 'imbenrabi'});

  return (
    <div>
    <section>Server Data</section>
    {messageQuery.data?.message}
  </div>
  )
}
