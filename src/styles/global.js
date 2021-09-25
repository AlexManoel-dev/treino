import { createGlobalStyle, css } from 'styled-components'

export default createGlobalStyle`
    :root{
        /* Cores globais, para usar chame assim: background-color: var(--red-color) */
        --red-color: #cc0000;
    }
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    body{
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
`
