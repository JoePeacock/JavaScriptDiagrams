/**
 * 'export default' is used to make this class availabe as an import. 
 * If something is not exported it is not visible when imported elsewhere. This 
 * class is an example of some awesome javascript.
 * 
 */
class DemoClass {

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;

        this._name = firstName + " " + lastName;
    }

    // Getter
    get name() {
        return this._name;
    }

    // Setter
    set name(name) {
        this._name = name;
    }

    normalFunction() {
        return 10*12;
    }
    
}