import {Entity, Column, PrimaryGeneratedColumn, OneToOne, OneToMany} from "typeorm"
import {Doctors} from "./doctors"
import {Patients} from "./patients"

@Entity('User Info')
export class UserInfo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string

    @Column()
    bloodGroup: string

    @Column()
    gender: string

    @Column()
    dob: string

    @Column()
    address: string

    @Column()
    contact: string

    @Column()
    ermegencyContactName: string

    @Column()
    emegencyContactNumber: string

    @Column()
    officialIdType: string

    @Column()
    officialIdTypeNumber: string

    @OneToOne(() => Doctors, (doctors) => doctors.id)
    doctors: Doctors

    @OneToOne(() => Patients, (patients) => patients.id)
    patients: Patients



}