import { Card, CardBody, Link, Checkbox, Tooltip, Button } from '@nextui-org/react'
import React from 'react'
import {  HiPencil, HiTrash } from 'react-icons/hi';

const TodoList = () => {
  return (
    <Card className='max-w-screen-md mx-auto my-5'>
      <CardBody className='flex flex-row w-full justify-between items-center'>
      <div className="flex gap-2">
      
      <Checkbox defaultSelected lineThrough>
      <Link isBlock showAnchorIcon href="#" color="secondary">
        ورزش
      </Link>
      </Checkbox>
    
    </div>
<div>
<Tooltip key='secondary' color='secondary' content='حذف'>

<Button isIconOnly color="danger" variant="faded" aria-label="Take a photo"> 
  <HiTrash className='text-lg'/>
</Button>
</Tooltip>
<Tooltip key='secondary' color='primary' content='تغییر'>

<Button isIconOnly color="success" variant="faded" aria-label="Take a photo"> 
<HiPencil className='text-lg'/>
</Button>
</Tooltip>
</div>
     
      </CardBody>
    </Card>
 
  )
}

export default TodoList
