interface Teacher {
    readonly firstName: string; 
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
  }

  const teacher3: Teacher = {
    firstName: "Maxence",
    lastName: "Potier",
    fullTimeEmployee: false,
    location: "Reims",
    contract: false,
  };
  
  console.log(teacher3);
  