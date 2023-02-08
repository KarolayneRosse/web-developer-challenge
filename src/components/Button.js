function Button({text, event}) {
  return(
    <div>
      <button onClick={event}>{text}</button>
    </div>
  )
}

export default Button;