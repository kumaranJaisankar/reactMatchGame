import './index.css'

const TabList = props => {
  const {tabDetails, tabChange, inActiveTab} = props
  const {tabId, displayText} = tabDetails
  const clickToChange = () => {
    tabChange(tabId)
  }
  const btnStyle = inActiveTab ? 'active-btn' : ''

  return (
    <li>
      <button
        type="button"
        className={`button ${btnStyle}`}
        onClick={clickToChange}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabList
