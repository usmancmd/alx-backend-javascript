export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience? : number | undefined;
  location: string;
  [key: string]: any;
}

export interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firsName: stirng, lastName: string): string;
}

export function printTeacher(firstname: string, lastName: string): string {
  return `${firstname[0].toUpperCase()}. ${lastName[0].toUpperCase()}${lastName.slice(1)}`
}

interface Student {
  firstName: string;
  lastName: string;
  workOnHomework: string;
  displayName: string;
}

class StudentClass implements Student {
  constructor(public firstName: string, public lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working'
  }

  displayName(): string {
    return this.firstname;
  }
}
