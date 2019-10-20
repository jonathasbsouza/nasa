class Api {
    static getTeacher(login){
        const axios = require('axios');

        axios.get('https://nasa-quiz-api.herokuapp.com/teachers/' + login).then(resp => {
            console.log(resp.data);
            return resp.data
        });
    }

    static saveTeacher(login){
        const axios = require('axios');

        var json = {"login": login}
        axios.post('https://nasa-quiz-api.herokuapp.com/teachers', json).then(resp => {
            console.log("ok top");
        });
    }

    static getChallenge(code){
        const axios = require('axios');

        axios.get('https://nasa-quiz-api.herokuapp.com/challenges/' + code).then(resp => {
            console.log(resp.data);
            return resp.data
        });
    }

    static saveChallenge(code, teacher_login, challenge_type_name){
        const axios = require('axios');

        var json = {
            "code": code,
            "teacher_login": teacher_login,
            "challenge_type_name": challenge_type_name
            }
        axios.post('https://nasa-quiz-api.herokuapp.com/challenges', json).then(resp => {
            console.log("ok top");
        });
    }

    static getSubmission(id){
        const axios = require('axios');

        axios.get('https://nasa-quiz-api.herokuapp.com/submissions/' + id).then(resp => {
            console.log(resp.data);
            return resp.data
        });
    }

    static saveSubmission(student_name, score, challenge_code, choice_ids){
        const axios = require('axios');

        var json = {
            "student_name": student_name,
            "score": score,
            "challenge_code": challenge_code,
            "choice_ids": choice_ids
            }
        axios.post('https://nasa-quiz-api.herokuapp.com/submissions', json).then(resp => {
            console.log("ok top");
            console.log(resp.data);
            return resp.data
        });
    }

}