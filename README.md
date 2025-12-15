# Actividad 2: Carga de API-Productos

[cite_start]Este proyecto es una **Single Page Application (SPA)** desarrollada en Angular cuyo objetivo es consumir y gestionar elementos de una API externa de manera tradicional mediante `fetch`[cite: 1, 3].

## 📋 Datos del Estudiante
* **Nombre:** [Tu Nombre Aquí]
* **Fecha de entrega:** [Fecha Aquí]

## 🚀 Objetivos
* [cite_start]Desarrollar un sistema en Angular 18+ para conectar con una API-REST.
* [cite_start]Implementar un formulario para dar de alta nuevos productos[cite: 2].
* [cite_start]Listar, filtrar y eliminar productos de la interfaz[cite: 8, 9, 12].

## 🛠️ Tecnologías Utilizadas
* [cite_start]**Framework:** Angular 18 o posterior.
* [cite_start]**Estilos:** Bootstrap (Maquetación y diseño)[cite: 5, 13].
* [cite_start]**Gestión de datos:** Fetch API y Servicios.
* [cite_start]**Librería opcional:** `uuidgenerator` para generación de IDs[cite: 15].

## ⚙️ Estructura y Componentes
[cite_start]El proyecto sigue una arquitectura SPA con los siguientes elementos[cite: 6, 7, 8, 9, 10, 12]:

1.  **AppComponent:** Contiene la estructura base con Cabecera y Footer.
2.  **ProductService:** Servicio encargado de la comunicación con la API y la hidratación de datos.
3.  **ProductsList:** Componente para listar todos los productos recibidos.
4.  **ProductCard:** Muestra la información individual y permite **eliminar** el producto.
5.  **ProductForm:** Formulario (ReactiveForm) con validadores para crear productos. Actualiza la lista automáticamente al enviar.
6.  **ProductFilter:** Formulario (FormsTemplate) para filtrar por nombre, categoría, precio y estado (activo).

## 🔗 Configuración de la API
La aplicación consume datos de la siguiente URL:
[cite_start]`https://jsonblob.com/api/1313446273633935360` [cite: 4]

> [cite_start]**Nota:** Si la API no responde, el sistema está preparado para usar un JSON de respaldo descrito en los apéndices del proyecto[cite: 18].

## 📦 Instalación y Ejecución

1.  Clonar el repositorio.
2.  Instalar las dependencias:
    ```bash
    npm install
    ```
3.  Ejecutar el servidor de desarrollo:
    ```bash
    ng serve
    ```
