# ¿Cómo implementas modo oscuro en una aplicación web?

Para esto también puedes hacer uso de las media queries, solo que en este caso no preguntas por el tamaño del viewPort, sino por el tema que el usuario tiene elegido.

```
  :root {
    /* Modo claro */
    --bg: #ffffff;
    --text: #1a1a1a;
  }

  @media (prefers-color-scheme: dark) {
    /* Modo oscuro (sobreescribe las variables una vez que el mediaquery se activa)
    :root {
      --bg: #121212;
      --text: #e4e4e4;
    }
  }

```
