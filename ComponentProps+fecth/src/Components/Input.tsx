
type InputProps = React.ComponentProps<'input'> & {
  label: string
}


const Input = ({ label, ...props }: InputProps) => {
  return (
    <div style={{ marginBottom: '1rem', width: "110px"}}>
      <label htmlFor={label}>{label}
        <input name={label} id={label}{...props} type="text" />
      </label>
    </div>
  )
}

export default Input