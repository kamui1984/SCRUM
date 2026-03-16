# 🖥️ TechCompare — Comparador de Productos Tecnológicos

> Plataforma web para buscar, filtrar y comparar productos tecnológicos de forma rápida, clara y segura.

---

## 📋 Descripción del Proyecto

**TechCompare** es una aplicación web que centraliza información de productos tecnológicos en una sola plataforma, permitiendo a los usuarios comparar precios, características técnicas y disponibilidad sin necesidad de navegar entre múltiples sitios.

El sistema facilita la toma de decisiones de compra al ofrecer comparaciones lado a lado, filtros por categoría, marca y precio, y visualizaciones gráficas de especificaciones.

---

## 🎯 Objetivos

### General
Desarrollar una aplicación que permita comparar productos tecnológicos mediante una base de datos estructurada, facilitando la búsqueda, filtrado y comparación para tomar decisiones de compra informadas.

### Específicos
- Diseñar y desarrollar una aplicación web para la comparación de productos tecnológicos.
- Implementar una base de datos con nombre, categoría, marca, precio, especificaciones y disponibilidad.
- Conectar la base de datos con la aplicación mediante un sistema backend.
- Implementar búsqueda y filtrado por múltiples criterios.
- Desarrollar interfaz de comparación de productos lado a lado.
- Representar comparaciones mediante gráficas o estadísticas.
- Desplegar la aplicación en una URL pública.

---

## 📦 Alcance

**Incluido:**
- Base de datos de productos tecnológicos.
- Backend para gestión de datos.
- Frontend interactivo con búsqueda, filtrado y comparación.
- Visualización de datos mediante gráficas.
- Despliegue en URL pública.

**No incluido (fuera de alcance):**
- Actualización automática en tiempo real de productos del mercado.
- Integración con tiendas reales en esta fase.

---

## ✅ Supuestos

- El profesor proporcionará una base de datos simulada con productos tecnológicos.
- Los usuarios contarán con acceso a internet.
- El equipo tiene conocimientos básicos de programación.
- Las tecnologías seleccionadas serán suficientes para el desarrollo.

---

## ⚠️ Restricciones

- Tiempo limitado por fechas de entrega del curso.
- Cantidad de marcas y productos limitada a la base de datos provista.
- Posibles limitaciones en experiencia con ciertas tecnologías.
- Dependencia de la base de datos del profesor.
- Restricciones en hosting o despliegue.

---

## 🛠️ Stack Tecnológico

| Área              | Tecnología         |
|-------------------|--------------------|
| Control de versiones | Git & GitHub    |
| Lenguaje          |   Typescript        |
| Base de datos     | Por definir        |
| Frontend          | Por definir        |
| Backend           | Por definir        |
| Despliegue        | URL pública        |

---

## 📖 Historias de Usuario — Gestión PMP

Las siguientes historias corresponden a tareas de gestión del proyecto bajo el marco **PMP (Project Management Professional)**.

---

### 🗂️ HU-PMP-01 — Crear Project Charter

**Como** equipo de desarrollo,  
**quiero** elaborar un Project Charter formal,  
**para** definir el alcance, objetivos, entregables y partes interesadas del proyecto de manera oficial.

**Criterios de aceptación:**
- [ ] El Project Charter incluye nombre del proyecto, justificación, objetivos y alcance.
- [ ] Se identifican los roles del equipo y responsabilidades.
- [ ] El documento es aprobado y firmado (o validado) por el profesor/cliente.
- [ ] El charter está disponible en el repositorio en la carpeta `/docs`.

---

### ✔️ HU-PMP-02 — Definir Definition of Done (DoD)

**Como** equipo de desarrollo,  
**quiero** establecer una Definición de Done clara,  
**para** que todos los miembros del equipo sepan cuándo una tarea o historia de usuario se considera completada.

**Criterios de aceptación:**
- [ ] El DoD está documentado y accesible para todo el equipo.
- [ ] Incluye criterios de código (revisión, pruebas, sin errores).
- [ ] Incluye criterios de documentación y despliegue cuando aplica.
- [ ] El DoD está publicado en el repositorio o en el tablero del proyecto.

---

### 👥 HU-PMP-03 — Definir Registro de Stakeholders

**Como** equipo de desarrollo,  
**quiero** identificar y documentar a todos los stakeholders del proyecto,  
**para** gestionar sus expectativas y asegurar una comunicación efectiva durante el desarrollo.

**Criterios de aceptación:**
- [ ] Se identifican todos los interesados (profesor, equipo, usuarios objetivo, etc.).
- [ ] El registro incluye nombre, rol, interés, nivel de influencia y expectativas.
- [ ] El documento está disponible en la carpeta `/docs` del repositorio.
- [ ] El registro es revisado y actualizado al menos una vez durante el proyecto.

---

### 🐙 HU-PMP-04 — Configurar Repositorio GitHub

**Como** equipo de desarrollo,  
**quiero** configurar correctamente el repositorio en GitHub,  
**para** tener un entorno de colaboración organizado y con control de versiones desde el inicio del proyecto.

**Criterios de aceptación:**
- [ ] El repositorio está creado y es accesible para todos los miembros del equipo.
- [ ] El `README.md` inicial está redactado con descripción del proyecto.
- [ ] Se define una estrategia de ramas (ej. `main`, `develop`, `feature/*`).
- [ ] Se configura `.gitignore` adecuado al stack tecnológico.
- [ ] Se crea la carpeta `/docs` para documentación del proyecto.
- [ ] Se agrega al profesor/evaluador como colaborador o se comparte el enlace público.


## 📖 Historias de Usuario Final

**HU-0001 Catálogo de productos navegable**

Context, objectives, and scope of the document

**HISTORIA**

Como usuario interesado en comprar tecnología, quiero navegar por un catálogo de productos organizados disponibles en la plataforma, para explorar las diferentes opciones de tecnología antes de realizar una comparación

**DESCRIPCIÓN**

El usuario debe poder ver y navegar en el catálogo de productos disponible en la plataforma, el cual mostrará el nombre del producto, una foto del producto y el precio actual del producto.

**CRITERIOS DE ACEPTACIÓN**

- El catálogo debe cargarse desde la base de datos de manera correcta
- Catálogo de productos visible con los productos disponibles
- Cada producto debe mostrar foto, nombre y precio
- Se debe poder explorar todo el catálogo de forma correcta
- El catálogo debe permitir seleccionar un producto para ver los detalles

**PRERREQUISITOS**

Base de datos con información de productos

**MOCKUP/REFERENCIA VISUAL**

- Por subir*

---

**HU-0002 Busqueda de productos**

---

**HISTORIA**

Como Usuario interesado en comprar tecnología, quiero buscar productos por nombre dentro del catálogo, para encontrar fácilmente el producto que estoy buscando para comprar.

**DESCRIPCIÓN**

El usuario debe poder escribir en una barra de búsqueda el producto de interés y la aplicación debe mostrarle los productos que coincidan con su búsqueda, la búsqueda debe ser rápida y tolerante a mayúsculas.

**CRITERIOS DE ACEPTACIÓN**

- Barra de búsqueda visible en el header
- Si hay coincidencias al buscar un producto, estos deben coincidir
- Resultado al presionar Enter o botón de búsqueda
- Mensaje “sin resultados” si no hay coincidencias
- No distingue entre mayúsculas y minúsculas

**PRERREQUISITOS**

HU-0001  Catálogo de productos cargado y visible

**MOCKUP/REFERENCIA VISUAL**

- Por subir*

---

**HU-0003 Filtrar productos**

---

**HISTORIA**

Como usuario que está comprando productos tecnológicos, quiero filtrar los resultados por categoría, marca y rango de precio, para reducir las opciones y analizar los productos que se adapten a mi necesidad.

**DESCRIPCIÓN**

El usuario debe poder filtrar por categoría, marca y rango de precio (una o todas las opciones de filtrado) y la aplicación debe mostrar los resultados relacionados correctamente.

**CRITERIOS DE ACEPTACIÓN**

- Cliente debe poder acceder a la opción de filtrado.
- Cliente debe poder escoger los filtros necesarios.
- Los filtros deben aplicarse de manera correcta y mostrar los resultados correspondientes

**PRERREQUISITOS**

HU-0001  Catálogo de productos cargado y visible

Base de datos con información de productos

**MOCKUP/REFERENCIA VISUAL**

- Por subir*

---

---

**HU-0004 Especificaciones de productos**

---

**HISTORIA**

Como usuario interesado en comparar tecnología, quiero hacer clic en los productos del catálogo y ver las especificaciones para conocer las características antes de compararlo o comprarlo

**DESCRIPCIÓN**

El usuario debe poder hacer clic sobre su producto de interés y ver la ventana con todas las especificaciones de este de forma organizada.

**CRITERIOS DE ACEPTACIÓN**

- Cliente debe poder hacer clic en un producto del catálogo y acceder a las especificaciones
- Cliente debe poder ver la tabla con la información del producto
- Cliente debe poder devolverse al catálogo e ingresar a otro producto cuantas veces necesite

**PRERREQUISITOS**

HU-0001  Catálogo de productos cargado y visible

Base de datos con información de productos

**MOCKUP/REFERENCIA VISUAL**

- Por subir*

---

**HU-0005 Comparador de productos**

---

---

**HISTORIA**

Como usuario interesado en comprar tecnología, quiero comparar varios productos lado a lado, para identificar cual tiene mejores características y tomar la mejor decisión de compra.

**DESCRIPCIÓN**

El usuario debe poder seleccionar dos o más productos del catálogo y visualizar una comparación entre ellos, la comparación mostrará información relevante como precio, marca, especificaciones técnicas y otras características importantes.

**CRITERIOS DE ACEPTACIÓN**

- El usuario debe poder seleccionar los productos que desea comparar.
- La información se presenta de forma clara y organizada.
- Se mostrará la comparación de los productos

**PRERREQUISITOS**

HU-0001  Catálogo de productos cargado y visible

HU-0004 Especificaciones de productos

**MOCKUP/REFERENCIA VISUAL**

- Por subir*

---

**HU-0006 Marcado de productos favoritos**

---

**HISTORIA**

Como usuario interesado en comparar tecnología, quiero marcar productos como favoritos para guardar los dispositivos que me interesan y revisarlos más tarde.

**DESCRIPCIÓN**

El usuario deberá poder dar clic en la opción de favoritos si uno de os productos le llama la atención y así guardar el producto en una pestaña que podrá visualizar el momento que desee

**CRITERIOS DE ACEPTACIÓN**

- El usuario podrá marcar un producto como favorito desde el catálogo o desde el detalle
- El sistema debe guardar los productos favoritos del usuario
- El usuario podrá ver la lista de productos favoritos
- El usuario podrá quitar los productos de la lista favoritos

**PRERREQUISITOS**

HU-0001  Catálogo de productos cargado y visible

HU-0004  Especificaciones de productos

Base de datos con información de productos

**MOCKUP/REFERENCIA VISUAL**

- Por subir*

---

**HU-0007 Reseñas o puntuaciones**

---

**HISTORIA**

Como usuario interesado en comprar tecnología, quiero ver reseñas o puntuaciones de otros usuarios sobre los productos para conocer la experiencia de otras personas antes de tomar una decisión.

**DESCRIPCIÓN**

El usuario deberá poder ver las calificaciones/reseñas que hacen otros usuarios sobre los productos.

**CRITERIOS DE ACEPTACIÓN**

- El sistema mostrará una puntuación o calificación del producto
- La calificación debe mostrarse cuando el usuario visualice el detalle de una publicación
- La puntuación debe ser visible para todos los usuarios

**PRERREQUISITOS**

Aplicación completa y funcional

Base de datos con información de productos

**MOCKUP/REFERENCIA VISUAL**

- Por subir*

---

**HU-0008 Aplicación desplegada en URL pública**

---

**HISTORIA**

Como usuario que desea comparar productos tecnológicos, quiero acceder a la aplicación a través de una URL publica de internet, para poder utilizar el comparador desde cualquier lugar y dispositivo con conexión a internet.

**DESCRIPCIÓN**

El usuario deberá poder acceder a la aplicación desde cualquier lugar por medio de la URL pública.

**CRITERIOS DE ACEPTACIÓN**

- El sistema debe estar desplegado en un servidor accesible mediante URL pública.
- El usuario debe poder acceder al sistema desde un navegador web.
- El sistema debe ser accesible sin necesidad de instalación previa.

**PRERREQUISITOS**

HU-0001  Catálogo de productos cargado y visible

HU-0002

HU-0004  Especificaciones de productos

Base de datos con información de productos

**MOCKUP/REFERENCIA VISUAL**



### Stakeholders: 

- **Profesor:** Cliente principal (proveedor de la BD y evaluador)
    - ¿Qué espera?.
        - Que los estudiantes pongan en práctica lo asimilado en el curso y que aprendan a desarrollar una aplicación demostrando las mejores prácticas para la construcción de proyectos de software
        - Que se cumplan los requerimientos funcionales
        - que se use la estructura de BD que será entregada al equipo
        - Que el desarrollo cumpla con lo que se defina y se apruebe en el Project Charter
        - Que los estudiantes aprueben la materia :)
- **Usuarios Finales:** Comunidad de estudiantes UAN, del curso de Gestión de Proyectos de Software, Compradores de productos tecnológicos que buscan la mejor relación calidad-precio.
    - ¿Qué pueden esperar?
        - Una aplicación funcional que sirva para simplificar los procesos de compra de productos tecnológicos.
- **Desarrolladores:**  Grupo B de la materia de Gestión de Proyectos de Software UAN
    - ¿Qué esperan?
        - Aprender sobre la gestió de proyectos de software para su aplicación en el mundo real fuera del espacio académico
        - Desarrollar una aplicación que cumpla los requisitos de aceptación y con las expectativas y exigencias del docente.
        - Aprobar la materia :)

---

## 📁 Estructura del Repositorio

```
📦 techcompare/
├── 📂 docs/               # Project Charter, DoD, Registro de Stakeholders
├── 📂 frontend/           # Código del cliente
├── 📂 backend/            # Código del servidor
├── 📂 database/           # Scripts y esquemas de base de datos
├── .gitignore
└── README.md
```

---

## 👥 Equipo

| Nombre | Rol |
|--------|-----|
| _(Samuel Gerena)_ | _(Development)_ |
| _(Jorge Montes)_ | _(Development)_ |
| _(Jorge Camargo)_ | _(Scrum master)_ |
| _(Jovany Gutierrez)_ | _(Product owner)_ |

--