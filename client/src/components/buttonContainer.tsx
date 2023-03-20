import { Button } from "@material-tailwind/react"
import { TodoIdType } from "src/utils/types"
import { useTodos } from "../context/index"

export const RemoveButton = ({ id }: TodoIdType) => {
  const { handleDelete } = useTodos()

  const handleClick = async () => {
    console.log(id)
    await handleDelete({ id })
  }
  return <Button variant="text" className="text-red-300" onClick={handleClick}>remove</Button>
}
