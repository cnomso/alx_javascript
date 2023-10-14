const studentHogwarts = (() => {
    let privateScore = 0;
    let name = null;

    const changeScoreBy = (points) => {
        privateScore += points;
    };

    const setName = (newName) => {
        name = newName;
    };

    const rewardStudent = () => {
        changeScoreBy(1);
    };

    const penalizeStudent = () => {
        changeScoreBy(-1);
    };

    const getScore = () => {
        return `${name}: ${privateScore}`;
    };

    return {
        setName,
        rewardStudent,
        penalizeStudent,
        getScore
    };
})();

// Creating an instance for Harry
const harry = Object.create(studentHogwarts);
harry.setName("Harry");

// Rewarding Harry four times
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();

// Logging Harry's name and score
console.log(harry.getScore());

// Creating an instance for Draco
const draco = Object.create(studentHogwarts);
draco.setName("Draco");

// Rewarding Draco once and penalizing three times
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();

// Logging Draco's name and score
console.log(draco.getScore());