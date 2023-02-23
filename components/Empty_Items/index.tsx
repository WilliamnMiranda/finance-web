interface IProps {
  text : string
}
const EmptyItems = ({ text } : IProps) => {
  return (
    <div>
      <p> {text} </p>
    </div>
  )
}

export default EmptyItems