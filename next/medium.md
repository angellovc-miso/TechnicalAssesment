# ¿Cómo implementas enrutamiento dinámico en Next.js?

Ya que el enrutamiento en Next se hace a través de la estructura de archivos, puede parecer contra-intuitivo el manejo de rutas dinamicas; sin embargo, la manera de lograrlo es definir los archivos del componente entre corchetes []

```
dashboard/
    user/
        [userId].tsx
```


Luego para saber obtener la parte dinámica del path, usas el useRouter

```
const router = useRouter();
const { userId } = router.query;
```
