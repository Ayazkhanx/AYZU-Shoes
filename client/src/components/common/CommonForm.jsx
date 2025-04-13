import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Button } from '../ui/button';

export default function CommonForm({ formControl, formData, setFormData, onSubmit, buttonText}) {

  const renderComponentsByComponentType = (getControlItem) => {
    let element = null;
    const value = formData[getControlItem.name] || '';

    switch (getControlItem.componentType) {
      case 'input':
      element = <Input 
      type={getControlItem.type} 
      name={getControlItem.name} 
      id={getControlItem.name} 
      placeholder={getControlItem.placeholder} 
      value={value}
      onChange={(event) => {
        setFormData({ ...formData, [getControlItem.name]: event.target.value });
      }} 
       />
      case 'textarea':
      element = <Textarea 
      name={getControlItem.name} 
      type={getControlItem.type} 
      id={getControlItem.name} 
      placeholder={getControlItem.placeholder} 
      value={value}
      onChange={(event) => {
        setFormData({ ...formData, [getControlItem.name]: event.target.value })
      }} 
      />
      case 'select':
      element = (
          <Select onValueChange={(value) => {
            setFormData({...formData, [getControlItem.name]: value });
             
          }} value={value}>
           <SelectTrigger className='w-full' >
            <SelectValue placeholder={getControlItem.placeholder} />
           </SelectTrigger>
           <SelectContent>

           {
             getControlItem.options && 
             getControlItem?.options.length > 0 ? 
             getControlItem.options.map(optionItem => 
             <SelectItem key={optionItem.id} value={optionItem.id} >
              {optionItem.label}
             </SelectItem> 
              ) : null
           }
           </SelectContent>
          </Select>
            
        )
      default:
        element = <Input 
        type={getControlItem.type} 
        name={getControlItem.name} 
        id={getControlItem.name} 
        placeholder={getControlItem.placeholder}
        value={value}
        onChange={(event) => {
        setFormData({ ...formData, [getControlItem.name]: event.target.value });
      }} 
      />
    }
    return element;
  }



  return (
    <form onSubmit={onSubmit} >
      <div className="flex flex-col gap-3">
        {
          formControl.map(controlItem => 
          <div className="grid w-full gap-1.5" key={formControl.name} >
            <Label className="mb-1"> {controlItem.Label} </Label>
            {
              renderComponentsByComponentType(controlItem)
            }
          </div>)
        }
      </div>
      <Button type='submit' className="mt-2 w-full"> {buttonText || 'Submit' } </Button>      
    </form>
  )
}
