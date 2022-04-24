//se pasó el formulario a un nuevo componente ya que
//esto mejora el rendimiento en caso de tener muchos 
//nodos dependientes en la app principal
import React from 'react'
import Input from './Input'
import Button from './Button'
import useFormulario from "../hooks/useFormulario";



const UserForm = ({submit}) => {
    const [formulario, handleChange, reset] = useFormulario({ name: '', lastName: '', email: '' })

    const handleSubmit=(e)=>{
            e.preventDefault()
            submit(formulario)
            reset()
          

    }
  return (
    <form onSubmit={handleSubmit}>
    <Input
      label='Nombre'
      placeholder='Nombre'
      name='name'
      value={formulario.name}
      onChange={handleChange}
    />
    <Input
      label='Apellido'
      placeholder='Apellido'
      name='lastName'
      value={formulario.lastName}
      onChange={handleChange}
    />
    <Input
      label='Email'
      placeholder='Email'
      name='email'
      value={formulario.email}
      onChange={handleChange}
    />
    <Button>Enviar</Button>
  </form>
  )
}

export default UserForm