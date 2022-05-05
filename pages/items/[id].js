import React from 'react'
import { useRouter } from "next/dist/client/router"

const Item = () => {

    const router = useRouter();
    const { id } = router.query

  return (
    <div>{id}</div>
  )
}

export default Item