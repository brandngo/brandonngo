import React, { useState } from 'react'
import Layout from '../components/Layout'

const Contact = () => {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`this was submitted ${name}`);
  }

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </label>
        <input type="submit" value="Submit" />
      </form>

    </Layout>
  )
}

export default Contact