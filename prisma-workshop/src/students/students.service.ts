// students.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOneOptions } from 'typeorm';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private studentsRepository: Repository<Student>,
  ) {}

  findAll(): Promise<Student[]> {
    return this.studentsRepository.find();
  }

  findOne(id: number): Promise<Student | undefined> {
    const options: FindOneOptions<Student> = { where: { id } };
    return this.studentsRepository.findOne(options);
  }

  async create(student: Student): Promise<Student> {
    const newStudent = this.studentsRepository.create(student);
    return this.studentsRepository.save(newStudent);
  }

  async update(id: number, updatedStudent: Student): Promise<Student | undefined> {
    await this.studentsRepository.update(id, updatedStudent);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.studentsRepository.delete(id);
  }
}
