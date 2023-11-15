import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const FormUser = ({ createUser, infoUpdate, updateUser, setInfoUpdate, closeForm, setCloseForm }) => {


    const { handleSubmit, register, reset } = useForm ()



    useEffect(() => {
      reset(infoUpdate)
    },[infoUpdate] )

    const submit = data => {
      if (infoUpdate) {
        updateUser('/users', infoUpdate.id, data)
        setInfoUpdate()
      } else {
        createUser('/users', data)
        }
        
      
      reset ({
      email:'',
      password:'',
      first_name:'',
      last_name:'',
      birthday:''
    })
  }

   const handleCloseForm = () => {
    setCloseForm(true)
   }

  return (
   <div onClick={handleCloseForm} className={`form__container ${closeForm && 'close-form'}`}>
     <form onClick={e => e.stopPropagation()} className="form" onSubmit={handleSubmit(submit)}>
      <h1 className="form__title" >Usuarios</h1>
      <div onClick={handleCloseForm} className="form__close">X</div>
      <div className="form__div" >
        <label className="form__label" htmlFor="first_name">First name</label>
        <input className="form__input" {...register('first_name')} type="text" id="first_name" />
      </div>
      <div className="form__div" >
        <label className="form__label" htmlFor="last_name">Last name</label>
        <input className="form__input" {...register('last_name')} type="text" id="last_name" />
      </div>
      <div className="form__div" >
        <label className="form__label" htmlFor="email">Email</label>
        <input className="form__input" {...register('email')} type="email" id="email" />
      </div>
      <div className="form__div" >
        <label className="form__label" htmlFor="password">Password</label>
        <input className="form__input" {...register('password')} type="password" id="password" />
      </div>
      <div className="form__div" >
        <label className="form__label" htmlFor="birthday">Birthday</label>
        <input className="form__input" {...register('birthday')} type="date" id="birthday" />
      </div>
      <button className="form__btn" >{infoUpdate ? 'update' : 'create'}</button>
    </form>
   </div>
  )
}

export default FormUser