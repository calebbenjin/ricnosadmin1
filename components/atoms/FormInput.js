import styled from 'styled-components'
import PropTypes from 'prop-types'

export default function FormInput({name, type, placeholder, onChange, value, className, error, children,label, ...props}) {
  return (
    <FormControl>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={className}
        style={error && { border: 'solid 1px red' }}
      />
      { error && <p>{ error }</p>}
    </FormControl>
  )
}

FormInput.defaultProps = {
  type: "text",
  className: ""
}

// FormInput.propTypes = {
//   name: PropTypes.string.isRequired,
//   type: PropTypes.string,
//   placeholder: PropTypes.string.isRequired,
//   type: PropTypes.oneOf(['text', 'number', 'password']),
//   className: PropTypes.string,
//   value: PropTypes.any,
//   onChange: PropTypes.func.isRequired
// }

const FormControl = styled.div``
