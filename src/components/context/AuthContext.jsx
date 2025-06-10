import React, { createContext, useContext, useReducer, useEffect } from 'react'

const AUTH_ACTIONS = {
  LOGIN_START: 'LOGIN_START',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  LOGOUT: 'LOGOUT',
  RESET_PASSWORD_START: 'RESET_PASSWORD_START',
  RESET_PASSWORD_SUCCESS: 'RESET_PASSWORD_SUCCESS',
  RESET_PASSWORD_FAILURE: 'RESET_PASSWORD_FAILURE',
  SET_RESET_EMAIL: 'SET_RESET_EMAIL',
  CLEAR_ERROR: 'CLEAR_ERROR',
}

const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
  resetEmail: '',
  resetToken: null,
}

function authReducer(state, action) {
  switch (action.type) {
    case AUTH_ACTIONS.LOGIN_START:
    case AUTH_ACTIONS.RESET_PASSWORD_START:
      return {
        ...state,
        isLoading: true,
        error: null,
      }

    case AUTH_ACTIONS.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: action.payload.user,
        error: null,
      }

    case AUTH_ACTIONS.LOGIN_FAILURE:
    case AUTH_ACTIONS.RESET_PASSWORD_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      }

    case AUTH_ACTIONS.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        resetToken: action.payload.token,
        error: null,
      }

    case AUTH_ACTIONS.SET_RESET_EMAIL:
      return {
        ...state,
        resetEmail: action.payload.email,
      }

    case AUTH_ACTIONS.LOGOUT:
      return {
        ...initialState,
      }

    case AUTH_ACTIONS.CLEAR_ERROR:
      return {
        ...state,
        error: null,
      }

    default:
      return state
  }
}

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState)

  useEffect(() => {
    const savedUser = localStorage.getItem('giggz_user')
    const savedToken = localStorage.getItem('giggz_token')

    if (savedUser && savedToken) {
      dispatch({
        type: AUTH_ACTIONS.LOGIN_SUCCESS,
        payload: { user: JSON.parse(savedUser) },
      })
    }
  }, [])

  const login = async (email, password, rememberMe = false) => {
    dispatch({ type: AUTH_ACTIONS.LOGIN_START })

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))

      if (email === 'demo@giggz.com' && password === 'password123') {
        const user = {
          id: '1',
          email: email,
          name: 'Demo User',
        }

        const token = 'mock_jwt_token'

        if (rememberMe) {
          localStorage.setItem('giggz_user', JSON.stringify(user))
          localStorage.setItem('giggz_token', token)
        }

        dispatch({
          type: AUTH_ACTIONS.LOGIN_SUCCESS,
          payload: { user },
        })

        return { success: true }
      } else {
        throw new Error('Invalid email or password')
      }
    } catch (error) {
      dispatch({
        type: AUTH_ACTIONS.LOGIN_FAILURE,
        payload: { error: error.message },
      })
      return { success: false, error: error.message }
    }
  }

  const logout = () => {
    localStorage.removeItem('giggz_user')
    localStorage.removeItem('giggz_token')
    dispatch({ type: AUTH_ACTIONS.LOGOUT })
  }

  const forgotPassword = async (email) => {
    dispatch({ type: AUTH_ACTIONS.RESET_PASSWORD_START })

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))

      dispatch({
        type: AUTH_ACTIONS.SET_RESET_EMAIL,
        payload: { email },
      })

      dispatch({
        type: AUTH_ACTIONS.RESET_PASSWORD_SUCCESS,
        payload: { token: 'mock_reset_token' },
      })

      return { success: true }
    } catch (error) {
      dispatch({
        type: AUTH_ACTIONS.RESET_PASSWORD_FAILURE,
        payload: { error: error.message },
      })
      return { success: false, error: error.message }
    }
  }

  const resetPassword = async (newPassword, confirmPassword, token) => {
    dispatch({ type: AUTH_ACTIONS.RESET_PASSWORD_START })

    try {
      if (newPassword !== confirmPassword) {
        throw new Error('Passwords do not match')
      }

      if (newPassword.length < 8) {
        throw new Error('Password must be at least 8 characters long')
      }

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      return { success: true }
    } catch (error) {
      dispatch({
        type: AUTH_ACTIONS.RESET_PASSWORD_FAILURE,
        payload: { error: error.message },
      })
      return { success: false, error: error.message }
    }
  }

  const clearError = () => {
    dispatch({ type: AUTH_ACTIONS.CLEAR_ERROR })
  }

  const value = {
    ...state,
    login,
    logout,
    forgotPassword,
    resetPassword,
    clearError,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
