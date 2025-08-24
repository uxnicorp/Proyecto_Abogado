# Proyecto Abogado ⚖️

Aplicación web desarrollada con **React + Vite** para la presentación profesional de la **Dra. Altamirano**, abogada especialista en derecho civil, penal y laboral.  
Incluye secciones dinámicas de inicio, servicios, testimonios de clientes y un formulario de contacto con validaciones personalizadas.

---

## 📂 Estructura del Proyecto

Proyecto_Abogado/
└── dr-altamirano/
    ├── index.html
    ├── package.json
    ├── vite.config.js
    └── src/
        ├── App.jsx
        ├── main.jsx
        ├── assets/
        │   └── law-books.png
        ├── componentes-generales/
        │   ├── Formulario.jsx
        │   ├── Testimonios.jsx
        │   └── css/
        │       ├── Formulario.css
        │       └── Testimonios.css
        └── paginas/
            ├── Home.jsx
            ├── Servicios.jsx
            └── css/
                ├── Home.css
                └── Servicios.css

---

## 🚀 Tecnologías utilizadas

- [React 19](https://react.dev/)  
- [Vite 7](https://vitejs.dev/)  
- [React Router 7](https://reactrouter.com/)  
- [Bootstrap / React-Bootstrap](https://react-bootstrap.github.io/)  
- [SweetAlert2](https://sweetalert2.github.io/)  

---

## 🖥️ Funcionalidades principales

- **Página de inicio** (`Home.jsx`): presentación institucional con CTA principal.  
- **Sección de servicios** (`Servicios.jsx`): detalla las especialidades legales (civil, penal y laboral).  
- **Testimonios de clientes** (`Testimonios.jsx`): carrusel dinámico con opiniones reales.  
- **Formulario de contacto** (`Formulario.jsx`):
  - Validación de correo electrónico.  
  - Restricción de caracteres en campos de texto.  
  - Solo admite letras en “Nombre y Apellido”.  
  - Mensajes estilizados con **SweetAlert2**.  

---

## ⚙️ Instalación y uso

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/usuario/Proyecto_Abogado.git
   cd Proyecto_Abogado/dr-altamirano
2. Instalar dependencias:
   npm install
   npm i react-router-dom react react-dom react-router bootstrap react-bootstrap sweetalert2
4. Ejecutar en modo desarrollo:
   npm run dev

---

## 👩‍⚖️ Autoras

- Ailín Torrente
- Ana Paula Soler

---

## 🦄 Para UXnicorp
