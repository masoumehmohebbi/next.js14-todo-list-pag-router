import { Card, CardBody, Link, Checkbox } from '@nextui-org/react'
import React from 'react'

const TodoList = () => {
  return (
    <Card className='max-w-screen-md mx-auto my-5'>
      <CardBody>
      <div className="flex gap-2">
      <Checkbox defaultSelected lineThrough>
      <Link isBlock showAnchorIcon href="#" color="secondary">
        todo item
      </Link>
      </Checkbox>
    </div>
      </CardBody>
    </Card>
 
  )
}

export default TodoList
