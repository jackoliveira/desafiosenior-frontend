import { Address } from './address.model';
import { Phone } from './phone.model';

export class Person {
    id: number;
    age: number;
    name: string;
    address: Address;
    phones: Phone[];

   public constructor(init?: Partial<Person>) {
        Object.assign(this, init);
        this.address = new Address();
        this.phones = [new Phone()];
    }
}