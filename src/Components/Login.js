// components/Login.js
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';


function Login() {
  const navigate = useNavigate();  // Hook para navegar entre páginas
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = handleSubmit((data) => {
    console.log("Datos del formulario:", data);
    // Aquí realizamos la redirección al Home cuando el login es exitoso
    navigate("/home");
  });

  return (
    <div className="login-background">
      <form onSubmit={onSubmit} className="login-form">
        <h2>Log in</h2>

        <label>Email</label>
        <input
          type="email"
          name="email"
          {...register("email", {
            required: "Email es requerido",
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: "Correo no válido",
            },
          })}
        />
        {errors.email && <span className="error">{errors.email.message}</span>}

        <label>Password</label>
        <input
          type="password"
          name="password"
          {...register("password", {
            required: "Contraseña es requerida",
            minLength: {
              value: 8,
              message: "La contraseña debe tener al menos 8 caracteres",
            },
          })}
        />
        {errors.password && <span className="error">{errors.password.message}</span>}

        <button type="submit" className="login-button">
          Log in
        </button>
      </form>
    </div>
  );
}

export default Login;
