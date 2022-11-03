import './index.css'

const Tubnail = props => {
  const {tumbnail, isImgMatched} = props
  const {id, thumbnailUrl} = tumbnail
  const tumbMatch = () => {
    isImgMatched(id)
  }

  return (
    <li className="curser">
      <button type="button" className="tumb-btn" onClick={tumbMatch}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />
      </button>
    </li>
  )
}
export default Tubnail
