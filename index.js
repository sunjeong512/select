<html>
    <head>
        <title>My First Page</title>
        <script>
            function hello() {
                console.log("Hello friend!");
            }
            function nine(n) {
                for(var i = 2; i <= 9; i++) {
                console.log(n + "x" + i + "=" + (n*i));
                }
            }
        </script>
    </head>
 
    <body>
        <h1 id="title">My First web page</h1>
        <p>My first paragraph.</p>
        <button onClick="nine(2)">Click me!</button>
    </body>
</html>