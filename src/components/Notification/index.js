import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
  console.log(props)
  const {children} = props
  return (
    <div className="notification-container">
      <div className="notification">{children}</div>
      <GrFormClose className="close-icon" />
    </div>
  )
}

export default Notification
