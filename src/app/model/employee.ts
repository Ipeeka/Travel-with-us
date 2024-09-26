export class EmployeeModel{

    empId:number;
    name:string;
    city:string;
    state:string;
    emailId:string;
    contactNo:number;
    address:string;
    pinCode:number;
    dob:number;


    constructor(){
        this.empId = 0;
        this.name = '';
        this.city = '';
        this.state = '';
        this.emailId = '';
        this.contactNo = 0;
        this.address = '';
        this.pinCode = 0;
        this.dob = 0;

    }

}