import classes from './WelcomeForm.module.css'
import { useForm } from 'react-hook-form'
import { useToasts } from 'react-toast-notifications'
import { ErrorMessage } from '@hookform/error-message'

const WelcomeForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    criteriaMode: 'all',
  })

  const { addToast } = useToasts()
  const toastMessage =
    'Tu información fue enviada con éxito, estaremos en contacto contigo'

  const onSubmit = (data) => {
    console.log(data)
    reset()
    addToast(toastMessage, {
      appearance: 'success',
      autoDismiss: true,
    })
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={`${classes.formRow} ${classes.formItem}`}>
        <div className={classes.formItemControl}>
          <div className={classes.formItemInputContent}>
            <input
              className={classes.formInput}
              placeholder='Nombre Completo'
              {...register('nombre', {
                required: true,
              })}
            />
            {errors.nombre && (
              <p className={classes.error}>Este campo es obligatorio</p>
            )}
          </div>
        </div>
      </div>
      <div className={`${classes.formRow} ${classes.formItem}`}>
        <div className={classes.formItemControl}>
          <div className={classes.formItemInputContent}>
            <input
              type='tel'
              className={classes.formInput}
              placeholder='Celular'
              {...register('celular', {
                required: 'Este campo es obligatorio',
                maxLength: {
                  value: 10,
                  message: 'Máximo 10 digitos para el celular',
                },
                minLength: {
                  value: 10,
                  message: 'Mínimo 10 digitos para el celular',
                },
                pattern: {
                  value: /^[0-9]{10}$/,
                  message:
                    'Digite el número celular sin caracteres ni espacios',
                },
              })}
            />
            <ErrorMessage
              errors={errors}
              name='celular'
              render={({ messages }) => {
                return messages
                  ? Object.entries(messages).map(([type, message]) => (
                      <p className={classes.error} key={type}>
                        {message}
                      </p>
                    ))
                  : null
              }}
            />
          </div>
        </div>
      </div>

      <div className={`${classes.formRow} ${classes.formItem}`}>
        <div className={classes.formItemControl}>
          <div className={classes.formItemInputContent}>
            <input
              className={classes.formInput}
              placeholder='Email'
              {...register('email', {
                required: 'Este campo es obligatorio',
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'Email invalido',
                },
              })}
            />
            <ErrorMessage
              errors={errors}
              name='email'
              render={({ messages }) => {
                return messages
                  ? Object.entries(messages).map(([type, message]) => (
                      <p className={classes.error} key={type}>
                        {message}
                      </p>
                    ))
                  : null
              }}
            />
          </div>
        </div>
      </div>
      <div className={`${classes.formRow} ${classes.formItem}`}>
        <div className={classes.formItemControl}>
          <div className={classes.formItemInputContent}>
            <input
              type='number'
              min='18'
              max='100'
              className={classes.formInput}
              placeholder='Edad'
              {...register('edad', {
                required: 'Este campo es obligatorio',
                min: {
                  value: 18,
                  message: 'La edad debe ser superior o igual a 18',
                },
                max: {
                  value: 100,
                  message: 'La edad debe ser inferior o igual a 100',
                },
              })}
            />
            <ErrorMessage
              errors={errors}
              name='edad'
              render={({ messages }) => {
                return messages
                  ? Object.entries(messages).map(([type, message]) => (
                      <p className={classes.error} key={type}>
                        {message}
                      </p>
                    ))
                  : null
              }}
            />
          </div>
        </div>
      </div>
      <div className={`${classes.formRow} ${classes.formItem}`}>
        <div className={classes.formItemControl}>
          <div className={classes.formItemInputContent}>
            <button className={classes.formButton} type='submit'>
              Enviar
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default WelcomeForm
