import { useEffect, useState } from "react"

function App() {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [data, setData] = useState([])

  console.log(data)

  const submit = e => {
    e.preventDefault()
    const formData = {
      title,
      body
    }
    console.log(formData)
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        setData(data)
      })
  }, [])

  return (
    <>
      <h1>This is react</h1>

      <form onSubmit={submit}>
        <label htmlFor="title"> Title:</label>
        <input
          id="title"
          className="border"
          type="text"
          onChange={(event) => setTitle(event.target.value)} />
        <br />

        <label htmlFor="body"> body:</label>
        <input
          id="body"
          className="border"
          type="text"
          onChange={(event) => setBody(event.target.value)} />
        <br />

        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default App
