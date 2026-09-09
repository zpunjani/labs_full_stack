import logo from '../../../logo.svg'

function Header() {
  return (
    <header>
      <img src={logo} alt="Pixell River Financial Logo" className="logo" />

      <div className="header-content">
        <h1>Pixell River Employee Directory</h1>
        <p>Welcome to the employee directory of Pixell River. </p>
      </div>
    </header>
  )
}

export default Header