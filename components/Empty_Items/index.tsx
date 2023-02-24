import * as C from  './styles'
interface IProps {
  text : string
}
const EmptyItems = ({ text } : IProps) => {
  return (
    <C.Container>
      <C.ContainerText> {text} </C.ContainerText>
    </C.Container>
  )
}

export default EmptyItems