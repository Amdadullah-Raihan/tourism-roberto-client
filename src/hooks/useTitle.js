import React from 'react'

const useTitle = (newTitle) => {
  return (
    document.title = newTitle
  )
}

export default useTitle;