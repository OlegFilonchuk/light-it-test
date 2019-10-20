import React from 'react'
import { Link } from 'react-router-dom'

const LoginSuggest = (props) => {
  return (
    <div>
      You need to <Link to={'/login'}>log in</Link> to leave reviews
    </div>
  )
}

export default LoginSuggest
