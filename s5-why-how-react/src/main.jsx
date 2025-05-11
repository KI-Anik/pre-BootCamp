import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'

// const element = <div>
//   {
//     new Date().toLocaleTimeString()
//   }
// </div>
// createRoot(document.getElementById('root')).render(element)

// setInterval(() => {
//   const date = (
//     <div>
//       {new Date().toLocaleTimeString()}
//     </div>
//   )
//   createRoot(document.getElementById('root')).render(date)

// }, 1000);

class Hi extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: new Date().toLocaleTimeString(this.props.local)
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        date: new Date()
      })
    }, 1000);
  }

  render() {
    return <>
      <h1>{new Date().toLocaleTimeString(this.props.local)}</h1>
    </>
  }
}

createRoot(document.getElementById('root')).render(<Hi local='bn-BD'></Hi>)