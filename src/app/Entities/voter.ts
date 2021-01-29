import { Election } from "./election";

export class Voter {
    public voterId : number | any;
    public fullName : String | undefined;
    public adharNo : number | undefined;
    public password : String | undefined;
    public voted : number | undefined;
    public email : String | undefined;
    public employeeId : String | undefined;
    public voterElectionList : Election[] | undefined;
}
