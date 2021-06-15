import classes from './Content.module.css'
import WelcomeForm from './WelcomeForm'

const Content = ({ selectedItem }) => {
  return (
    <div className={classes.box}>
      <div className={classes.formContainer}>
        <div className={classes.welcomeTitle}>Hola, Bienvenido!</div>
        <div className={classes.welcomeMessage}>
          Sabemos que quieres viajar en un <strong>{selectedItem.name}</strong>,
          por favor diligencia el siguiente formulario:
        </div>
        <WelcomeForm />
      </div>
    </div>
  )
}

export default Content
