
            // VISITORS Random number generator JS //
            document.addEventListener('DOMContentLoaded', (event) => {
                let m = Math.random();
                let a = 177800;
                let b = 179900;
                let r = a + (b - a) * m;
                document.getElementById("rand").innerHTML = Math.floor(r);
            });