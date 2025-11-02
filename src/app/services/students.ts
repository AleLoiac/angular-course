import { Injectable } from '@angular/core';
import Student from '../types/student.type';

@Injectable({
  providedIn: 'root',
})
export class Students {
  students: Student[] = [
    { id: 1, fullName: 'Mario Rossi', rate: 6 },
    { id: 2, fullName: 'Luigi Verdi', rate: 8 },
    { id: 3, fullName: 'Laura Neri', rate: 7 },
    { id: 4, fullName: 'Anna Bianchi', rate: 6 },
  ];

  getBestStudent(students: Student[] | null = null) {
    const _students = students ?? this.students;

    if (!_students.length) return null;
    let best = _students[0];
    for (const student of _students) {
      if (student.rate > best.rate) {
        best = student;
      }
    }
    return best;
  }
}
