import React from 'react';

type TaskPropsType = {
    students: Array<string>
}
export const Tasks = (props:TaskPropsType) => {

    let studentsList = props.students.map((student) => {
        return (
            <li key={student}>
                {student}
            </li>
        )
    } )

    return (
        <ul>
            {studentsList}
        </ul>
    );
};
