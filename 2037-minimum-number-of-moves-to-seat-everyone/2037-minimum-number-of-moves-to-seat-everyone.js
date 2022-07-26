/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function(seats, students) {
    let output = 0;
    let newSeats = seats.sort((a, b) => a - b);
    let newStudents = students.sort((a, b) => a - b)
    
    
        for (let i = 0; i < newSeats.length; i++) {
            if (newSeats[i] === newStudents[i]){
                output += 0
            } else {
                output += Math.abs(newSeats[i] - newStudents[i]);
            }     
            // console.log(output)
    }
    return output;
};