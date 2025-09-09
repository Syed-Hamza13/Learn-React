
function DynamicComponent(props) {
    const {name, role} = props
  return (


    <div>
        <h1>Hello I am {name} and I am a {role}  </h1>
    </div>
  )
}

export default DynamicComponent