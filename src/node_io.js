class Visitor{
    constructor(fullName,age,dateOfVisist,timeOfVisit,comments,nameOfAssistent) {
      this.fullName = fullName;
      this.age = age;
      this.dateOfVisist = dateOfVisist;
      this.timeOfVisit = timeOfVisit;
      this.comments = comments;
      this.nameOfAssistent = nameOfAssistent;
    }

  async save() {
    let name = this.fullName.replace('','_').toLowerCase()
    try {
        await fs.writeFile(`visitor_${(name)}.json`,
            JSON.stringify(this, null, 4)
        );
        console.log('The data was added to the file');
    } catch (err) {
      throw err;
    } return this;
  }
}
let alice = new Visitor("alice_cooper", 31, 21-09-2020, '07:00', "I missed you", "Ryan Oconnel");


