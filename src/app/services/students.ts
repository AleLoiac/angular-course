import { Injectable } from '@angular/core';

interface Student {
  id: number;
  fullName: string;
  rate: number;
}

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

  getBestStudent() {
    if (!this.students.length) return null;
    let best = this.students[0];
    for (const student of this.students) {
      if (student.rate > best.rate) {
        best = student;
      }
    }
    return best;
  }
}
