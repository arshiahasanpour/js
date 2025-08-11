
        let users = [];
        let users1 = new Array(4)

        function addUser(name, age, job, ed) {
            users1[0] = name
            users1[1] = age
            users1[2] = job
            users1[3] = ed

            users.push(users1.join(" "))

        }
        addUser("mohamad", "23", "teacher", "diploma")
        addUser("arshia", "55", "teacher", "diploma")
        console.log(users)





       const users = [];



        function addUser(name, age, job, ed) {

            const profile = name + age + job + ed;
            users.push(profile)

            console.log(users)
        }
        addUser("arshia ", 23, " teacher ", " diploma ")


                function addUser(name, age, job, ed) {


            if (typeof name != "string") {
                console.log("name Error");
            }
            else if (typeof age != "number") {
                console.log("age Error");
            }
            else if (typeof job != "string") {
                console.log("job Error");
            }
            else if (typeof ed != "string") {
                console.log("ed Error");
            }


        }
        addUser("arshia", 65, "teachr", "diploma");



        const student = {

            firstName: "arshia",
            GPA: 19,
            class: "ab",
            lesson: ["math", "Arabic ", "sciences"]
        }

        console.log(student)
























        const object1 = {
            firstName: "software engineer",
            lastName: "lawyer",
            mohammed: "technical writer",
            fullName: function () {
                return this.firstName + " " + this.lastName;
            }
        };

        console.log(object1.fullName());



        addUser("arshia", 65, "teachr", "diploma");



        const student = {

            firstName: "arshia",
            GPA: 19,
            class: "ab",
            lesson: ["math", "Arabic ", "sciences"]
        }

        console.log(student)
        



        const person2 = new Object();


        person2.firstName = "John";
        person2.lastName = "Doe";
        person2.age = 50;
        person2.eyeColor = "blue";

        console.log(person2)







<!DOCTYPE html>
<html lang="fa">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>بازی حدس کلمه</title>
    <style>
        body {
            background-color: rgb(42, 36, 36);
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            min-height: 100vh;
            margin: 0;
            font-family: Arial, sans-serif;
            color: #d9b68c;
        }

        #words {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            margin: 100px 45px 1px 45px;
            border: 1px solid #ffffff;
            border-radius: 5px;
            background-color: #858585;
            padding: 15px;
            max-width: 600px;
        }

        .btn-class {
            border: 2px solid #000;
            padding: 10px 15px;
            margin: 10px 10px 10px 0;
            border-radius: 5px;
            box-shadow: 2px 2px 1px rgb(0, 0, 0);
            color: #989898;
            background-color: #2a2a2a;
            cursor: pointer;
            transition: background-color 0.5s ease-in-out, width 0.5s ease-in-out;
        }

        .btn-class:hover:not(:disabled) {
            box-shadow: none;
            background-color: #444;
        }

        .win {
            background-color: rgb(175, 130, 96);
            color: #ffffff;
            box-shadow: 2px 2px 1px rgb(0, 0, 0);
            text-shadow: 1px 1px 6px;
        }

        #box-guess {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
            background-color: #131313;
            margin-top: 100px;
            border-radius: 3px;
            padding: 30px 20px;
            min-width: 400px;
            flex-wrap: nowrap;
        }

        .box-guess {
            font-size: 50px;
            color: rgb(217, 182, 140);
            margin: 20px 1px;
            user-select: none;
        }

        .lost {
            background-color: rgb(128, 61, 59);
            color: #000000;
            box-shadow: 2px 2px 1px rgb(0, 0, 0);
        }

        #text-lose {
            font-size: 30px;
            color: rgb(173, 19, 0);
            text-shadow: 1px 1px rgb(0, 0, 0);
            padding-bottom: 10px;
            margin-top: 50px;
            min-height: 40px;
            text-align: center;
        }

        .disabled-buttons button {
            pointer-events: none;
            opacity: 0.5;
        }

        .clicks {
            display: none;
        }

        .show-clicks {
            color: rgb(217, 182, 140);
            font-size: 40px;
            font-weight: 500;
            margin-top: 50px;
            border: 1px white solid;
            border-radius: 4px;
            background-color: #131313;
            padding: 5px;
            user-select: none;
        }

        .section-bottom {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 20px;
        }

        .Last-click {
            color: red;
        }

        #restart {
            padding: 10px 20px;
            font-size: 18px;
            background-color: #2a2a2a;
            color: white;
            border: 2px solid white;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
            display: none; 
            margin-top: 20px;
        }

        #restart:hover {
            background-color: #444;
        }
    </style>
</head>
<body>

    <div id="words"></div>

    <div id="box-guess"></div>

    <div class="section-bottom">
        <h1 id="text-lose"></h1>
        <p id="clicks" class="show-clicks"></p>
    </div>

    <button id="restart">Restart</button>

    <script>
        let alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
            'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

        let names = [
            'arshia',
            'ali',
            'amir',
            'mahdi',
            'omid'
        ];

        const random = Math.floor(Math.random() * names.length);
        let name = names[random].toUpperCase();

        for (let i = 0; i < name.length; i++) {
            const text = document.createElement('p');
            let div1 = document.getElementById('box-guess');

            text.textContent = "_";
            text.classList.add('box-guess');
            div1.appendChild(text);
        }

        let clickCount = 15;
        let click = document.getElementById('clicks');

        click.innerText = clickCount;

        let all_p = document.getElementById('box-guess').getElementsByTagName('p');

        alphabets.forEach(function (alphabet) {
            let btn = document.createElement('button');
            const div2 = document.getElementById('words');

            btn.classList.add('btn-class');
            btn.textContent = alphabet;

            btn.addEventListener('click', function () {
                btn.disabled = true;

                const indices = [];
                for (let i = 0; i < name.length; i++) {
                    if (name[i] === alphabet) {
                        indices.push(i);
                    }
                }

                for (let i of indices) {
                    all_p[i].textContent = alphabet;
                }

                if (!document.getElementById('box-guess').innerText.includes('_')) {
                    document.getElementById('words').classList.add('disabled-buttons');
                    document.getElementById('text-lose').innerHTML = 'YOU WIN 🎉';
                    document.getElementById('text-lose').classList.add('win-text');
                    document.getElementById('restart').style.display = 'inline-block'; // نمایش دکمه ریستارت در برد
                }

                if (name.includes(alphabet)) {
                    btn.classList.add('win');
                } else {
                    btn.classList.add('lost');
                    clickCount--;
                    click.innerHTML = clickCount;
                }

                if (clickCount <= 0) {
                    document.getElementById('words').classList.add('disabled-buttons');
                    document.getElementById('text-lose').innerHTML = `GAME OVER 😞 — Word: ${name}`;
                    document.getElementById('text-lose').classList.add('lose-text');
                    click.classList.add('clicks');
                    document.getElementById('restart').style.display = 'inline-block'; // نمایش دکمه ریستارت در باخت
                }

                if (clickCount <= 3) {
                    click.classList.add('Last-click');
                }
            });

            div2.appendChild(btn);
        });

        // دکمه ریستارت: بارگذاری دوباره صفحه برای شروع بازی جدید
        document.getElementById('restart').addEventListener('click', function () {
            location.reload();
        });
    </script>

</body>
</html>










