
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

















