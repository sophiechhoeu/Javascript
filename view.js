const view = () => `
  <!DOCTYPE html>
  <html>
  <head>
      <meta name="viewport" content="minimum-scale=1.0, width=device-width, maximum-scale=1.0, user-scalable=no"/>
      <meta charset="utf-8">
      <link rel="stylesheet" href="style.css"/>
  </head>
  <body>
      <main>
          <h1>SHOPPING LIST</h1>
          <h2>HI CINDY </h2>
          <h2>HI NATH d</h2>
          <h2>HI MO </h2>
          <h2>HI CARME</h2>

      </main>
      <script src="{process.env.BROWSER_REFRESH_URL}"></script>
  </body>
  </html>
`

module.exports = view;
