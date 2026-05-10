import { Link } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'
import { GlobalInfo } from '../Context/AppContext'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [IsInput, setIsInput] = useState({
    email: '',
    password: '',
  })
  const Nav = useNavigate()
  const { Login } = useContext(GlobalInfo)

  const HandleChange = (e) => {
    const { name, value } = e.target
    setIsInput((oldState) => ({
      ...oldState,
      [name]: value,
    }))
  }

  // Submit Function
  async function HandleSubmit(event) {
    event.preventDefault()
    // Form validation
    if (!IsInput.email || !IsInput.password) {
      alert('Please fill in all fields')
      return
    }
    try {
      let Res = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'reqres_cb2ec0f9a86845e39f6ea142bb3d20d8',
        },
        body: JSON.stringify({
          email: IsInput.email,
          password: IsInput.password,
        }),
      })
      let ApiData = await Res.json()
      if (!Res.ok) {
        alert(ApiData?.error || 'Login failed')
        return
      }
      Login(ApiData?.token)
      Nav('/dashboard')
    } catch (error) {
      console.log(error)
      alert('An error occurred during login')
    }
  }
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div
        style={{
          background: 'white',
          padding: '40px',
          borderRadius: '10px',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
          width: '100%',
          maxWidth: '400px',
        }}
      >
        <h2
          style={{
            textAlign: 'center',
            color: '#333',
            marginBottom: '30px',
            fontSize: '28px',
            fontWeight: '600',
          }}
        >
          Login
        </h2>

        <form data-testid="login-form" onSubmit={HandleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label
              style={{
                display: 'block',
                marginBottom: '8px',
                color: '#555',
                fontSize: '14px',
                fontWeight: '500',
              }}
            >
              Email
            </label>
            <input
              data-testid="email-input"
              type="email"
              value={IsInput.email}
              name="email"
              onChange={HandleChange}
              placeholder="Enter your email"
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '5px',
                fontSize: '14px',
                boxSizing: 'border-box',
                transition: 'border-color 0.3s',
                outline: 'none',
              }}
              onFocus={(e) => (e.target.style.borderColor = '#667eea')}
              onBlur={(e) => (e.target.style.borderColor = '#ddd')}
            />
          </div>

          <div style={{ marginBottom: '25px' }}>
            <label
              style={{
                display: 'block',
                marginBottom: '8px',
                color: '#555',
                fontSize: '14px',
                fontWeight: '500',
              }}
            >
              Password
            </label>
            <input
              data-testid="password-input"
              type="password"
              value={IsInput.password}
              name="password"
              onChange={HandleChange}
              placeholder="Enter your password"
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '5px',
                fontSize: '14px',
                boxSizing: 'border-box',
                transition: 'border-color 0.3s',
                outline: 'none',
              }}
              onFocus={(e) => (e.target.style.borderColor = '#667eea')}
              onBlur={(e) => (e.target.style.borderColor = '#ddd')}
            />
          </div>

          <button
            data-testid="form-submit"
            type="submit"
            style={{
              width: '100%',
              padding: '12px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-2px)'
              e.target.style.boxShadow = '0 5px 20px rgba(102, 126, 234, 0.4)'
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)'
              e.target.style.boxShadow = 'none'
            }}
          >
            SUBMIT
          </button>
        </form>

        <div
          style={{
            textAlign: 'center',
            marginTop: '20px',
          }}
        >
          <Link
            to="/"
            style={{
              color: '#667eea',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: '500',
              transition: 'color 0.3s',
            }}
            onMouseOver={(e) => (e.target.style.color = '#764ba2')}
            onMouseOut={(e) => (e.target.style.color = '#667eea')}
          >
            ← Go Back
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Login
