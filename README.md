# EnergyHotline — Alemania (energyhotline.de)

Landing de llamadas para Alemania (Selectra Internacional). HTML estático + Vite, publicada en **Netlify** desde `main`.

Datos tomados de la hoja *Javier x Selectra International Mapping* (proveedores, números, dominio, horario L–V 8–19 h).

## Páginas
| Ruta | Página |
|---|---|
| `/` | Landing |
| `/impressum` | Impressum (§ 5 DDG, § 18 MStV) |
| `/datenschutz` | Datenschutzerklärung (DSGVO, TDDDG) |
| `/cookie-richtlinie` | Cookie-Richtlinie (§ 25 TDDDG) |

## Teléfono por grupo de anuncios
El número por defecto es el del grupo **12546**. Para mostrar otro, añade `?n=<id>` a la URL final del anuncio:

| `?n=` | Lead source Zoho | Número |
|---|---|---|
| `12546` (defecto) | de-ei-pa-javier12546 | 089 3803 8727 |
| `12547` | de-ei-pa-javier12547 | 089 3803 4157 |
| `12548` | de-ei-pa-javier12548 | *pendiente* — añadirlo en `phones` cuando lo pase Selectra |

Solo se aceptan ids de la lista. El número elegido se mantiene en las páginas legales durante la visita y se envía a GTM como evento `phone_variant`.

## H1 personalizable
`?h1=Texto del titular&em=palabra`: cambia el titular y resalta la palabra (se inserta como texto, sin HTML).

## Pendiente
- GTM: `GTM-TS3H8PLX` (contenedor energyhotline.de, cuenta comparaluzygas.es).
- Consentiam (CMP del GTM): clave propia para `energyhotline.de`, banner en alemán con «Alle ablehnen» al mismo nivel que «Alle akzeptieren».
- Dominio: comprar `energyhotline.de` y conectarlo en Netlify.
